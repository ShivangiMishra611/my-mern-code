import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/admin/sidebar";
import Reporter from "./components/reporter";
import AddNews from "./components/reporter/addNews";
import Login from "./components/main/login";
import ReporterDashbord from "./components/reporter/dashboard";

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
          <Route element={<Login />} path="/login" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
