import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  InputAdornment,
  CardMedia,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import * as Yup from "yup";

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
    number: "",
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
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is Required"),
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("UserName is Required"),

    age: Yup.string().required("Age is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password Confirmation is Required"),
    number: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Contact is Required"),
  });

  return (
    <div>
      <Container maxWidth="xl">
        <Card className="mt-5" sx={{ display: "flex", ml: 3 }}>
          <Grid container>
            <Grid item xs={6} md={7}>
              <CardMedia
                component="img"
                height="800"
                image={url + "/images/sign-up.png"}
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <p className="h3 text-center mb-5 mt-5">Signup Here</p>
                <Formik
                  initialValues={userForm}
                  onSubmit={userSubmit}
                  validationSchema={validationSchema}
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
                        error={Boolean(errors.name)}
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
                        error={Boolean(errors.username)}
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
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <EmailIcon
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
                        type="password"
                        variant="outlined"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                        error={Boolean(errors.password)}
                        helperText="Enter your Password please"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockIcon
                                sx={{ color: "active.active", mr: 1, my: 0.5 }}
                              />
                            </InputAdornment>
                          ),
                        }}
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
                        helperText={Boolean(errors.confirmPassword)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <LockOpenIcon
                                sx={{ color: "active.active", mr: 1, my: 0.5 }}
                              />
                            </InputAdornment>
                          ),
                        }}
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
                        error={Boolean(errors.age)}
                        helperText="Enter your correct age please"
                      />
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Contact"
                        label="Contact"
                        variant="outlined"
                        id="number"
                        onChange={handleChange}
                        value={values.number}
                        error={Boolean(errors.number)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <ContactPhoneIcon
                                sx={{ color: "active.active", mr: 1, my: 0.5 }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        helperText="Enter your Contact no. please"
                      />

                      <Button
                        color="primary"
                        variant="contained"
                        className=" w-100 mt-5"
                        type="submit"
                      >
                        Signin to Continue
                      </Button>
                    </form>
                  )}
                </Formik>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </div>
  );
};
export default Signup;
