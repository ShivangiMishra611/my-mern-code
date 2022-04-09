import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Authenticator = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  console.log(currentUser);

  if (!currentUser) {
    return <Navigate to="/main/login" />;
  }

  return children;
};

export default Authenticator;
