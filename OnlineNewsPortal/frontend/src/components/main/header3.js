import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import app_config from "../../config";
import {
  AccountCircle,
  AppRegistration,
  Campaign,
  FollowTheSigns,
  Home,
  Login,
  MoreVert,
  Subscriptions,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ListItemIcon, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BadgeIcon from "@mui/icons-material/Badge";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { blue } from "@mui/material/colors";
const url = app_config.api_url;

const pages = [
  {
    name: "Top Stories",
    link: "/main/topstories",
  },
  {
    name: "News Archives",
    link: "/main/archieve",
  },
  {
    name: "Lucknow News",
    link: "/main/lucknownews",
  },
  {
    name: "Current Affairs",
    link: "/main/currentaffairs",
  },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElGuest, setAnchorElGuest] = useState(null);

  const [currentUser, setCurrentUser] = useState(null);
  const [currentReporter, setCurrentReporter] = useState(null);
  const [currentAdmin, setCurrentAdmin] = useState(null);


  const [repMenuPos, setRepMenuPos] = useState(null);
  const [repMenuPos2, setRepMenuPos2] = useState(null);

  const [adminMenuPos, setAdminMenuPos] = useState(null);
  const [adminMenuPos2, setAdminMenuPos2] = useState(null);

  const user = sessionStorage.getItem("user");
  const reporter = sessionStorage.getItem("reporter");
  const admin = sessionStorage.getItem("admin");

  useEffect(() => {
    setCurrentUser(JSON.parse(sessionStorage.getItem("user")));
    setCurrentReporter(JSON.parse(sessionStorage.getItem("reporter")));
    setCurrentAdmin(JSON.parse(sessionStorage.getItem("admin")));
  }, [user, reporter, admin]);

  const navigate = useNavigate();

  const logout = () => {
    setAnchorElUser(null);
    sessionStorage.removeItem("user");
    navigate("/main/login");
  };

  const reporterLogout = () => {
    // setAnchorElUser(null);
    sessionStorage.removeItem("reporter");
    navigate("/main/reporterlogin");
  };

  const adminLogout = () => {
    // setAnchorElUser(null);
    sessionStorage.removeItem("admin");
    navigate("/main/reporterlogin");
  };

  const userMenu = [
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/user/profile",
    },
    {
      name: "Feedback",
      icon: <AccountCircle />,
      link: "/user/feedback",
    },
   

    
    {
      name: "Logout",
      icon: <AccountCircle />,
      click: logout,
    },
  ];

   const adminMenu = [
    {
      name: "Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    {
      name: "Add Reporter",
      icon: <PersonAddIcon  sx={{color: blue[30]}}  />,
      link: "/admin/addreporter",
    },
    {
      name:"Add News",
      icon: <NewspaperIcon />,
      link:"/admin/addnews"
      },

      {
        name:"Add  Lucknow News",
        icon: <NewspaperIcon />,
        link:"/admin/addlucknownews"
        },

        {
          name:"Add  Current Affairs",
          icon: <NewspaperIcon />,
          link:"/admin/addcurrentaffairs"
          },

          {
            name: "Manage Reporter",
            icon: <GroupAddIcon />,
            link: "/admin/managereporters",
          },
      



          {
            name: "Manage News",
            icon: <BadgeIcon />,
            link: "/admin/managenews",
          },

          
          {
            name: "Manage Lucknow News",
            icon: <BadgeIcon />,
            link: "/admin/managelucknownews",
          },
      
      

   
    {
      name: "Manage Current Affairs",
      icon: <BadgeIcon />,
      link: "/admin/managecurrentaffairs",
    },
   
    {
      name: "Manage Users",
      icon: <GroupAddIcon />,
      link: "/admin/manageusers",
    },
   

    
    {
      name: "Logout",
      icon: <AccountCircle />,
      click: adminLogout,
    },
  ];

  const repMenu = [
    {
      name: "Manage Profile",
      icon: <AccountCircle />,
     link: "/reporter/profile",
    },
    {
      name: "Add News",
      icon: <BadgeIcon />,
      link: "/reporter/addnews",
    },

    {
      name: "Add Current Affairs",
      icon: <BadgeIcon />,
      link: "/reporter/addcurrentaffairs",
    },

    {
      name: "Manage News",
      icon: <BadgeIcon />,
      link: "/reporter/managenews",
    },

    {
      name: "Manage Current Affairs",
      icon: <BadgeIcon />,
      link: "/reporter/managecurrentaffairs",
    },
    {
      name: "Logout",
      icon: <AccountCircle />,
      click: reporterLogout
    },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [userMenuPos, setUserMenuPos] = useState(null);

  const reporterOptions = () => {
    if (currentReporter === null && currentReporter === null) {
      return (
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {" "}
          <Tooltip title="Reporter Login">
            <IconButton
              onClick={(e) => setRepMenuPos(e.currentTarget)}
              size="large"
              edge="start"
              color="inherit"
              sx={{ ml: 2 }}
            >
              <Campaign />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={repMenuPos}
            open={Boolean(repMenuPos)}
            onClose={(e) => setRepMenuPos(null)}
          >
            <MenuItem onClick={(e)=>navigate("/main/reporterlogin")}>
              <ListItemIcon>
                <FollowTheSigns fontSize="small" />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </MenuItem>

           
          </Menu>
        </Box>
      );
    } else{
      return (
        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
          <Tooltip title="Settings">
            <IconButton
              onClick={(e) => setRepMenuPos2(e.currentTarget)}
              sx={{ p: 0 }}
            >
              <Avatar alt="Remy Sharp" src={url + "/" + currentReporter.avatar} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={repMenuPos2}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(repMenuPos2)}
            onClose={(e) => setRepMenuPos2(null)}
          >
            {repMenu.map(({ name, icon, link, click }) => (
              <MenuItem
                key={name}
                onClick={link ? (e) => navigate(link) : click}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{name}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      );
    }
  };

  const adminOptions = () => {
    if (currentAdmin === null && currentAdmin === null) {
      return (
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {" "}
          <Tooltip title="Admin Login">
            <IconButton
              onClick={(e) => setAdminMenuPos(e.currentTarget)}
              size="large"
              edge="start"
              color="inherit"
              sx={{ ml: 2 }}
            >
              <Campaign />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={adminMenuPos}
            open={Boolean(adminMenuPos)}
            onClose={(e) => setAdminMenuPos(null)}
          >
            <MenuItem onClick={(e)=>navigate("/main/reporterlogin")}>
              <ListItemIcon>
                <FollowTheSigns fontSize="small" />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </MenuItem>

           
          </Menu>
        </Box>
      );
    } else if (currentAdmin.isAdmin){
      return (
        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
          <Tooltip title="Settings">
            <IconButton
              onClick={(e) => setAdminMenuPos2(e.currentTarget)}
              sx={{ p: 0 }}
            >
              <Avatar alt="Remy Sharp" src={url + "/" + currentAdmin.avatar} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={adminMenuPos2}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(adminMenuPos2)}
            onClose={(e) => setRepMenuPos2(null)}
          >
            {adminMenu.map(({ name, icon, link, click }) => (
              <MenuItem
                key={name}
                onClick={link ? (e) => navigate(link) : click}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{name}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      );
    }
  };

  const UserOptions = () => {
    if (currentUser === null) {
      return (
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Tooltip title="User">
            <IconButton
              onClick={(e) => setUserMenuPos(e.currentTarget)}
              size="large"
              edge="start"
              color="inherit"
              sx={{ ml: 2 }}
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={userMenuPos}
            open={Boolean(userMenuPos)}
            onClose={(e) => setUserMenuPos(null)}
          >
            <MenuItem onClick={(e)=>navigate("/main/login")}>
              <ListItemIcon >
                <FollowTheSigns fontSize="small" />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </MenuItem>
            {/* <MenuItem  onClick={(e)=>navigate("/main/signup")}> 
            <ListItemIcon>
            <ExitToAppIcon  fontSize="small"  />
            </ListItemIcon>
            <ListItemText>Signup</ListItemText>
            </MenuItem> */}
          </Menu>
        </Box>
      );
    } else {
      return (
        <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
          <Tooltip title="User Options">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={url + "/" + currentUser.avatar}/>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {userMenu.map(({ name, icon, link, click }) => (
              <MenuItem
                key={name}
                onClick={link ? (e) => navigate(link) : click}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{name}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      );
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <b>Trusted News Tribune</b>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ name, link }) => (
                <MenuItem key={name} onClick={(e) => navigate(link)}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Trusted News Tribune
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ name, link }) => (
              <Button
                key={name}
                onClick={(e) => navigate(link)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {name}
              </Button>
            ))}
          </Box>
          {UserOptions()}
          {adminOptions()}
          {reporterOptions()}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Tooltip title={"Home"}>
              <IconButton
                size="large"
                color="inherit"
                onClick={(e) => navigate("/main/home")}
                sx={{ mr: 2 }}
              >
                <Home />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 0, ml: 3, display: { xs: "flex", md: "none" } }}>
            {UserOptions()}
            {adminOptions()}
            {reporterOptions()}
            <Tooltip>
              <IconButton
                onClick={(e) => setAnchorElGuest(e.currentTarget)}
                sx={{ p: 0 }}
                color="inherit"
              >
                <MoreVert />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
