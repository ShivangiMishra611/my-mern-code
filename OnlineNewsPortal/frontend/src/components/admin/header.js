import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle, Campaign, FollowTheSigns, NavigateBefore } from "@mui/icons-material";
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  IconButton
} from "@mui/material";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  const [userMenuPos, setUserMenuPos] = useState(null);
  const userMenuOpen = Boolean(userMenuPos);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Trusted News Tribune
          </Typography>
          

          <IconButton className="nav-item">
          <NavLink className="nav-link" to="/main/topstories">
          Top Stories
          </NavLink>
        </IconButton>


        

       
        
        <li className="nav-item">
          <reactRouterDom.NavLink className="nav-link" to="/admin/managenews">
          Manage News
          </reactRouterDom.NavLink>
        </li>

        <li className="nav-item">
          <reactRouterDom.NavLink className="nav-link" to="/main/login">
           Login
          </reactRouterDom.NavLink>
        </li>

        <li className="nav-item">
          <reactRouterDom.NavLink className="nav-link" to="/main/signup">
           Signup
          </reactRouterDom.NavLink>
        </li>

        <li className="nav-item">
          <reactRouterDom.NavLink className="nav-link" to="/main/archieves">
          Archieves
          </reactRouterDom.NavLink>
        </li>







          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Tooltip title="User Actions">
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
            open={userMenuOpen}
            onClose={(e) => setUserMenuPos(null)}
          >
            <MenuItem>
              <ListItemIcon>
                <FollowTheSigns fontSize="small" />
              </ListItemIcon>
              <ListItemText>Register as User</ListItemText>
            </MenuItem>
            <MenuItem>Signup</MenuItem>
          </Menu>

          <Tooltip title="Reporter">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ ml: 2 }}
            >
              <Campaign />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}