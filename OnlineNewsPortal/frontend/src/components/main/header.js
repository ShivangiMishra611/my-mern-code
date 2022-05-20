import app_config from "../../config";

import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const url = app_config.api_url;
const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("user");
    navigate("/main/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img src={url + "/images/logoo.png"} alt="" width="50" height="35" />
          </a>
        
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/topstories">
                  Top Stories
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/main/currentaffairs">
                  Current Affairs
                </NavLink>
              </li>
             

              
              

              

              <li className="nav-item">
                <NavLink className="nav-link" to="/main/login">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/main/signup">
                  Signup
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/main/archieves">
                  Archieves
                </NavLink>
              </li>
              <li className="nav-item">
                <Button variant="contained" color="error" onClick={logout}>
                  Logout
                </Button>
              </li>

             
                   
           </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};



export default Header;
