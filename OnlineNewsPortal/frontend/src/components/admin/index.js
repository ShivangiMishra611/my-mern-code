import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const Admin = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default Admin;
