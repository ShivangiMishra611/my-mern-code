import { Formik } from "formik";
import { useState } from "react";
import app_config from "../../config";
import {
  
  TextField,Card,CardContent,CardMedia,Grid
} from "@mui/material";




const AddReporter = () => {
  const url = app_config.api_url;

  const [thumbnail, setThumbnail] = useState("");
  // const img1="image1.jpg"
  const reporterForm = {
    name: "",
    username: "",
    password: "",
    age: "",
    thumbnail: "",
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
  

  return (
    <Grid container spacing={3}>
    <Grid item md={9}>
      <Grid container >
        <Grid item md={6
        } sx={6}>
          <Card className="mt-5" sx={{ display: "flex",width: 1300,ml:3}} >
          <CardMedia
              component="img"
              height="600"
              sx={{ width: 600,m:1}}
              
              image={require("C:/Users/HP/Pictures/images (14).jpeg")}
             
            />
            <Grid item xs={6} md={8}>
            <CardContent   sx={{ width: 600}} >
      <Formik initialValues={reporterForm} onSubmit={reporterSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            
              <h5 className="card-header">Add Reporter</h5>
              <div className="card-body">
                <div className="mb-3">
                <TextField
                className="w-100 mt-3"
                placeholder="Name"
                label="Name"
                variant="outlined"
                id="name"
                onChange={handleChange}
                value={values.name}
              />
                </div>


                <div className="mb-3">
                <TextField
                className="w-100 mt-3"
                placeholder="Userame"
                label="Username"
                variant="outlined"
                id="username"
                onChange={handleChange}
                value={values.username}
              />
                 
                </div>

                <div className="mb-3">
                <TextField
                className="w-100 mt-3"
                placeholder="Password"
                label="Password"
                variant="outlined"
                id="password"
                onChange={handleChange}
                value={values.password}
              />
                  
                </div>
                <div className="mb-3">
                <TextField
                className="w-100 mt-3"
                placeholder="Age"
                label="Age"
                variant="outlined"
                id="age"
                onChange={handleChange}
                value={values.age}
              />
                  
                </div>
                

                <div className="mb-3">
                  <label for="formFile" class="form-label">
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
                color ="success"
                variant="contained">
                  Submit
                </button>
              </div>
           
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
    
  );
};

export default AddReporter;
