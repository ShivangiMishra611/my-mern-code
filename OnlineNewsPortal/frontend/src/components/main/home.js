// import "../../static/css/bootstrap.min.css";
// import "./home.css";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  TextField,
  Link,
  Typography,
  Avatar,
  InputAdornment,
  IconButton,
  AppBar,
} from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../../config";
import React from "react";

const Home = () => {
  const url = app_config.api_url;
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/news/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsList(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayNews = () => {
    if (!loading) {
      return (
        <Grid container spacing={5}>
          <Grid item md={8}>
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={url + "/images/add_img.jpg"}
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src={url + "/images/add_img.jpg"}
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>
                      Some representative placeholder content for the second
                      slide.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src={url + "/images/add_img.jpg"}
                    class="d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>
                      Some representative placeholder content for the third
                      slide.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <Grid container spacing={5} sx={{ mt: 0 }}>
              <Grid item md={6}>
                <Card>
                  <CardMedia
                    component="img"
                    image={url + "/images/add_img.jpg"}
                    height={300}
                  />
                  <CardContent sx={{ minHeight: 150 }}>
                    <h4>New Title</h4>
                    <p>News Description</p>
                  </CardContent>
                </Card>
                <Card sx={{ mt: 4 }}>
                  <CardMedia
                    component="img"
                    image={url + "/images/add_img.jpg"}
                    height={300}
                  />
                  <CardContent sx={{ minHeight: 150 }}>
                    <h4>New Title</h4>
                    <p>News Description</p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item md={6}>
                <Card>
                  <Grid container>
                    <Grid item xs={4}>
                      <CardMedia
                        component="img"
                        image={url + "/images/add_img.jpg"}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <h4>New Title</h4>
                      <p>News Description ... </p>
                    </Grid>
                  </Grid>
                  <CardMedia></CardMedia>
                </Card>
                <Card sx={{ mt: 3 }}>
                  <Grid container>
                    <Grid item xs={4}>
                      <CardMedia
                        component="img"
                        image={url + "/images/add_img.jpg"}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <h4>New Title</h4>
                      <p>News Description ... </p>
                    </Grid>
                  </Grid>
                  <CardMedia></CardMedia>
                </Card>
                <Card sx={{ mt: 4 }}>
                  <Grid container>
                    <Grid item xs={4}>
                      <CardMedia
                        component="img"
                        image={url + "/images/add_img.jpg"}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <h4>New Title</h4>
                      <p>News Description ... </p>
                    </Grid>
                  </Grid>
                  <CardMedia></CardMedia>
                </Card>
                <Card sx={{ mt: 4 }}>
                  <Grid container>
                    <Grid item xs={4}>
                      <CardMedia
                        component="img"
                        image={url + "/images/add_img.jpg"}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <h4>New Title</h4>
                      <p>News Description ... </p>
                    </Grid>
                  </Grid>
                  <CardMedia></CardMedia>
                </Card>
                <Card sx={{ mt: 4 }}>
                  <CardMedia
                    component="img"
                    image={url + "/images/add_img.jpg"}
                    height={300}
                  />
                  <CardContent sx={{ minHeight: 150 }}>
                    <h4>New Title</h4>
                    <p>News Description</p>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      );
    }
  };

  return (
    <Container>
      <h1>News Feed</h1>
      <h3>Latest News</h3>
      {displayNews()}
    </Container>
  );
};

export default Home;
