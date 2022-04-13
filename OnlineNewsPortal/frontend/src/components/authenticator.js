import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Authenticator = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const navigate = useNavigate();

  console.log(currentUser);

  if (!currentUser) {
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
