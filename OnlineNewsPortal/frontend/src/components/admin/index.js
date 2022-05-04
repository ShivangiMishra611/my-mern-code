import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BadgeIcon from "@mui/icons-material/Badge";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Admin = () => {
  const sidebarOptions = [
    {
      title: "Add Reporter",
      icon: <PersonAddIcon />,
      link: "/admin/addreporter",
    },
    {
      title:"Add News",
      icon: <NewspaperIcon />,
      link:"/admin/addnews"
      },

      {
        title:"Add  Lucknow News",
        icon: <NewspaperIcon />,
        link:"/admin/addlucknownews"
        },

        {
          title:"Add  Current Affairs",
          icon: <NewspaperIcon />,
          link:"/admin/addcurrentaffairs"
          },

          {
            title: "Manage Reporter",
            icon: <GroupAddIcon />,
            link: "/admin/managereporters",
          },
      



          {
            title: "Manage News",
            icon: <BadgeIcon />,
            link: "/admin/managenews",
          },

          
          {
            title: "Manage Lucknow News",
            icon: <BadgeIcon />,
            link: "/admin/managelucknownews",
          },
      
      

   
    {
      title: "Manage Current Affairs",
      icon: <BadgeIcon />,
      link: "/admin/managecurrentaffairs",
    },
   
    {
      title: "Manage Users",
      icon: <GroupAddIcon />,
      link: "/admin/manageusers",
    },
   


  ];

  return (
    <div>
      <Sidebar title={"Admin Dashboard"} sidebarOptions={sidebarOptions}>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default Admin;
