import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminAuthenticator = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  const navigate = useNavigate();

  console.log(currentUser);

  if (currentUser === null) {
    Swal.fire({
      icon: "info",
      title: "OOops!!",
      text: "You need to be admin",
    });

    return <Navigate to="/main/reporterlogin" />;
  }

  return children;
};

export default AdminAuthenticator;
