import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from 'react';

import {
  Button,
  Card,
  CardContent,
  Grid,
  Box,
  Paper,
  TextField,
  Link,
  Typography,
  Avatar,
  InputAdornment,
  IconButton
} from "@mui/material";
import { useContext, useState } from "react";

const Login = () => {
  const avatarStyle = { backgroundColor: "green", float: "center" };
  // const btnStyle={width:100%};

  const url = app_config.api_url;

  
  const [currentUser, setCurrentUser] = useState({});
  const [loggedin, setLoggedin] = useState(false);
  const [values, setValues] = React.useState({
    password:'',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

  return (
    <div>
      <Paper className="login-container">
        <Grid container justifyContent="center">
          <Grid item md={3} sm={2}>
            <Card>
              <CardContent align="center">
                <Avatar style={avatarStyle}>
                  <LockIcon />
                </Avatar>
                <p className="h3 text-center mb-5 mt-5">Sign In</p>
                <Formik initialValues={loginForm} onSubmit={loginSubmit}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Username"
                        label="Username"
                        variant="outlined"
                        id="username"
                        // <i className="fas fa-user-alt"></i>

                        onChange={handleChange}
                        value={values.username}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <PersonIcon
                                sx={{ color: "active.active", mr: 1, my: 0.5 }}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />

                      <TextField
                        className="w-100 mt-3"
                          
                        placeholder="Password"
                        label="Password"
                        type={values.showPassword ? 'text' : 'password'}
                        variant="outlined"
                        id="password"
                        onChange={handleChange('password')}
                        value={values.password}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                  
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        
                      />
                     

                      <Button
                        // style={btnStyle}
                        color="success"
                        variant="contained"
                        className="mt-5"
                        type="submit"
                        fullWidth
                      >
                        Signin to Continue
                        
                      </Button>

                      <Typography>
                        <Link href="#">Forgot Password?</Link>
                      </Typography>

                      <Typography>
                        {" "}
                        Do you have an account?
                        <Link href="signup">Sign Up</Link>
                      </Typography>
                    </form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;