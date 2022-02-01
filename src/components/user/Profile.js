import React from 'react';
import { Link } from 'react-router-dom';
import { userLogOut } from '../../apollo';
import useUser from '../../hooks/useUser';
import routes from '../../routes';

const Profile = () => {
  const { data } = useUser();

  const onClick = () => {
    userLogOut();
  };

  return (
    <div className="flex flex-row justify-between items-center w-52 text-white font-semibold">
      {data?.seeProfile?.username && (
        <>
          <span>{data.seeProfile.username} 님</span>
          <button
            className="px-4 py-3 border border-white rounded-3xl bg-white text-cgBlue hover:bg-slate-100"
            onClick={onClick}
          >
            로그아웃
          </button>
          {data.seeProfile.isAdmin && (
            <Link
              className="px-2 py-1 border border-white rounded-3xl text-white font-semibold"
              to={routes.admin}
            >
              Admin
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
