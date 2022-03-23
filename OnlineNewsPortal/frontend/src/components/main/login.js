import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
// import { Grid } from "@material-ui/core"
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


// import LockIcon from '@mui/icons-material/Lock';

import {
    Button,
    Card,
    CardContent,
    Grid,
    Paper, 
    TextField,
    
    
  } from "@mui/material";
  
  
  
import { useContext, useState } from "react";


  
  const Login = () => {

    const url=app_config.api_url;

    // const { setCurrentUser, setLoggedin } = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState({});
    const [loggedin, setLoggedin] = useState(false);

    const loginForm={
      username:"",
      password:"",

    };
    const loginSubmit=(values)=>{
       console.log(values)
   
    
    //url
    //request method
    //data
    //data format
    fetch(url+'/user/checklogin',{
      method: 'POST',
      body:JSON.stringify(values),
      headers:{'Content-Type':'application/json'},
  })

  .then((res) =>{
      console.log(res.status);
      if(res.status ===200)
      {
        setLoggedin(true);
          Swal.fire({
              icon:"success",
             
              title:"success",
              text:"Loggedin Successfully",
          });

      }else if(res.status ===300)
      {
        Swal.fire({
          icon:"error",
          title:"failed",
          text:"loggedin failed",
      });


      }
    })
    .then((data) => {
      setCurrentUser(data);

      //storing value in session

      sessionStorage.setItem('user',JSON.stringify(data));
    });
  };
     

  
   
    return (
      <div>
      <Grid container style={{minHeight: '100vh'}}>
      <Grid item xs={12} sm={6}>
      <img src="https://thumbs.dreamstime.com/z/%D0%BA-186331887.jpg" style= {{width:'100%' ,height:'100%', objectFit:'cover'}}  alt=""/>
      </Grid>
      </Grid>
      <Grid container item xs={12} sm={6} style={{padding: 10}}  />
      <Grid  container justifycontent="center"  />
      <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzkZNbUOHmAaZKVXrcc_T0zyuDQtjd0qo8Q&usqp=CAU"
      width={200}
      alt="logo"></img>
      
        <Paper className="login-container">
          <Grid container justifyContent="center">
            <Grid item md={3} sm={2}>
              <Card>
                <CardContent>
                  <p className="h3 text-center mb-5 mt-5">Login Here</p>
                  <Formik initialValues={loginForm} onSubmit={loginSubmit}>
                    {({values,handleChange,handleSubmit})=>(
                      <form onSubmit={handleSubmit}>
  
                      <TextField
                        className="w-100 mt-3"
                        InputProps={{startAdornment: (<InputAdornment position="end">  <AdminPanelSettingsIcon /> </InputAdornment> )}}           label="Username"
                        variant="outlined"
                        id="username"
                        onChange={handleChange}
                        value={values.username}
                        
                        
                      />
                      
      
                      <TextField
                        className="w-100 mt-3"
                        InputProps={{startAdornment: (<InputAdornment position="start">  <LockIcon /> </InputAdornment> )}}   
                        placeholder="Password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        id="password"
                        onChange={handleChange}
                        value={values.password}
                      />
      
                      <Button color="success" variant="contained" className="mt-5" type="submit">
                        Signin to Continue
                        
                      </Button>
                    
                      </form>

                    )}
                  </Formik>
                  
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  };
  
  export default Login;