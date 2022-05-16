import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Button,
  InputAdornment,
  Typography,
  CardActions,
  Container,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../../config";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useParams } from "react-router-dom";

import "./currentAffairs.css";

const CurrentAffairs = () => {
  const [NewsArray, setNewsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const { categorystate } = useParams();
  const navigate = useNavigate();
  const [dateFilters, setDateFilters] = useState([]);
  const [currentDateFilter, setCurrentDateFilter] = useState(null);

  const newsCategories = ["National", "International"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const filterTopStories = (data) => {
    // Date.prototype.removeDays = function (days) {
    //   var date = new Date(this.valueOf());
    //   date.setDate(date.getDate() - days);
    //   return date;
    // };
    const currentDate = new Date();
    return data;
    const filtered = data.filter((newscurrent) => {
      const newsDate = new Date(newscurrent.createdAt);
      return (
        newsDate.getFullYear() === currentDate.getFullYear() &&
        newsDate.getMonth() === currentDate.getMonth() &&
        newsDate.getDate() === currentDate.getDate()
      );
    });

    console.log(filtered);
    return filtered;
  };

  const url = app_config.api_url;

  const storeDateFilters = (data) => {
    let filteredDates = [];
    for (let { createdAt } of data) {
      let date = new Date(createdAt);
      let exists = filteredDates.filter(
        (d) =>
          d.getFullYear() === date.getFullYear() &&
          d.getMonth() === date.getMonth()
      );

      if (!(exists.length > 0)) {
        filteredDates.push(date);
      }
    }

    console.log(filteredDates);
    setDateFilters([...filteredDates]);
  };

  // Step 1 : Fetch Data from server
  const fetchData = () => {
    fetch(url + "/newscurrent/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        storeDateFilters(data);
        if (categorystate) {
          applyFilter(filterTopStories(data), categorystate);
        } else {
          setNewsArray(filterTopStories(data));
        }
        setLoading(false);
      });
  };

  const displayDateFilters = () => {
    if (!loading) {
      return (
        <ul className="list-group mt-5">
          {dateFilters.map((date) => (
            <li
              className={
                date === currentDateFilter
                  ? "list-group-item active"
                  : "list-group-item"
              }
              style={{ fontWeight: "600", cursor: "pointer" }}
              onClick={(e) => applyDateFilter(date)}
            >
              {monthNames[date.getMonth()]} {date.getFullYear()}
            </li>
          ))}
        </ul>
      );
    }
  };

  const applyDateFilter = (date) => {
    setCurrentDateFilter(date);
    refreshData2(date);
  };

  const refreshData = (filter) => {
    setLoading(true);
    fetch(url + "/newscurrent/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        applyFilter(filterTopStories(data), filter);
      });
  };

  const refreshData2 = (filter) => {
    setLoading(true);
    fetch(url + "/newscurrent/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dateFilter(filterTopStories(data), filter);
      });
  };

  const applyFilter = (data, filter) => {
    const filteredArray = data.filter((newscurrent) => {
      return filter.toLowerCase() == newscurrent.categorystate.toLowerCase();
    });

    console.log(filteredArray);

    setNewsArray([...filteredArray]);
    setLoading(false);
  };

  const dateFilter = (data, filter) => {
    const filteredArray = data.filter(({ createdAt }) => {
      return (
        filter.getFullYear() === new Date(createdAt).getFullYear() &&
        filter.getMonth() === new Date(createdAt).getMonth()
      );
    });

    console.log(filteredArray);

    setNewsArray([...filteredArray]);
    setLoading(false);
  };

  const filternews = () => {
    fetch(url + "/newscurrent/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filtered = data.filter(({ title }) => {
          return title.toLowerCase().includes(filter.toLowerCase());
        });
        console.log(filtered);
        setNewsArray(filtered);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const truncate = (text, n) => {
    return text.substring(0, n) + "...";
  };

  const displayCategories = () => {
    return newsCategories.map((categorystate) => (
      <Button
        color="primary"
        variant="contained"
        size="medium"
        onClick={(e) => refreshData(categorystate)}
      >
        {categorystate}
      </Button>
    ));
  };

  const displaynews = () => {
    if (!loading) {
      return NewsArray.map((newscurrent) => (
        <Card className="mt-5">
          <Grid container>
            <Grid item xs={6} md={4}>
              <CardMedia
                component="img"
                height="250"
                image={url + "/" + newscurrent.thumbnail}
                alt={newscurrent.title}
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <CardContent>
                <Tooltip title={newscurrent.title}>
                  <h2
                    component="div"
                    variant="h5"
                    onClick={(e) =>
                      navigate("/main/viewnews/" + newscurrent._id)
                    }
                    style={{
                      cursor: "pointer",
                      color: "#950000",
                      fontWeight: "bolder",
                    }}
                  >
                    {truncate(newscurrent.title, 65)}
                  </h2>
                </Tooltip>
                <h4
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  style={{
                    cursor: "pointer",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  {truncate(newscurrent.summary, 100)}
                </h4>
              
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={(e) => navigate("/main/viewnews/" + newscurrent._id)}
                >
                  Learn More
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      ));
    }
  };

  return (
    <div>
      <header className="caffairs-header">
        <Typography className="text-center text-white" variant="h5">
          Trusted News Tribune
        </Typography>
        <Typography className="text-center text-white" variant="h2">
          Current Affairs
        </Typography>
        <div className="col-6 mx-auto">
          <div className="input-group mt-5">
            <input
              className="form-control"
              value={filter}
              label="Search Here"
              onChange={(e) => setFilter(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{ color: "active.active", mr: 1, my: 0.5 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" onClick={filternews} type="submit">
              Search
            </Button>
          </div>
        </div>
        <br></br>
        <Container>
          <div className="category-header">
            <Box
              sx={{
                "& button": { m: 1 },
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {displayCategories()}
            </Box>
          </div>
        </Container>
      </header>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={9}>
            {displaynews()}
          </Grid>
          <Grid item md={3}>
            {displayDateFilters()}
          </Grid>
        </Grid>
      </Container>
    </div>
  );

  // return (
  //   <div>
  //     <Card sx={{ minWidth: 100 }}>
  //       <CardContent>
  //         <h3 sx={{ fontSize: 14 }} color="black" gutterBottom>
  //           Current Affairs May 2022
  //         </h3>
  //       </CardContent>
  //     </Card>
  //   </div>
  // );
};

export default CurrentAffairs;
