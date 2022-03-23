
import {
    Button,
    Card,
    CardContent,
    Grid,
    Paper,
    TextField,
  } from "@mui/material";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";

//form object
  
const Signup=()=>{
    const url=app_config.api_url;
    // const img1="image1.jpg"
    const userForm={
        name:'',
        username:'',
        password:'',
        confirmPassword:'',
        age:'',
        email:'',
    }

    //submit callback function
    const userSubmit=(values)=>{
        console.log(values);
        //url
        //request method
        //data
        //data format

        fetch(url+'/user/add',{
        method: 'POST',
        body:JSON.stringify(values),
        headers:{'Content-Type':'application/json'},
    })

    .then((res) =>{
        console.log(res.status);
        if(res.status ===200)
        {
            Swal.fire({
                icon:"success",
                title:"success",
                text:"Registered Successfully",
            });

        }
        return res.json();

    })
    .then( (data)=>{
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
      if (!values.username) {
        errors.username = "Required";
      }
      
      if (values.confirmPassword!== values.password) {
        errors.confirmPassword = "Please re -enter your password";
      }
      return errors;

    };

    const validateconfirmPassword =(pass,value)=>{
      let error = "";
      if(pass && value) { 
        if (pass !== value){
          error="password not matched";
        }
      }
      return error;
    };
    return(
        <div>
             <Paper className="login-container">
          <Grid container justifyContent="center">
          
            <Grid item md={3} sm={2}>
              <Card>
                <CardContent>
                  <p className="h3 text-center mb-5 mt-5">Signup Here</p>
                  <Formik initialValues={userForm} onSubmit={userSubmit} validate={validate}>
                      {
                          ({ values,handleChange,handleSubmit,errors,touched}) =>(
                            <form onSubmit={handleSubmit}>

                            <TextField
                              className="w-100 mt-3"
                              placeholder="Name"
                              label="name"
                              variant="outlined"
                              id="name"
                              onChange={handleChange}
                              value={values.name}
                              error ={errors.name}
                              helperText={errors.name}
                             
                            />
            
                            <TextField
                              className="w-100 mt-3"
                              placeholder="username"
                              label="username"
                              variant="outlined"
                              id="username"
                              onChange={handleChange}
                              value={values.username}
                              error ={errors.username}
                            helperText={errors.username}
                              
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
                            error ={errors.email}
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
                              error ={errors.password}
                            helperText={errors.password}
                              
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
                            error ={errors.confirmPassword}
                          helperText={errors.confirmPassword}
                            
                          />

                           
        
          
                            
            
                            <Button color="success" variant="contained" className="mt-5" type="submit">
                              Signin to Continue
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
export default Signup;
