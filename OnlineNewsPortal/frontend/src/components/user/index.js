import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";




const User = () => {
  const sidebarOptions = [

  
   
   

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


 