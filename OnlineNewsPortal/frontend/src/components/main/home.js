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
} from "@mui/material";
import { useState } from "react";
import app_config from "../../config";
import React from "react";

const Home = () => {
  const url = app_config.api_url;
  return(
  
  <div>
    <Card className="mt-5" sx={{ display: "flex", ml: 1 }}>
          <Grid container>
            <Grid item xs={6} md={7}>
              <CardMedia
                component="img"
                height="300"
               
                image={url + "/images/logo.png"}
              />
            </Grid>
            <CardContent>
              Trusted News Tribune
            </CardContent>
            </Grid>
            </Card>
  </div>

)};

export default Home;
