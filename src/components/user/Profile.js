import React from 'react';
import { userLogOut } from '../../apollo';
import useUser from '../../hooks/useUser';

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
        </>
      )}
    </div>
  );
};

export default Profile;
