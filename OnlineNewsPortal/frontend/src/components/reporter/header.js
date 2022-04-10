import { NavLink,useNavigate } from "react-router-dom";
const Header = () => {
  const img1="logo.png";
    return (
      <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img src={img1} alt="" width="30" height="24" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          

          <li className="nav-item">
              <NavLink className="nav-link" to="/main/topstories">
               Top Stories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reporter/dashboard/addnews">
               Add News
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/addreporter">
               Add Reporter
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/main/topstories">
               Top Stories
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/managereporters">
              Manage Reporter
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

         
          
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </div>
  );
    

      

        
};
  
export default Header;




