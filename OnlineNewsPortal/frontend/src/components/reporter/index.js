import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BadgeIcon from "@mui/icons-material/Badge";


const Reporter = () => {
  const sidebarOptions = [
    

    {
      title: "Add News",
      icon: <BadgeIcon />,
      link: "/reporter/addnews",
    },

    {
      title: "Add Current Affairs",
      icon: <BadgeIcon />,
      link: "/reporter/addcurrentaffairs",
    },

    {
      title:"Manage News",
      icon:<BadgeIcon  />,
      link:"/reporter/managenews",
    },

    {
      title:"Manage Current Affairs",
      icon:<BadgeIcon  />,
      link:"/reporter/managecurrentaffairs",
    }


  ];
  return (
    <div>
      <Sidebar title={"Reporter Dashboard"} sidebarOptions={sidebarOptions}>
      <Outlet />
        
      </Sidebar>
    </div>
  );
};

export default Reporter;
