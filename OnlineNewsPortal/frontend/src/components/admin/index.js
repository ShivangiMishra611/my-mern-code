import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
<<<<<<< HEAD

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
=======
// import Footer from "./footer";
import Header from "./header";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BadgeIcon from '@mui/icons-material/Badge';

>>>>>>> 48b45970f551061597a8571dea7c0c15809cd16a

const Admin = () => {

  const sidebarOptions = [
    {
      title : 'Add Reporter',
      icon : <PersonAddIcon/>,
      link : '/admin/addreporter'
    },
    {
      title : 'Manage News',
      icon : <PersonAddIcon/>,
      link : '/admin/managenews'

    },
    {
      title : 'Manage Reporter',
      icon : <PersonAddIcon/>,
      link : '/admin/managereporters'

    }
   
      icon : <PersonAddIcon  />,
      link : '/admin/addreporter'
    },

    {
      title : 'Manage Reporter',
      icon : <BadgeIcon  />,
      link : '/admin/managereporters'
    }


  ]
  return (
    <div>
      <Sidebar title={'Admin Dashboard'} sidebarOptions = {sidebarOptions} >
        <Container>

      <Outlet />
        </Container>
      </Sidebar>
    </div>
  );
};

export default Admin;
