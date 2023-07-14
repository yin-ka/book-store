import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Layout() {
  return (
    <>
      <Navbar books="/" categories="/categories" />
      <Outlet />
    </>
  );
}

export default Layout;
