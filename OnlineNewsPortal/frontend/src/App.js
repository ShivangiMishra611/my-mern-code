import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./components/admin";
import User from "./components/user";
import AddReporter from "./components/admin/addreporter";
import ManageReporters from "./components/admin/manageReporters";

import ManageNews from "./components/admin/manageNews";
import ManageLucknowNews from "./components/admin/manageLucknowNews";

import ManageUsers from "./components/admin/manageUsers";

import Main from "./components/main";
import Login from "./components/main/login";
import Signup from "./components/main/signup";
import TopStories from "./components/main/topStories";
import LucknowNews from "./components/main/lucknowNews";

import Reporter from "./components/reporter";
import AddNews from "./components/reporter/addNews";
import AddLucknowNews from "./components/reporter/addLucknowNews";
import ViewArchieve from "./components/main/viewArchieve";
import ViewNews from "./components/main/viewNews";
import ResetPassword from "./components/main/resetPassword";
import Sidebar from "./components/reporter/sidebar";

import Feedback from "./components/user/feedback";
import Home from "./components/main/home";
import ReporterLogin from "./components/reporter/reporterLogin";
import AdminLogin from "./components/admin/adminLogin";
import Authenticator from "./components/authenticator";
import AddCurrentAffairs from "./components/reporter/addCurrentAffairs";
import CurrentAffairs from "./components/main/currentAffairs";
import ManageCurrentAffairs from "./components/admin/manageCurrentAffairs";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme1 = createTheme({
    palette: {
      primary: {
        main: "#950000",
        contrastText:'#fff'
      },
    },
  });

  return (
    <ThemeProvider theme={theme1}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Reporter />
              // <Authenticator>
              // </Authenticator>
            }
            path="reporter"
          >
            <Route element={<AddNews />} path="addnews" />
            <Route element={<AddLucknowNews />} path="addlucknownews" />
            <Route element={<AddCurrentAffairs />} path="addcurrentaffairs" />
            <Route element={<ReporterLogin />} path="login" />
            <Route element={<Sidebar />} path="reporter" />
          </Route>

          <Route element={<Main />} path="main">
            <Route element={<ReporterLogin />} path="reporterlogin" />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<ResetPassword />} path="resetpassword" />
            <Route element={<ViewArchieve />} path="archieve" />
            {/* <Route element={<NewPassword />} path="newpassword" /> */}
            <Route element={<TopStories />} path="topstories" />
            <Route element={<LucknowNews />} path="lucknownews" />
            <Route element={<CurrentAffairs />} path="currentaffairs" />
            <Route element={<ViewNews />} path="viewnews/:id" />
            {/* <Route element={<ViewNews />} path="viewnews" /> */}
          </Route>
          <Route element={<Home />} path="home" />

          <Route
            element={
              <Admin />
              // <Authenticator>
              // </Authenticator>
            }
            path="admin"
          >
            <Route element={<AddReporter />} path="addreporter" />
            <Route element={<ManageNews />} path="managenews" />
            <Route element={<ManageUsers />} path="manageusers" />
            <Route element={<ManageLucknowNews />} path="managelucknownews" />
            <Route
              element={<ManageCurrentAffairs />}
              path="managecurrentaffairs"
            />

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
    </ThemeProvider>
  );
}

export default App;
