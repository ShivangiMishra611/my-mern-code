import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";


import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  
} from "@mui/material";


const NewPassword = () => {
  const url = app_config.api_url;

  const passwordForm = {
    password: "",
    confirmpassword: "",
  };
  const passwordSubmit = (values) => {
    console.log(values);

    //url
    //request method
    //data
    //data format
    fetch(url + "/user/update/id", {
      method: "PUT",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Password Updated Successfully",
          });
        } else if (res.status === 300) {
          Swal.fire({
            icon: "error",
            title: "failed",
            text: "Password Updation Failed",
          });
        }
      })
      .then((data) => {
        console.log(data);

        //storing value in session
      });
  };
  const validate = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = "Required";
    }
    if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Please re -enter your password";
    }
    return errors;
  };
  

  return (
    <div>
     
        <Grid container spacing={3}>
          <Grid item md={9}>
            <Grid container justifyContent="center">
              <Grid item md={6} sx={6}>
                <Card 
                  className="mt-5"
                  sx={{ display: "flex", width: 400,ml:30 }}
                >
                  <Grid item xs={6} md={8}>
                    <CardContent sx={{ width: 400, height:350 }}>
                      <Formik
                        initialValues={passwordForm}
                        onSubmit={passwordSubmit}
                        validate={validate}
                      >
                        {({ values, handleChange, handleSubmit, errors }) => (
                          <form onSubmit={handleSubmit}>
                            <TextField
                              className="w-100 mt-3"
                              placeholder="Password"
                              label="Enter Password"
                              variant="outlined"
                              id="password"
                              onChange={handleChange}
                              value={values.password}
                              error={errors.password}
                             
                              helperText={errors.password}
                            />
                            <TextField
                              className="w-100 mt-3"
                              placeholder="Confirm Password"
                              label="Confirm Password"
                              type="password"
                              variant="outlined"
                              id="confirmpassword"
                              onChange={handleChange}
                              value={values.confirmpassword}
                              error={errors.confirmpassword}
                              helperText={errors.confirmpassword}
                            />
                            <Button
                              color="success"
                              variant="contained"
                              className="mt-5"
                              type="submit"
                              fullWidth
                            >
                              Submit
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
      
    </div>
  );
};

export default NewPassword;
