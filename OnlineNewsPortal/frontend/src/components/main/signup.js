
import {
    Button,
    Card,
    CardContent,
    Grid,
    Paper,
    TextField,InputAdornment
  } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
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
        age:'',
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
    return(
        <div>
             <Paper className="login-container">
          <Grid container justifyContent="center">
          
            <Grid item md={3} sm={2}>
              <Card>
                <CardContent>
                  <p className="h3 text-center mb-5 mt-5">Signup Here</p>
                  <Formik initialValues={userForm} onSubmit={userSubmit}>
                      {
                          ({ values,handleChange,handleSubmit}) =>(
                            <form onSubmit={handleSubmit}>

                            <TextField
                              className="w-100 mt-3"
                              placeholder="Name"
                              label="name"
                              variant="outlined"
                              id="name"
                              onChange={handleChange}
                              value={values.name}
                              helperText="Enter your name please"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <PersonIcon
                                      sx={{ color: "active.active", mr: 1, my: 0.5 }}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                            />
            
                            <TextField
                              className="w-100 mt-3"
                              placeholder="Username"
                              label="Username"
                              variant="outlined"
                              id="username"
                              onChange={handleChange}
                              value={values.username}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <PersonIcon
                                      sx={{ color: "active.active", mr: 1, my: 0.5 }}
                                    />
                                  </InputAdornment>
                                ),
                              }}
                              helperText="Enter your Username please"
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
                              
                              helperText="Enter your Password please"
                            />
          
                              <TextField
                              className="w-100 mt-3"
                              placeholder="Age"
                              label="Age"
                              type="number"
                              variant="outlined"
                              id="age"
                              onChange={handleChange}
                              value={values.age}
                              
                              helperText="Enter your correct age please"
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
