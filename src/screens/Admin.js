import React from 'react';
import { elementSize } from '../styles';
import AdminNav from './admin/AdminNav';

const windowHeight = window.innerHeight;

const styleHeight = {
  height: `${windowHeight - elementSize.navHeight}px`,
};

const Admin = () => {
  return (
    <>
      <AdminNav />
      <div
        className="flex flex-row justify-between shadow-lg"
        style={styleHeight}
      >
        <div className="w-1/4  border-r border-solid border-r-midNightGreen">
          <div>메뉴</div>
        </div>
      </div>
    </>
  );
};

export default Admin;
