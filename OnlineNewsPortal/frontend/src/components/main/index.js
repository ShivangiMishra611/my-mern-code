import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import Sidebar from "../sidebar";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BadgeIcon from "@mui/icons-material/Badge";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const Main = () => {
  const sidebarOptions = [
    {
      title: "Login",
      icon: <GroupAddIcon />,
      link: "/main/login",
    },
   
    {
      title: "Top Stories",
      icon: <PersonAddIcon />,
      link: "/main/topstories",
    },
    {
      title: "Archives",
      icon: <BadgeIcon />,
      link: "/main/archieves",
    },
   
  ];
  return (
    <div>
      {/* <Sidebar title={"Main Dashboard"} sidebarOptions={sidebarOptions}>
      </Sidebar> */}
      <Header />
        <Outlet />
     
    </div>
  );
};

export default Main;