import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ReporterAuthenticator = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("reporter"))
  );

  const navigate = useNavigate();

  console.log(currentUser);

  if (!currentUser) {
    Swal.fire({
      icon: "info",
      title: "OOops!!",
      text: "You need to be logged in",
    });
    return <Navigate to="/main/reporterlogin" />;
  }
   else if (currentUser) {
  
    console.log(currentUser);
    if (currentUser.isAdmin) {
      Swal.fire({
        icon: "info",
        title: "Welcome",
        text: "You are logged in!",
      });
      navigate("/admin");
    } else {
      Swal.fire({
        icon: "info",
        title: "Welcome",
        text: "You are logged in!",
      });
      navigate("/reporter");
    }
  }

  return children;
};

export default ReporterAuthenticator;
