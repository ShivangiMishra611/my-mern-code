import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/admin";
import AddReporter from "./components/admin/addreporter";
import ManageReporters from "./components/admin/manageReporters";

import ManageNews from "./components/admin/manageNews";

import Main from "./components/main";
import Login from "./components/main/login";
import Signup from "./components/main/signup";
import TopStories from "./components/main/topStories";
import Reporter from "./components/reporter";
import AddNews from "./components/reporter/addNews";
import ReporterDashbord from "./components/reporter/sidebar";
import ViewArchieve  from "./components/main/viewArchieve";
import ResetPassword from "./components/main/resetPassword";
import SideBar from "./components/sidebar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Reporter />} path="reporter">
            <Route element={<ReporterDashbord />} path="dashboard">
              <Route element={<AddNews />} path="addnews" />
            </Route>
          </Route>

          <Route element={<Main />} path="main">
            <Route element={<TopStories />} path="topstories" />
          </Route>

          <Route element={<Main />} path="main">
            <Route element={<Login />} path="login" />
          </Route>

          <Route element={<Main />} path="main">
            <Route element={<ResetPassword />} path="resetpassword" />
          </Route>

          <Route element={<Main />} path="main">
            <Route element={<Signup />} path="signup" />
          </Route>
          <Route element={<Main />} path="main">
          <Route element={<ViewArchieve />} path="archieve" />
        </Route>
        



          <Route element={<Admin />} path="admin">
            <Route element={<AddReporter />} path="addreporter" />
          </Route>

          <Route element={<Admin />} path="admin">
            <Route element={<ManageReporters />} path="managereporters" />
          </Route>

          <Route element={<Admin />} path="admin"> 
            <Route element={<SideBar  />} path="sidebar" />
          </Route>
 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
