import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header2 from "./header2";
import Header from "./header3";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BadgeIcon from "@mui/icons-material/Badge";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
