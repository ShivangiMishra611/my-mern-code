import {
    Card,
    CardContent,
    CardMedia,
    
    Grid,Box,Button
  } from "@mui/material";
  import { useEffect, useState } from "react";
import app_config from "../../config";

import "./topstories.css";
  
  
  const TopStories = () => {

   
    const [newsArray, setNewsArray] = useState([]);
    const [loading, setLoading] = useState(true);
  
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
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const displaynews = () => {
      if (!loading) {
        return newsArray.map((news) => (
          <Grid item md={3}>
            <Card>
              <CardMedia
                component="img"
                height="350"
                image={url + "/" + news.thumbnail}
                
                alt={news.title}
              />
              <CardContent>
                <p className="p-title">{news.title}</p>
                <p className="text-muted">{news.summary}</p>
                
                
              </CardContent>
            </Card>
          </Grid>
        ));
      } 
    };
  
    return (
      <div className="container">
        <h1 className="news-title">Trusted News Tribune</h1>
        <div className="category-header">
        <Box sx={{ '& button': { m: 1 } }}>

        <Button variant="contained" size="medium">
         Category1
        </Button>

        <Button variant="contained" size="medium">
         Category2
        </Button>

        <Button variant="contained" size="medium">
         Category3
        </Button>

        <Button variant="contained" size="medium">
         Category4
        </Button>

        <Button variant="contained" size="medium">
         Category5
        </Button>

        <Button variant="contained" size="medium">
         Category6
        </Button>


        <Button variant="contained" size="medium">
         Category7
        </Button>

        <Button variant="contained" size="medium">
         Category8
        </Button>

        </Box>
        </div>
        <Grid container spacing={6}>
          {displaynews()}
        </Grid>
      </div>
    );
  };
  
  export default TopStories;
