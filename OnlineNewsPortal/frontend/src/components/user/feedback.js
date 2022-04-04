import { Formik } from "formik";
import { useState } from "react";
import app_config from "../../config";
import { TextField,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,

} from "@mui/material";
import Swal from "sweetalert2";
import TitleSharpIcon from "@mui/icons-material/TitleSharp";

import InputAdornment from "@mui/material/InputAdornment";


const Feedback = () => {
  const url = app_config.api_url;

  // const img1="image1.jpg"
  const feedbackForm = {
    user: "",
  };

  const feedbackSubmit = (values) => {
    console.log(values);

    fetch(url + "/feedback/add", {
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
          text: "Feedback added Successfully",
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

  const validate = (values) => {
    const errors = {};

    if (!values.user) {
      errors.user = "Required";
    } else if (!/^[A-Za-z]+/i.test(values.user)) {
      errors.user = "Invalid User";
    }

    return errors;
  };

  return (
    <div>
    <Container maxWidth="xl">
        <Card className="mt-5" sx={{ display: "flex", ml: 3 }}>
          <Grid container>
            <Grid item xs={6} md={7}>
              <CardMedia
                component="img"
                height="500"
                image={url + "/images/feedform.webp"}
              />
            </Grid>
    
    <Formik initialValues={feedbackForm} onSubmit={feedbackSubmit}>
      {({ values, handleChange, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          <h5 className="card-header">Feedback </h5>
          <div className="card-body">
            <div className="mb-4">
              <TextField
                className="w-100 mt-3"
                placeholder="Text"
                label="text"
                variant="outlined"
                id="name"
                type="text"
                onChange={handleChange}
                value={values.text}
                error={errors.text}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <TitleSharpIcon
                        sx={{ color: "active.active", mr: 1, my: 0.5 }}
                      />
                    </InputAdornment>
                  ),
                }}
                helperText={errors.text}
              />
            </div>
            <button
            
              type="submit"
              className=" w-100 mt -3 btn btn-primary"
              color="success"
              variant="contained"
            >
              Submit
            </button>
          </div>
        </form>
      )}
      
    </Formik>
    </Grid>
    </Card>
    </Container>
    </div>
   
  
  );
};

export default Feedback;
