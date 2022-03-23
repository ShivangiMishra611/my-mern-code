import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Button,
  Typography,
  CardActions,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../../config";

import "./topstories.css"; 

const TopStories = () => {
  const [newsArray, setNewsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const newsCategories = [
    "Sports",
    "Politics",
    "World",
    "Lifestyle",
    "Entertainment",
  ];

  const newssubCategories =[

  ]

  const url = app_config.api_url;

  // Step 1 : Fetch Data from server
  const fetchData = () => {
    fetch(url + "/news/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsArray(data);
        setLoading(false);
      });
  };

  const refreshData = (filter) => {
    setLoading(true);
    fetch(url + "/news/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        applyFilter(data, filter)
        
      });
  };

  const applyFilter = (data, filter) => { 
    
    const filteredArray = data.filter( news => {
      return filter.toLowerCase() == news.category.toLowerCase();
    } )

    console.log(filteredArray);

    setNewsArray([...filteredArray]);
    setLoading(false);


   };

  useEffect(() => {
    fetchData();
  }, []);

  const displayCategories = () => {
    return newsCategories.map((category) => (
      <Button variant="outlined" size="medium" onClick={e => refreshData(category)}>
        {category}
      </Button>
    ));
  };

  const displaynews = () => {
    if (!loading) {
      return newsArray.map((news) => (
        <Card className="mt-5">
          <Grid container>
            <Grid item xs={6} md={4}>
              <CardMedia
                component="img"
                height="200"
                image={url + "/" + news.thumbnail}
                alt={news.title}
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <CardContent>
                <Typography component="div" variant="h5">
                  {news.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {news.summary}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
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

export default TopStories;
