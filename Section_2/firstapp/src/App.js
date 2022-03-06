
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Product from './components/product';
import ManageProduct from './components/manageProduct';
import Home from './components/home';
import Login from './components/login';
import Loggin from './components/loggin';
import Signup from './components/signup';
import Signupp from './components/signupp';
import Practice from './components/practice';
import ContactUs from './components/contactus';
import EventHandling from './components/eventhandling';
import Gallery from './components/gallery';
import ImageEvent from './components/imageevent';
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import ListProducts from "./components/listproducts";
import { UserProvider } from "./userContext";
import Chat from "./components/chat";



import React, { Component } from "react";
import ToggleSwitch from "./components/ToggleSwitch";

function App() {
  const [darktheme, setDarktheme] = useState(false);

  const themeB = createTheme({
    palette: {
      mode: "dark",
      background: {
        paper: "#555555",
      },
    },
  });

  const themeA = createTheme({
    palette: {
      mode: "light",
      success: {
        main: "#00ffb3",
        dark: "#ccad00",
      },
    },
  });
  return (
    
    <div >
      <UserProvider>
      <ThemeProvider theme={darktheme ? themeB : themeA}>
      <BrowserRouter>
         <Header darktheme={darktheme} setDarktheme={setDarktheme}></Header> 
         {/* <Header /> */}
         <Routes>
          <Route element={<Practice />} path="/practice" />
          <Route element={<ManageProduct />} path="/manage" />
          <Route element={<Product />} path="/product" />
          <Route element={<ListProducts />} path="/products" />
          <Route element={<Login />} path="/login" />
          <Route element={<Loggin />} path="/loggin" />
          <Route element={<Home />} path="/home" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Signupp />} path="/signupp" />
          <Route element={<ContactUs />} path="/contactus" />
          <Route element={<EventHandling />} path="/event" />
          <Route element={<Gallery/>} path="/gallery" />
          <Route element={<ImageEvent/>} path="/imageevent" />
          <Route element={<Chat />} path="/chat" />
          </Routes>
         </BrowserRouter>
        
         </ThemeProvider>
         </UserProvider>
          </div>
  );
}

export default App;
