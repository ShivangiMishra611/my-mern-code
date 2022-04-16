import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupAddIcon from '@mui/icons-material/GroupAdd';



const Reporter = () => {
  const sidebarOptions = [

    {
      title : 'Login',
      icon : <PersonAddIcon/>,
      link : '/reporter/login'
    },
    
    {
      title : 'Add News',
      icon : <BadgeIcon/>,
      link : '/reporter/addnews'

    },

     
    {
      title : 'Add Current Affairs',
      icon : <BadgeIcon/>,
      link : '/reporter/addcurrentaffairs'

    },
   
   

  ]
  return (
    <div>
        

        <Sidebar title={'Reporter Dashboard'} sidebarOptions = {sidebarOptions} >
        <Container>

      <Outlet />
        </Container>
      </Sidebar>
    </div>
  )
};

export default Reporter;


 