
import {
    Button,
    Card,
    CardContent,
    Grid,
    Paper,
    TextField,InputAdornment
  } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from '@mui/icons-material/Email';
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import HttpsIcon from '@mui/icons-material/Https';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';


//form object
  
const Signup=()=>{
 
    const url=app_config.api_url;
    // const img1="image1.jpg"
    const userForm={
        name:'',
        username:'',
        password:'',
        confirmPassword:'',
        number:'',
        email:'',
        profession:'',
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
      if (!values.number) {
        errors.number = "Required";
      }
      if(!values.profession){
          errors.profession ="Required";
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
                              label="Your Name"
                              variant="outlined"
                              id="name"
                              onChange={handleChange}
                              value={values.name}
                              error={errors.name}
                              
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <PersonIcon
                                      sx={{ color: "active.active", mr: 1, my: 0.5 }}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                              helperText={errors.name}
                            />
            
                            <TextField
                              className="w-100 mt-3"
                              placeholder="username"
                              label=" Your Username"
                              variant="outlined"
                              id="username"
                              onChange={handleChange}
                              value={values.username}
                              error={errors.username}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <PersonIcon
                                      sx={{ color: "active.active", mr: 1, my: 0.5 }}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                              helperText={errors.username}
                            />
                            <TextField
                            className="w-100 mt-3"
                            placeholder="email"
                            label=" Your Email"
                            type="email"
                            variant="outlined"
                            id="email"
                            onChange={handleChange}
                            value={values.email}
                            error ={errors.email}
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
                          <TextField
                          className="w-100 mt-3"
                          placeholder="  Profession"
                          label="Your Profession"
                          variant="outlined"
                          id="profession"
                          onChange={handleChange}
                          value={values.profession}
                          error={errors.profession}
                          
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <BadgeOutlinedIcon
                                  sx={{ color: "active.active", mr: 1, my: 0.5 }}
                                />
                              </InputAdornment>
                            ),
                          }}
                          helperText={errors.profession}
                        />
        
                          <TextField
                          className="w-100 mt-3"
                          placeholder=" Your Contact"
                          label="Contact"
                          variant="outlined"
                          id="number"
                          onChange={handleChange}
                          value={values.number}
                          error={errors.number}
                          
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end" >
                                <ContactPhoneIcon
                                  sx={{ color: "active.active", mr: 1, my: 0.5 }}
                                />
                              </InputAdornment>
                            ),
                          }}
                          helperText={errors.number}
                        />
        

            
                            <TextField
                              className="w-100 mt-3"
                              placeholder="Password"
                              label=" Your Password"
                              type="password"
                              variant="outlined"
                              id="password"
                              onChange={handleChange}
                              value={values.password}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <HttpsIcon
                                      sx={{ color: "active.active", mr: 1, my: 0.5 }}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                              
                              helperText="Enter your Password "
                            />
          
                             
                            <TextField
                            className="w-100 mt-3"
                            placeholder="Re -enterPassword"
                            label="Confirm Your Password"
                            type="password"
                            variant="outlined"
                            id="confirmPassword"
                            onChange={handleChange}
                            value={values.confirmPassword}
                            error ={errors.confirmPassword}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <LockOpenTwoToneIcon
                                    sx={{ color: "active.active", mr: 1, my: 0.5 }}
                                  />
                                </InputAdornment>
                              ),
                            }}
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
