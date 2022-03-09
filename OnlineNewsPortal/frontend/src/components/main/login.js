import { Formik } from "formik";
import Swal from "sweetalert2";

import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { useContext } from "react";
import app_config from "../../config";
import { UserContext } from "../../context/usercontext";

const Login = () => {
  const url = app_config.api_url;

  const { setCurrentUser, setLoggedin } = useContext(UserContext);
  // const [logged, setlogged] = useState(initialState);

  const loginForm = {
    username: "",
    password: "",
  };
  const loginSubmit = (values) => {
    console.log(values);

    //url
    //request method
    //data
    //data format
    fetch(url + "/user/checklogin", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          setLoggedin(true);
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Loggedin Successfully",
          });
        } else if (res.status === 300) {
          Swal.fire({
            icon: "error",
            title: "failed",
            text: "loggedin failed",
          });
        }
      })
      .then((data) => {
        setCurrentUser(data);

        //storing value in session

        sessionStorage.setItem("user", JSON.stringify(data));
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <Paper className="login-container">
        <Grid container justifyContent="center">
          <Grid item md={3} sm={2}>
            <Card>
              <CardContent>
                <p className="h3 text-center mb-5 mt-5">Login Here</p>
                <Formik initialValues={loginForm} onSubmit={loginSubmit}>
                  {({ values, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        className="w-100 mt-3"
                        placeholder="Username"
                        label="Username"
                        variant="outlined"
                        id="username"
                        onChange={handleChange}
                        value={values.username}
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
                      />

                      <Button
                        color="success"
                        variant="contained"
                        className="mt-5"
                        type="submit"
                      >
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