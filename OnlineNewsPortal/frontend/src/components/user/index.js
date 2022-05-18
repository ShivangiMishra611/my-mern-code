import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { AccountCircle } from "@mui/icons-material";




const User = () => {
  const sidebarOptions = [
    {
      title: "Profile",
      icon: <AccountCircle />,
      link: "/user/profile",
    },
    {
      title: "Feedback",
      icon: <AccountCircle />,
      link: "/user/feedback",
    },
   

  
   
   

  ]
  return (
    <div>
        

        <Sidebar title={'User Dashboard'} sidebarOptions = {sidebarOptions} >
        <Container>

      <Outlet />
        </Container>
      </Sidebar>
    </div>
  )
};

export default User;


 