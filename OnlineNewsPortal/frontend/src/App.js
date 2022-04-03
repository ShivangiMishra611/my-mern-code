import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/admin";
import User from "./components/user";
import AddReporter from "./components/admin/addreporter";
import ManageReporters from "./components/admin/manageReporters";

import ManageNews from "./components/admin/manageNews";

import Main from "./components/main";
import Login from "./components/main/login";
import Signup from "./components/main/signup";
import TopStories from "./components/main/topStories";
import NewPassword from "./components/main/newpassword";
import Reporter from "./components/reporter";
import AddNews from "./components/reporter/addNews";
import ReporterDashbord from "./components/reporter/sidebar";
import ViewArchieve from "./components/main/viewArchieve";
import ResetPassword from "./components/main/resetPassword";

import Feedback from "./components/user/feedback";
import Home from "./components/main/home";
import ReporterLogin from "./components/reporter/reporterLogin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Reporter />} path="reporter">
            <Route element={<AddNews />} path="addnews" />
            <Route element={<ReporterLogin />} path="login" />
          </Route>

          <Route element={<Main />} path="main">
            <Route element={<Home />} path="home" />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<ResetPassword />} path="resetpassword" />
            <Route element={<ViewArchieve />} path="archieve" />
            <Route element={<NewPassword />} path="newpassword" />
            <Route element={<TopStories />} path="topstories" />
          </Route>

          <Route element={<Admin />} path="admin">
            <Route element={<AddReporter />} path="addreporter" />
            <Route element={<AddReporter />} path="addreporter" />
            <Route element={<ManageNews />} path="managenews" />
            <Route element={<ManageReporters />} path="managereporters" />
          </Route>

          <Route element={<User />} path="user">
            <Route element={<Feedback />} path="feedback" />
          </Route>

          <Route element={<Navigate to="/main/home" />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
