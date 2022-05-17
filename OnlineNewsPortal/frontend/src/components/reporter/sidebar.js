import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";

import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
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
import app_config from "../../config";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar({ children, sidebarOptions, title }) {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const [userMenu, setUserMenu] = useState(null);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("reporter"))
  );
  const url = app_config.api_url;

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const reporterLogout = () => {
    // setAnchorElUser(null);
    sessionStorage.removeItem("reporter");
    navigate("/main/reporterlogin");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              sx={{ ml: 3 }}
              color="inherit"
              onClick={(e) => navigate("/main/topstories")}
            >
              TOP STORIES
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              sx={{ ml: 3 }}
              color="inherit"
              onClick={(e) => navigate("/main/archieve")}
            >
              NEWS ARCHIVES
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              sx={{ ml: 3 }}
              color="inherit"
              onClick={(e) => navigate("/main/lucknownews")}
            >
              LUCKNOW NEWS
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Button
              sx={{ ml: 3 }}
              color="inherit"
              onClick={(e) => navigate("/main/currentaffairs")}
            >
              CURRENT AFFAIRS
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Reporter Options">
              <IconButton onClick={(e) => setUserMenu(e.currentTarget)}>
                <Avatar
                  alt="Cindy Baker"
                  src={url + "/" + currentUser.avatar}
                />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={userMenu}
              open={Boolean(userMenu)}
              onClose={(e) => setUserMenu(null)}
            >
              <MenuItem onClick={reporterLogout}>
                <ListItemIcon>
                  <FollowTheSigns fontSize="small" />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sidebarOptions.map(({ title, link, icon }) => (
            <ListItemButton
              onClick={(e) => navigate(link)}
              key={title}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
