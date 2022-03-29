import { Button, Card, CardContent, TextField } from "@mui/material";
import { useState } from "react";
import app_config from "../../config";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const [otp, setOTP] = useState("");
  const [userInput, setUserInput] = useState(0);

  const url = app_config.api_url;

  const generateOTP = () => {
    let otp = parseInt(Math.random().toFixed(4).substr(`-${4}`));
    setOTP(otp);
    return otp;
  };

  const sendOTP = () => {
    fetch(url + "/util/sendmail", {
      method: "POST",
      body: JSON.stringify({
        to: "shivangimishra.com@gmail.com",
        subject: "Password Resetr",
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

  const verifyOTP = () => {
    if (otp == userInput) {
      console.log("otp matched");
      resetPassword();
    } else {
      console.log("otp matched");
      Swal.fire({
        icon: "error",
        title: "failed",
        text: "Please Try Again",
      });
    }
  };

  const resetPassword = () => {
    fetch(url + "/user/update/");
  };

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
          <TextField
            className="w-100 mt-3"
            placeholder=""
            label="Enter OTP"
            variant="outlined"
            id="otp"
            type="number"
          />

          <Button
            color="success"
            variant="contained"
            className="mt-5"
            type="submit"
            fullWidth
            onClick={sendOTP}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
