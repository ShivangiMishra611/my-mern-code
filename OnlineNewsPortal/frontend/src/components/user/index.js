import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

const User = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default User;
