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
  
  import "./currentAffairs.css"; 
  
  const CurrentAffairs = () => {
  
    const [newsArray, setNewsArray] = useState([]);
    const [loading, setLoading] = useState(true);

    const newsCategories = [
        "Uttar Pradesh",
        "Madhya Pradesh",
        "Kanpur",
        "Rajasthan",
        "Bihar",
      ];
  
    
  
   
  
    const filterTopStories = (data) => {
      
      Date.prototype.removeDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() - days);
        return date;
    }
      const filtered =  data.filter((newscurrent) => {
        return new Date(newscurrent.createdAt) >= new Date().removeDays(1);
      })
  
      console.log(filtered);
      return filtered;
    }
  
    const url = app_config.api_url;
  
    // Step 1 : Fetch Data from server
    const fetchData = () => {
      fetch(url + "/newscurrent/approvenews")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
         
          setLoading(false);
        });
    };
  
    const refreshData = (filter) => {
      setLoading(true);
      fetch(url + "/newscurrent/approvenews")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
         
          
        });
    };
    const applyFilter = (data, filter) => { 
    
        const filteredArray = data.filter( newscurrent => {
          return filter.toLowerCase() == newscurrent.category.toLowerCase();
        } )
    
        console.log(filteredArray);
    
        setNewsArray([...filteredArray]);
        setLoading(false);
    
    
       };
    
      useEffect(() => {
        fetchData();
      }, []);
      const displayCategories = () => {
        return newsCategories.map((categorystate) => (
          <Button variant="outlined" size="medium" onClick={e => refreshData(categorystate)}>
            {categorystate}
          </Button>
        ));
      };
    
  
    
  
    useEffect(() => {
      fetchData();
    }, []);
  
    
  
    const displaynews = () => {
      if (!loading) {
        return newsArray.map((newscurrent) => (
          <Card className="mt-5">
            <Grid container>
              <Grid item xs={6} md={4}>
                <CardMedia
                  component="img"
                  height="200"
                  image={url + "/" + newscurrent.thumbnail}
                  alt={newscurrent.title}
                />
              </Grid>
              <Grid item xs={6} md={8}>
                <CardContent>
                  <Typography component="div" variant="h5">
                    {newscurrent.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {newscurrent.summary}
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
  
  export default CurrentAffairs;
  