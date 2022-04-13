import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/admin";
import User from "./components/user";
import AddReporter from "./components/admin/addreporter";
import ManageReporters from "./components/admin/manageReporters";

import ManageNews from "./components/admin/manageNews";

import ManageUsers from "./components/admin/manageUsers";

import Main from "./components/main";
import Login from "./components/main/login";
import Signup from "./components/main/signup";
import TopStories from "./components/main/topStories";
import NewPassword from "./components/main/newpassword";
import Reporter from "./components/reporter";
import AddNews from "./components/reporter/addNews";
import ViewArchieve from "./components/main/viewArchieve";
import ResetPassword from "./components/main/resetPassword";

import Feedback from "./components/user/feedback";
import Home from "./components/main/home";
import ReporterLogin from "./components/reporter/reporterLogin";
import AdminLogin from "./components/admin/adminLogin";
import Authenticator from "./components/authenticator";

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Authenticator>
                <Reporter />
              </Authenticator>
            }
            path="reporter"
          >
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

          <Route
            element={
              <Authenticator>
                <Admin />
              </Authenticator>
            }
            path="admin"
          >
            <Route element={<AddReporter />} path="addreporter" />
            <Route element={<ManageNews />} path="managenews" />
            <Route element={<ManageUsers />} path="manageusers" />

            <Route element={<AdminLogin />} path="login" />
            <Route element={<ManageReporters />} path="managereporters" />
            <Route
              element={<Navigate to="/admin/addreporter" />}
              path="/admin"
            />
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
