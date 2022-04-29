import {
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import app_config from "../../config";
import Swal from "sweetalert2";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as Yup from "yup";

const ResetPassword = () => {
  const [passVisible, setPassVisible] = useState(false);

  const [email, setEmail] = useState("");

  const [otp, setOTP] = useState("");
  const [showReset, setShowReset] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const url = app_config.api_url;

  const generateOTP = () => {
    let otp = parseInt(Math.random().toFixed(4).substr(`-${4}`));
    setOTP(otp);
    return otp;
  };

  const passwordForm = {
    otp: "",
    password: "",
    confirm: "",
  };

  const sendOTP = () => {
    fetch(url + "/util/sendmail", {
      method: "POST",
      body: JSON.stringify({
        to: email,
        subject: "Password Reset",
        text: "This is your OTP for password reset " + generateOTP(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "success",
          text: "OTP Sent Successfully",
        });
      }
      return res.json();
    });
  };

  const verifyUser = () => {
    fetch(url + "/user/getbyemail/" + email)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (!data) {
          console.log("not found!!");
          Swal.fire({
            icon: "error",
            title: "Email not registered!!",
          });
        } else {
          setCurrentUser(data);
          setShowReset(true);
          sendOTP();
          // console.log(generateOTP());
        }
      });
  };

  const verifyOTP = (formdata) => {
    if (otp == formdata.otp) {
      console.log("otp matched");
      resetPassword(formdata);
    } else {
      console.log("otp not matched");
      Swal.fire({
        icon: "error",
        title: "failed",
        text: "Enter Correct OTP",
      });
    }
  };

  const resetPassword = ({ password }) => {
    fetch(url + "/user/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify({ password: password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log("reset");
        if (res.status === 200)
          Swal.fire({
            icon: "success",
            title: "Password Reset Success!!",
          }).then(() => {
            navigate("/main/login");
          });
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Password is Required"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password Confirmation is Required"),
  });

  const showResetForm = () => {
    if (showReset) {
      return (
        <Card className="mt-5" sx={{ width: 451 }} align="center">
          <CardContent align="center">
            <Formik
              initialValues={passwordForm}
              onSubmit={verifyOTP}
              validationSchema={validationSchema}
            >
              {({ values, handleSubmit, handleChange, errors }) => (
                <form onSubmit={handleSubmit}>
                  <TextField
                    className="w-100 mt-3"
                    placeholder="Enter OTP recieved in Email"
                    label="Enter OTP"
                    variant="outlined"
                    id="otp"
                    value={values.otp}
                    onChange={handleChange}
                  />
                  <TextField
                    className="w-100 mt-3"
                    placeholder="Enter New Password"
                    label="Password"
                    variant="outlined"
                    id="password"
                    type={passVisible ? "text" : "password"}
                    value={values.password}
                    error={Boolean(errors.password)}
                    helperText="Enter your Password please"
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility1"
                            onClick={(e) => {
                              setPassVisible(!passVisible);
                            }}
                            edge="end"
                          >
                            {passVisible ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    className="w-100 mt-3"
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    variant="outlined"
                    id="confirm"
                    type="password"
                    value={values.confirm}
                    error={errors.confirm}
                    helperText={Boolean(errors.confirm)}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility1"
                            onClick={(e) => {
                              setPassVisible(!passVisible);
                            }}
                            edge="end"
                          >
                            {passVisible ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    color="primary"
                    variant="contained"
                    className="mt-5"
                    type="submit"
                    fullWidth
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      );
    }
  };
  // const validationSchema = Yup.object().shape({
  //   email: Yup.string().email("Invalid email").required("Email is Required")
  // });

  return (
    <div className="reset-card" align="center">
      <Card className="mt-5" sx={{ width: 451 }} align="center">
        <CardContent align="center">
          <TextField
            className="w-100 mt-3"
            placeholder="Enter Your Email"
            label="Email"
            variant="outlined"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            color="success"
            variant="contained"
            className="mt-5"
            type="submit"
            fullWidth
            onClick={verifyUser}
          >
            Submit
          </Button>
        </CardContent>
      </Card>

      {showResetForm()}
    </div>
  );
};

export default ResetPassword;
