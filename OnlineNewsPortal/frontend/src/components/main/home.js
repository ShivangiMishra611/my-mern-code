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
} from "@mui/material";
import { useState } from "react";
import app_config from "../../config";
import React from "react";

const Home = () => {
  const url = app_config.api_url;
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
