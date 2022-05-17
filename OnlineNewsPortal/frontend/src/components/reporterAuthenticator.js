import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ReporterAuthenticator = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("reporter"))
  );

  const navigate = useNavigate();

  console.log(currentUser);

  if (currentUser === null) {
    Swal.fire({
      icon: "info",
      title: "OOPS!!",
      text: "You need to be a reporter!!",
    });
    return <Navigate to="/main/reporterlogin" />;
  }

  return children;
};

export default ReporterAuthenticator;
