import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
// import Footer from "./footer";
import Header from "./header";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BadgeIcon from '@mui/icons-material/Badge';


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
