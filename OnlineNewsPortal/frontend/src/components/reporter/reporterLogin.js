import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as React from "react";
import * as Yup from "yup";

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
import { useNavigate } from "react-router-dom";

const Login = () => {
  const avatarStyle = {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  };

  const url = app_config.api_url;

  const [currentUser, setCurrentUser] = useState({});
  const [loggedin, setLoggedin] = useState(false);
  const [passVisible, setPassVisible] = useState(false);

  const navigate = useNavigate();

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
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        setLoggedin(true);
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Loggedin Successfully",
        }).then((data) => {
          setCurrentUser(data);
          //storing value in session
          sessionStorage.setItem("user", JSON.stringify(data));
          sessionStorage.setItem("loginStatus", JSON.stringify(true));
        });
      } else if (res.status === 300) {
        Swal.fire({
          icon: "error",
          title: "failed",
          text: "loggedin failed",
        });
      }
    });
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("FullName is Required"),

    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is Required"),
  });

  return (
    <div className="login">
      <div maxWidth="xl">
        <Card className="logg" sx={{ display: "flex", ml: 3 }}>
          <Grid container>
            <Grid item xs={4} md={7}>
              <CardMedia
                component="img"
                height="500"
                width="200"
                image={url + "/images/report.jpg"}
            
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Avatar style={avatarStyle}>
                  <LockIcon />
                </Avatar>
                <p className="h3 text-center mb-5 mt-5">Sign In</p>
                <Formik
                  initialValues={loginForm}
                  onSubmit={loginSubmit}
                  validationSchema={validationSchema}
                >
                  {({ values, handleChange, handleSubmit, errors }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                     
                        className="w-100 mt-3"
                        placeholder="Username"
                        label="Username"
                        variant="outlined"
                        id="username"
                        error={Boolean(errors.username)}
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
                        error={Boolean(errors.password)}
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
                        className=" w-100 mt-5"
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
          </Grid>
        </Card>
      </div>
    </div>
  );
};

export default Login;
