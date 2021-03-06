import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";
import { AccountCircle, Campaign, FollowTheSigns } from "@mui/icons-material";
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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

export default function Header2() {
  const [userMenuPos, setUserMenuPos] = useState(null);
  const userMenuOpen = Boolean(userMenuPos);

  const [repMenuPos, setRepMenuPos] = useState(null);
  const repMenuOpen = Boolean(repMenuPos);

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
          
           <h5>Trusted News Tribune </h5>
          </Typography>
          
        
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

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
            open={repMenuOpen}
            onClose={(e) => setRepMenuPos(null)}
          >
            <MenuItem>
              <ListItemIcon>
                <FollowTheSigns fontSize="small" />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </MenuItem>
           
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
