import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from "react";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  
  Paper,
  TextField,
  Link,
  Typography,
  Avatar,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";

const Login = () => {
  const avatarStyle = { backgroundColor: "green" };

  const url = app_config.api_url;

  const [currentUser, setCurrentUser] = useState({});
  const [loggedin, setLoggedin] = useState(false);
  const [passVisible, setPassVisible] = useState(false);

  const loginForm = {
    username: "",
    password: "",
  };
  const loginSubmit = (values) => {
    console.log(values);

    //url
    //request method 
    //data
    //data format
    fetch(url + "/user/checklogin", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          setLoggedin(true);
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Loggedin Successfully",
          });
        } else if (res.status === 300) {
          Swal.fire({
            icon: "error",
            title: "failed",
            text: "loggedin failed",
          });
        }
      })
      .then((data) => {
        setCurrentUser(data);

        //storing value in session
        sessionStorage.setItem("user", JSON.stringify(data));
      });
  };
  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Required";
    } else if (!/^[A-Za-z]+/i.test(values.username)) {
      errors.username = "Invalid Username";
    }

    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  return (
    <div>
      <Paper className="login-container" elevation={6}>
        <Grid container spacing={3}>
          <Grid item md={9}>
            <Grid container>
              <Grid item md={6} sx={6}>
                <Card
                  className="mt-5"
                  sx={{ display: "flex", width: 1020, ml: 20 }}
                >
                  <CardMedia
                    component="img"
                    height="650"
                    sx={{ width: 600, m: 1 }}
                    image={require("C:/Users/HP/Pictures/news-bannerTab.jpg")}
                  />
                  <Grid item xs={6} md={8}>
                    <CardContent sx={{ width: 400 }}>
                      <Avatar style={avatarStyle}>
                        <LockIcon />
                      </Avatar>
                      <p className="h3 text-center mb-5 mt-5">Sign In</p>

                      <Formik
                        initialValues={loginForm}
                        onSubmit={loginSubmit}
                        validate={validate}
                      >
                        {({ values, handleChange, handleSubmit, errors }) => (
                          <form onSubmit={handleSubmit}>
                            <TextField
                              className="w-100 mt-3"
                              placeholder="Username"
                              label="Username"
                              variant="outlined"
                              id="username"
                              error={errors.username}
                              helperText={errors.username}
                              onChange={handleChange}
                              value={values.username}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <PersonIcon
                                      sx={{
                                        color: "active.active",
                                        mr: 1,
                                        my: 0.5,
                                      }}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                            />

                            <TextField
                              className="w-100 mt-3"
                              placeholder="Password"
                              label="Password"
                              type={passVisible ? "text" : "password"}
                              variant="outlined"
                              id="password"
                              onChange={handleChange}
                              value={values.password}
                              error={errors.password}
                              helperText={errors.password}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={(e) => {
                                        setPassVisible(!passVisible);
                                      }}
                                      edge="end"
                                    >
                                      {passVisible ? (
                                        <Visibility />
                                      ) : (
                                        <VisibilityOff />
                                      )}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
                            />

                            <Button
                              color="success"
                              variant="contained"
                              className="mt-5"
                              type="submit"
                              fullWidth
                            >
                              Signin to Continue
                            </Button>
                            <Typography>
                              <Link href="resetPassword">Forgot Password?</Link>
                            </Typography>

                            <Typography>
                              {" "}
                              Do'nt have an account?
                              <Link href="signup">Sign Up</Link>
                            </Typography>
                          </form>
                        )}
                      </Formik>
                    </CardContent>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3}></Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;