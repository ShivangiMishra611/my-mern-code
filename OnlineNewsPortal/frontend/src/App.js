import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddReporter from "./components/admin/addReporter";
import SideBar from "./components/admin/sidebar";
import Main from "./components/main";
import Login from "./components/main/login";
import TopStories from "./components/main/topStories";
import Reporter from "./components/reporter";
import AddNews from "./components/reporter/addNews";
import ReporterDashbord from "./components/reporter/dashboard";
import AddReporter from  "./components/admin/"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Reporter />} path="reporter">
            <Route element={<ReporterDashboard />} path="dashboard">
              <Route element={<AddNews />} path="addnews" />
              <Route element={<AddReporter />} path="addreporter" />
            
            </Route>
          </Route>

          <Route element={<Main />} path="main">
              <Route element={<TopStories />} path="topstories" />
            </Route>
          
            <Route element={<Login />} path="login" />

            <Route element={<AddReporter />} path="addreporter" />
              
           
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;