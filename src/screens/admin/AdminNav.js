import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../components/user/Profile';
import routes from '../../routes';

const AdminNav = () => {
  return (
    <div className="flex flex-row justify-around items-center h-16 bg-midNightGreen">
      <Link to={routes.home}>
        <h1 className="text-3xl text-white">Swim</h1>
      </Link>
      <Profile />
    </div>
  );
};

export default AdminNav;
