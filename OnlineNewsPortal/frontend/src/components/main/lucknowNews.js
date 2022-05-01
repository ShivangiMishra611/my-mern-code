import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Button,
  
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


import "./currentAffairs.css";

const LucknowNews = () => {
  const [newsArray, setNewsArray] = useState([]);
  const [loading, setLoading] = useState(true);
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
    Date.prototype.removeDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() - days);
      return date;
    };
    const filtered = data.filter((newsLucknow) => {
      return new Date(newsLucknow.createdAt) >= new Date().removeDays(1);
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
      return filter.toLowerCase() == newsLucknow.categorystate.toLowerCase();
    });

    console.log(filteredArray);

    setNewsArray([...filteredArray]);
    setLoading(false);
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
        variant="outlined"
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
              <Tooltip title={newsLucknow.title}>
              <h2
                  component="div"
                  variant="h5"
                  onClick={(e) => navigate("/main/viewnews/" + newsLucknow._id)}
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
                  <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardContent>
              
              <CardActions>
              <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={(e) => navigate("/main/viewnews/" + newsLucknow._id)}
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
        <h1 className="news-title">Trusted News Tribune</h1>
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
