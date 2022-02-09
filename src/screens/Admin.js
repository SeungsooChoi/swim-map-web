import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/admin/Nav';

const Admin = () => {
  return (
    <div className="flex flex-row">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Admin;
