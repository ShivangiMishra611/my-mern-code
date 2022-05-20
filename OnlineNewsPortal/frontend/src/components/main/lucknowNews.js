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
import { useNavigate ,useParams} from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";


import "./currentAffairs.css";

const LucknowNews = () => {
  const [newsArray, setNewsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const { category } = useParams();
  const navigate = useNavigate();

  const newsCategories = [
    "Civic Issues",
    "Crime",
    "Politics",
    "School And Colleges",
    "UP Elections",
    "Pollution News",
    "Events",
  ];

  const filterTopStories = (data) => {
    // Date.prototype.removeDays = function (days) {
    //   var date = new Date(this.valueOf());
    //   date.setDate(date.getDate() - days);
    //   return date;
    // };
    
      const currentDate = new Date();
      return data;
      const filtered = data.filter((newsLucknow) => {
        const newsDate = new Date(newsLucknow.createdAt);
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
    fetch(url + "/newsLucknow/approvenews")
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
    setLoading(true);
    fetch(url + "/newsLucknow/approvenews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        applyFilter(filterTopStories(data), filter);
      });
  };
  const applyFilter = (data, filter) => {
    const filteredArray = data.filter((newsLucknow) => {
      return filter.toLowerCase() == newsLucknow.category.toLowerCase();
    });

    console.log(filteredArray);

    setNewsArray([...filteredArray]);
    setLoading(false);
  };
  const filternews = () => {
    fetch(url + "/newsLucknow/getall")
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
    return newsCategories.map((category) => (
      <Button
        color="primary"
        variant="contained"
        size="medium"
        onClick={(e) => refreshData(category)}
      >
        {category}
      </Button>
    ));
  };

  

  const displaynews = () => {
    if (!loading) {
      return newsArray.map((newsLucknow) => (
        <Card
          className="mt-5"
         
        >
          <Grid container>
            <Grid item xs={6} md={4}>
              <CardMedia
                component="img"
                height="250"
                image={url + "/" + newsLucknow.thumbnail}
                alt={newsLucknow.title}
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <CardContent>
              <h5>{newsLucknow.createdAt}</h5>
              <Tooltip title={newsLucknow.title}>
              <h2
                  component="div"
                  variant="h5"
                  onClick={(e) => navigate("/main/viewlucknow/" + newsLucknow._id)}
                  style={{
                    cursor: "pointer",
                    color: "#950000",
                    fontWeight: "bolder",
                  }}
                >
                    {truncate(newsLucknow.title, 65)}
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
                 
                  {truncate(newsLucknow.summary, 100)}
                  </h4>
                 
                
              </CardContent>
              
              <CardActions>
              <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={(e) => navigate("/main/viewlucknow/" + newsLucknow._id)}
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
      <header className="lucknow-header">
      <a className="navbar-brand" href="#">
            <img src={url + "/images/logoo.png"} alt="" width="50" height="35" />
          </a>
        
      <Typography className="text-center text-white" variant="h5">
          Trusted News Tribune
        </Typography>
        <Typography className="text-center text-white" variant="h2">
          Lucknow News
        </Typography>
        <div className="col-6 mx-auto">
          <div className="input-group mt-5">
            <input className="form-control"
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
             }} />
            <Button variant="contained"  onClick={filternews} type="submit">Search</Button>
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
          <Grid item md={3}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LucknowNews;