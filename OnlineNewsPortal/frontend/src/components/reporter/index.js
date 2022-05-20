import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BadgeIcon from "@mui/icons-material/Badge";
import { NavLink, useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";

const Reporter = () => {
  const sidebarOptions = [
    {
      title: "Manage Profile",
      icon: <AccountCircle />,
      link: "/reporter/profile",
    },
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
      title: "Add Lucknow News",
      icon: <BadgeIcon />,
      link: "/reporter/addlucknownews",
    },


    {
      title: "Manage News",
      icon: <BadgeIcon />,
      link: "/reporter/managenews",
    },

    {
      title: "Manage Current Affairs",
      icon: <BadgeIcon />,
      link: "/reporter/managecurrentaffairs",
    },

    {
      title: "Manage Lucknow News",
      icon: <BadgeIcon />,
      link: "/reporter/managelucknownews",
    },
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
