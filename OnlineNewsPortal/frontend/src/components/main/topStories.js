import {
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Grid,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import app_config from "../config";
  
  
  
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
                
                alt={product.name}
              />
              <CardContent>
                <p className="p-title">{product.name}</p>
                <p className="text-muted">{product.variant}</p>
                <span className="p-rating">
                  {product.rating} <i class="fas fa-star"></i>
                </span>
                &nbsp;&nbsp;
                <span className="text-muted">({product.reviews})</span>
                <p className="h4 mt-4">₹ {product.price}</p>
              </CardContent>
            </Card>
          </Grid>
        ));
      } else {
        <CircularProgress />;
      }
    };
  
    return (
      <div className="container">
        <h1>List Products</h1>
        <Grid container spacing={6}>
          {displayProducts()}
        </Grid>
      </div>
    );
  };
  
  export default ListProducts;