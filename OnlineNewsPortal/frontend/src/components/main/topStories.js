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

import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useParams } from "react-router-dom";

import "./topstories.css";

const TopStories = () => {
  const [NewsArray, setNewsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const { category } = useParams();
  const navigate = useNavigate();

  const newsCategories2 = [
    "Sports",

    "World",
    "Lifestyle",
    "Entertainment",
    "Health",
    "Business",
    "Education",
    "Technology",
  ];

  const newsCategories = {
    Sports: ["CRICKET", "FOOTBALL", "BASKETBALL", "HOCKEY"],

    Lifestyle: [
      "STYLE",
      "BEAUTY",
      "RELATIONSHIPS",
      "HOME AND GARDEN",
      "ASTROLOGY",
    ],

    Entertainment: ["CELEBRITY", "TV", "MOVIES", "SOUTH CINEMA"],

    Health: ["CORONAVIRUS", "FITNESS", "DIET", "WEIGHT LOSS", "FOOD"],

    Business: [
      "INDIAN BUSINESS",
      "CRYPTOCURRENCY",
      "INTERNATIONAL BUSINESS",
      "GST",
      "BUDGET",
      "BANKING",
    ],

    Education: ["BOARD EXAMS", "ENTRANCE EXAMS", "ADMISSION", "CBSE"],

    Technology: ["TECH NEWS", "GADGETS"],

    World: ["US", "PAKISTAN", "CHINA", "UK", "SOUTH ASIA", "REST OF  WORLD"],
  };

  const filterTopStories = (data) => {
    // Date.prototype.removeDays = function(days) {
    //   var date = new Date(this.valueOf());
    //   date.setDate(date.getDate() - days);
    //   return date;
    // }
    const currentDate = new Date();
    // return data;
    const filtered = data.filter((news) => {
      const newsDate = new Date(news.createdAt);
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

  // Step 1 : Fetch Data from server
  const fetchData = () => {
    fetch(url + "/news/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (category) {
          applyFilter(filterTopStories(data), category);
        } else {
          setNewsArray(filterTopStories(data));
        }
        setLoading(false);
      });
  };

  const refreshData = (filter) => {
    setCurrentCategory(filter);
    setLoading(true);
    fetch(url + "/news/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        applyFilter(filterTopStories(data), filter);
      });
  };

  const refreshSubData = (filter) => {
    // setCurrentCategory(filter);
    setLoading(true);
    fetch(url + "/news/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        applySubFilter(filterTopStories(data), filter);
      });
  };

  const applyFilter = (data, filter) => {
    // if(!filter){
    //   return data;
    // }
    const filteredArray = data.filter((news) => {
      return filter.toLowerCase() == news.category.toLowerCase();
    });

    console.log(filteredArray);

    setNewsArray([...filteredArray]);
    setLoading(false);
  };

  const applySubFilter = (data, filter) => {
    // if(!filter){
    //   return data;
    // }
    const filteredArray = data.filter((news) => {
      return filter.toLowerCase() == news.subCategory.toLowerCase();
    });

    console.log(filteredArray);

    setNewsArray([...filteredArray]);
    setLoading(false);
  };

  const filternews = () => {
    fetch(url + "/news/getall")
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
    return Object.keys(newsCategories).map((cate) => (
      <Button
        color={
          currentCategory === cate || category === cate ? "warning" : "primary"
        }
        variant="contained"
        size="medium"
        onClick={(e) => refreshData(cate)}
      >
        {cate}
      </Button>
    ));
  };

  const displaySubCategories = () => {
    if(category || currentCategory)
    return newsCategories[category ? category : currentCategory].map((cate) => (
      <Button
        color="warning"
        variant="contained"
        size="small"
        onClick={(e) => refreshSubData(cate)}
      >
        {cate}
      </Button>
    ));
  };

  const displaynews = () => {
    if (!loading) {
      return NewsArray.map((news) => (
        <Card className="mt-5">
          <Grid container>
            <Grid item xs={6} md={4}>
              <CardMedia
                component="img"
                height="250"
                image={url + "/" + news.thumbnail}
                alt={news.title}
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <CardContent>
              <h5>{news.createdAt}</h5>
                <Tooltip title={news.title}>
                  <h2
                    component="div"
                    variant="h5"
                    onClick={(e) => navigate("/main/viewnews/" + news._id)}
                    style={{
                      cursor: "pointer",
                      color: "#950000",
                      fontWeight: "bolder",
                    }}
                  >
                    {truncate(news.title, 65)}
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
                  {truncate(news.summary, 100)}
                </h4>
               
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={(e) => navigate("/main/viewnews/" + news._id)}
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
      <header className="stories-header">
     

        <Typography className="text-center text-white" variant="h5">
          Trusted News Tribune
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
            <Box
              sx={{
                "& button": { m: 1 },
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {displaySubCategories()}
            </Box>
          </div>
        </Container>
      </header>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={9}>
            {displaynews()}
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default TopStories;
