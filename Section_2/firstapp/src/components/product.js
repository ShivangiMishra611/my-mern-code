import {
    Button,
    Card,
    CardContent,
    Grid,
    Paper,
    TextField,
    
  } from "@mui/material";
import { Formik } from "formik";
import app_config from '../config';
import { useState } from "react";

  
const Product=()=>{
    const url=app_config.api_url;

    const [thumbnail,setThumbnail]=useState("");
    // const img1="image1.jpg"
    const productForm={

        name:'',
        category:'',
        price:'',
        



        
    }

    const productSubmit = (values) => {

      values.thumbnail=thumbnail;
      console.log(values);
  
      fetch(url + "/product/add", {
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
    return(
        <div>
             <Paper className="login-container">
          <Grid container justifyContent="center">
          
            <Grid item md={3} sm={2}>
              <Card>
                <CardContent>
                  <p className="h3 text-center mb-5 mt-5">Add Products</p>
                  <Formik initialValues={productForm} onSubmit={productSubmit}>
                      {
                          ({ values,handleChange,handleSubmit}) =>(
                            <form onSubmit={handleSubmit}>

                            <TextField
                              className="w-100 mt-3"
                              placeholder="Name"
                              label="Name"
                              variant="outlined"
                              id="name"
                              onChange={handleChange}
                              value={values.name}
        
        
        
        
        
        
                              helperText="Enter Name"
                            />
            
                            <TextField
                              className="w-100 mt-3"
                              placeholder="Category"
                              label="Category"
                              variant="outlined"
                              id="category"
                              onChange={handleChange}
                              value={values.category}
                              helperText="Enter Category please"
                            />
            
                            
          
                              <TextField
                              className="w-100 mt-3"
                              placeholder="Enter Price "
                              label="Price"
                              type="number"
                              variant="outlined"
                              id="price"
                              onChange={handleChange}
                              value={values.price}
                              helperText="Enter Price please"
                            />


                           <label>Upload Thumbnail</label>
                           <input
                           type="file"
                           onChange={uploadThumbnail}
                           className="form-control"/>  
          
            
                            <Button color="success" variant="contained" className="mt-5" type="submit">
                              Submit
                            </Button>
                            </form>
                          )

                      }
                  </Formik>
                  
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
        </div>
    )
}
export default Product;