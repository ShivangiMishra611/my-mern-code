import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

const Main = () => {
  return (
    <div>
     
      <h1>Main Dashboard</h1>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Main;