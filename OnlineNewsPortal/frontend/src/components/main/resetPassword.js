import {
  Button,
  Card,
  CardContent,
  Grid,
  Box,
  Paper,
  TextField,
  Link,
  Typography,
  Avatar,
  InputAdornment,
  IconButton,
} from "@mui/material";

const ResetPassword = () => {
  return (
    <div className="reset-card" align="center">
      
        
            <Card className="mt-5" sx={{ width: 451 }} align="center">
              <CardContent align="center" >
                <TextField
                  className="w-100 mt-3"
                  placeholder="Enter Your Email"
                  label="Email"
                  variant="outlined"
                  id="email"
                  
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
              </CardContent>
            </Card>

            <Card className="mt-5" sx={{ width: 451 }} align="center">
              <CardContent align="center" >

              <TextField
                  className="w-100 mt-3"
                  placeholder=""
                  label="Password"
                  variant="outlined"
                  id="password"
                  type="password"
                  
                />

                <TextField
                  className="w-100 mt-3"
                  placeholder=""
                  label="ConfirmPassword"
                  variant="outlined"
                  id="confirmpassword"
                  type="password"
                  
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
              </CardContent>
            </Card>
         
         
        {/* </Grid> */}
     
    </div>
  );
};

export default ResetPassword;
