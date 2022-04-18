
import React from "react";
import { Outlet } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";






const ReporterDashbord = () => {
    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const [currentUser, setCurrentUser] = useState({});

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  
  

  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (

    <Box sx={{ flexGrow: 0 }}>
    <Tooltip title="Open settings">
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/images/avatar.jpg" />
      </IconButton>
    </Tooltip>
    <Menu
      sx={{ mt: '45px' }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
       transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose= {handleCloseUserMenu}
    >
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  </Box>

);
};
  





   
        

        

      <Outlet />
       
  
//   )
// };

export default ReporterDashbord


 