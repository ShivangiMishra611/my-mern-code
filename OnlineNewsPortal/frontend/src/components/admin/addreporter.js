import { Formik } from "formik";
import { useState } from "react";
import app_config from "../../config";
import {
  TextField,
  Card,
  Button,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import Swal from "sweetalert2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import WcIcon from "@mui/icons-material/Wc";
import CallIcon from "@mui/icons-material/Call";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as Yup from "yup";
import "yup-phone";

const AddReporter = () => {
  const url = app_config.api_url;

  const [thumbnail, setThumbnail] = useState("");
  const [passVisible, setPassVisible] = useState(false);
  // const img1="image1.jpg"
  const reporterForm = {
    name: "",
    password: "",
    email: "",
    number: "",
    gender: "",
    thumbnail: "",
    age: "",
    confirmpassword: "",
  };

  const reporterSubmit = (values) => {
    // if (!thumbnail) {
    //   Swal.fire({
    //     icon: "error",
    //     text: "PLese select a file!",
    //   }).then(() => {
    //     return;
    //   });
    // }
    values.thumbnail = thumbnail;
    console.log(values);

    fetch(url + "/reporter/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Reporter added Successfully",
        });
      }
      // } else if (res.status === 300) {
      //   Swal.fire({
      //     icon: "error",
      //     title: "failed",
      //     text: " failed",
      //   });
      // }

      return res.json();
    });
  };

  const uploadThumbnail = (e) => {
    console.log("file selected");

    let file = e.target.files[0];
    console.log(file.name);
    setThumbnail(file.name);
    let form = new FormData();
    form.append("myfile", file);

    fetch(url + "/util/uploadfile", { method: "POST", body: form }).then(
      (res) => {
        console.log(res.status);
      }
    );
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("FullName is Required"),
    // gender: Yup.string().required("Gender is Required"),
    number: Yup.string().phone().required("Number is Required"),
    // .min(6)
    // .max(10)
    // .required("Number is Required"),
    age: Yup.number().min(18).max(40),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    //   file: Yup.object().shape({
    //     thumbnail: Yup.string().required('file required')
    // }).required('File required'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is Required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password Confirmation is Required"),
  });

  return (
    <div className="addrep-bg">
      <Container maxWidth="lg">
        <div className="add-news-top">
          <Typography variant="h2" sx={{ fontWeight: 900 }}>
            ADD REPORTER
          </Typography>
        </div>
        <Card>
          <CardContent>
            <Formik
              initialValues={reporterForm}
              onSubmit={reporterSubmit}
              validationSchema={validationSchema}
            >
              {({ values, handleChange, handleSubmit, errors }) => (
                <form onSubmit={handleSubmit}>
                  <div className="Card-body">
                    <Grid container spacing={5}>
                      <Grid item sm={6} xs={12}>
                        <TextField
                          className="w-100 mt-3"
                          placeholder="Name"
                          label="Name"
                          variant="outlined"
                          id="name"
                          type="text"
                          onChange={handleChange}
                          value={values.name}
                          error={Boolean(errors.name)}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <AccountCircleIcon
                                  sx={{
                                    color: "active.active",
                                    mr: 1,
                                    my: 0.5,
                                  }}
                                />
                              </InputAdornment>
                            ),
                          }}
                          helperText={errors.name}
                        />
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <TextField
                          className="w-100 mt-3"
                          placeholder="email"
                          label="Email"
                          variant="outlined"
                          id="email"
                          onChange={handleChange}
                          value={values.email}
                          error={errors.email}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <EmailIcon
                                  sx={{
                                    color: "active.active",
                                    mr: 1,
                                    my: 0.5,
                                  }}
                                />
                              </InputAdornment>
                            ),
                          }}
                          helperText={errors.email}
                        />
                      </Grid>
                 

                 <Grid item sm={6} xs={12}>
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
                       
                        helperText={errors.password}
                      />
                    </Grid>

                     <Grid item sm={6} xs={12}>
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Password"
                        label="Confirm Password"
                        type={passVisible ? "text" : "password"}
                        variant="outlined"
                        id="confirmpassword"
                        onChange={handleChange}
                        value={values.confirmpassword}
                        error={errors.confirmpassword}
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
                        helperText={errors.confirmpassword}
                      />
                    </Grid>

                     <Grid item sm={6} xs={12}>
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Contact"
                        label="Contact"
                        variant="outlined"
                        id="number"
                        type="number"
                        onChange={handleChange}
                        value={values.number}
                        error={errors.number}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <CallIcon
                                sx={{
                                  color: "active.active",
                                  mr: 1,
                                  my: 0.5,
                                }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        helperText={errors.number}
                      />
                    </Grid>

                   <Grid item sm={6} xs={12}>
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Age"
                        label="Age"
                        variant="outlined"
                        id="age"
                        type="number"
                        onChange={handleChange}
                        value={values.age}
                        error={errors.age}
                        helperText={errors.age}
                      />
                     </Grid>
          </Grid>

                    <div className="mb-3">
                    <label for="formFile" class="form-label">
                        Add Image
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        onChange={uploadThumbnail}
                      />
                    </div>
                    <button type="submit" className="w-100 btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default AddReporter;