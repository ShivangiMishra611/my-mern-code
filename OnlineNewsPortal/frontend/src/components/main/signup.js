import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
  InputAdornment,CardMedia
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";


//form object

const Signup = () => {
  const url = app_config.api_url;
  // const img1="image1.jpg"
  const userForm = {
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    age: "",
    email: "",
  };

  //submit callback function
  const userSubmit = (values) => {
    console.log(values);
    //url
    //request method
    //data
    //data format

    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Registered Successfully",
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } 
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.name) {
      errors.name = "Required";
    } 
    else if (!/^[A-Za-z]+/i.test(values.name)) {
      errors.name = "Invalid name";
    }
    if (!values.username) {
      errors.username = "Required";
    }
    else if (!/^[A-Za-z]+/i.test(values.username)) {
      errors.username = "Invalid Username";
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Please re -enter your password";
    }
    return errors;
  };

  const validateconfirmPassword = (pass, value) => {
    let error = "";
    if (pass && value) {
      if (pass !== value) {
        error = "password not matched";
      }
    }
    return error;
  };
  return (
    <div>
      <Paper className="login-container">
      <Grid container spacing={3}>
      <Grid item md={9}>
        <Grid container justifyContent="center">
          <Grid item md={6
          } sx={6}>
            <Card className="mt-5" sx={{ display: "flex",width: 800}} >
            <CardMedia
                component="img"
                height="800"
                sx={{ width: 600}}
                // image={require("C:\Users\NEHA\Pictures\images (19).jpeg")}
               
              />
              <Grid item xs={6} md={8}>
              <CardContent   sx={{ width: 300}}>
                <p className="h3 text-center mb-5 mt-5">Signup Here</p>
                <Formik
                  initialValues={userForm}
                  onSubmit={userSubmit}
                  validate={validate}
                >
                  {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Name"
                        label="name"
                        variant="outlined"
                        id="name"
                        onChange={handleChange}
                        value={values.name}
                        helperText="Enter your name please"
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
                        placeholder="username"
                        label="username"
                        variant="outlined"
                        id="username"
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
                        helperText="Enter your Username please"
                      />
                      <TextField
                        className="w-100 mt-3"
                        placeholder="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        id="email"
                        onChange={handleChange}
                        value={values.email}
                        error={errors.email}
                        helperText={errors.email}
                      />

                      <TextField
                        className="w-100 mt-3"
                        placeholder="Password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                        helperText="Enter your Password please"
                      />

                      <TextField
                        className="w-100 mt-3"
                        placeholder="Age"
                        label="Age"
                        type="number"
                        variant="outlined"
                        id="age"
                        onChange={handleChange}
                        value={values.age}
                        error={errors.age}
                        helperText="Enter your correct age please"
                      />
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Re -enterPassword"
                        label="ConfirmPassword"
                        type="password"
                        variant="outlined"
                        id="confirmPassword"
                        onChange={handleChange}
                        value={values.confirmPassword}
                        error={errors.confirmPassword}
                        helperText={errors.confirmPassword}
                      />

                      <Button
                        color="success"
                        variant="contained"
                        className="mt-5"
                        type="submit"
                      >
                        Signin to Continue
                      </Button>
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
export default Signup;
