import {
    Card,
    CardContent,
    CardMedia,
    
    Grid,
  } from "@mui/material";
  import { useEffect, useState } from "react";
import app_config from "../../config";

  
  
  
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
        <h1>Display News</h1>
        <Grid container spacing={6}>
          {displaynews()}
        </Grid>
      </div>
    );
  };
  
  export default TopStories;
