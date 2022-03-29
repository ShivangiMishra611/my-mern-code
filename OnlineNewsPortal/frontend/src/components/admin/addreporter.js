import { Formik } from "formik";
import { useState } from "react";
import app_config from "../../config";
import {
  
  TextField,Card,CardContent,CardMedia,Grid
} from "@mui/material";
import Swal from "sweetalert2";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import WcIcon from '@mui/icons-material/Wc';
import CallIcon from '@mui/icons-material/Call';
import MenuItem from '@mui/material/MenuItem';




const AddReporter = () => {
  const url = app_config.api_url;

  const [thumbnail, setThumbnail] = useState("");
  // const img1="image1.jpg"
  const reporterForm = {
    name: "",
    password: "",
    email:"",
    number:"",
    gender:"",
    thumbnail: "",
    age: "",
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
        }
     
        else if (res.status === 300) {
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

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";

    }
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ){
      errors.email="Invalid email address";
    }
    if (!values.name) {
      errors.name = "Required";
    }else if(  !/^[A-Za-z]+/i.test(values.name)

    )
    {
      errors.name="Invalid name";
    }
   
    if (!values.number) {
      errors.number = "Required";
    }
    if(!values.gender){
        errors.gender ="Required";
    }
    
    
    if (!values.age) {
      errors.age = "Required";
    }
      
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;

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
                type="text"
                onChange={handleChange}
                value={values.name}
                error={errors.name}
                              
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AccountCircleIcon
                        sx={{ color: "active.active", mr: 1, my: 0.5 }}
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
                        sx={{ color: "active.active", mr: 1, my: 0.5 }}
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
                        sx={{ color: "active.active", mr: 1, my: 0.5 }}
                      />
                    </InputAdornment>
                  ),
                }}
                helperText={errors.password}
              />
              <div className="mb-3">
              <TextField
              className="w-100 mt-3"
              placeholder="gender"
              label="Gender"
              variant="outlined"
              id="gender"
              onChange={handleChange}
              value={values.gender}
              error={errors.gender}
              type="text"
             
             
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <WcIcon
                      sx={{ color: "active.active", mr: 1, my: 0.5 }}
                    />
                  </InputAdornment>
                ),
              }}
              helperText={errors.gender}
              />
            
               
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
                  <InputAdornment position="end" >
                    <CallIcon
                      sx={{ color: "active.active", mr: 1, my: 0.5 }}
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
