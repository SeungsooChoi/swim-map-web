import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center px-96 pt-44 h-full">
      {children}
    </div>
  );
};

export default AuthLayout;
