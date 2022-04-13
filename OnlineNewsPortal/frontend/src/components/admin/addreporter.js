import { Formik } from "formik";
import { useState } from "react";
import app_config from "../../config";
import {
  TextField,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  RadioGroup,
} from "@mui/material";
import Swal from "sweetalert2";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import WcIcon from "@mui/icons-material/Wc";
import CallIcon from "@mui/icons-material/Call";
import * as Yup from "yup";

const AddReporter = () => {
  const url = app_config.api_url;

  const [thumbnail, setThumbnail] = useState("");
  // const img1="image1.jpg"
  const reporterForm = {
    name: "",
    password: "",
    email: "",
    number: "",
    gender: "",
    thumbnail: "",
    age: "",
    confirmpassword:""
  };

  const reporterSubmit = (values) => {
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
      } else if (res.status === 300) {
        Swal.fire({
          icon: "error",
          title: "failed",
          text: " failed",
        });
      }

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
    gender: Yup.string().required("Gender is Required"),
    number: Yup.number()
    .min(6)
    .max(10)
    .required("Number is Required"),
    age: Yup.string().required("Age is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      // )
      .required("Password is Required"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password Confirmation is Required"),
  });

  return (
    <div>
      <Container maxWidth="xl">
        <Card className="mt-5" sx={{ display: "flex", ml: 3 }}>
          <Grid container>
            <Grid item xs={6} md={7}>
              <CardMedia
                component="img"
                height="600"
                image={url + "/images/news_reporting.webp"}
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <CardContent>
                <Formik
                  initialValues={reporterForm}
                  onSubmit={reporterSubmit}
                  validationSchema={validationSchema}
                >
                  {({ values, handleChange, handleSubmit, errors }) => (
                    <form onSubmit={handleSubmit}>
                      <h5 className="card-header">Add Reporter</h5>
                      
                        <div className="mb-3">
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
                        </div>

                        <div className="mb-3">
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
                        </div>

                        <div className="mb-3">
                          <TextField
                            className="w-100 mt-3"
                            placeholder="Password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            id="password"
                            onChange={handleChange}
                            value={values.password}
                            error={errors.password}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <KeyIcon
                                    sx={{
                                      color: "active.active",
                                      mr: 1,
                                      my: 0.5,
                                    }}
                                  />
                                </InputAdornment>
                              ),
                            }}
                            helperText={errors.password}
                          />

                          
                        <div className="mb-3">
                        <TextField
                          className="w-100 mt-3"
                          placeholder="Password"
                          label="Confirm Password"
                          type="password"
                          variant="outlined"
                          id="confirmpassword"
                          onChange={handleChange}
                          value={values.confirmpassword}
                          error={errors.confirmpassword}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <KeyIcon
                                  sx={{
                                    color: "active.active",
                                    mr: 1,
                                    my: 0.5,
                                  }}
                                />
                              </InputAdornment>
                            ),
                          }}
                          helperText={errors.confirmpassword}
                        />
                          <div className="mb-3">
                          <RadioGroup  
                          aria-labelledby="demo-radio-buttons-group-label"
                          label="Gender"
                          id="gender"
                          defaultValue="female"
                          name="gender"
                        >
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                          <FormControlLabel value="other" control={<Radio />} label="Others" />
                    
                              onChange={handleChange}
                              value={values.gender}
                              error={errors.gender}
                              type="text"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <WcIcon
                                      sx={{
                                        color: "active.active",
                                        mr: 1,
                                        my: 0.5,
                                      }}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                              helperText={errors.gender}
                              </RadioGroup>
                          </div>
                          <div className="mb-3">
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
                          </div>
                        </div>
                        <div className="mb-3">
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
                        </div>

                        <div className="mb-3">
                          <label htmlFor="formFile" className="form-label">
                            Add Image
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="thumbnail"
                            onChange={uploadThumbnail}
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary"
                          color="success"
                          variant="contained"
                        >
                          Submit
                        </button>
                      </div>
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

export default AddReporter;
