import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Authenticator = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const navigate = useNavigate();

  console.log(currentUser);

  if (!currentUser) {
    Swal.fire({
      icon : 'info',
      title : 'OOops!!',
      text : 'You need to be logged in'
    })
    return <Navigate to="/main/login" />;
  } else if (currentUser) {
    console.log(currentUser);
    if (currentUser.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/reporter");
    }
  }

  return children;
};

export default Authenticator;
