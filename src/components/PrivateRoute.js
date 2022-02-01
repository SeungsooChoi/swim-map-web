import React from 'react';
import useUser from '../hooks/useUser';
import NotFound from '../screens/NotFound';

const PrivateRoute = ({ children }) => {
  const { data } = useUser();

  if (data?.seeProfile.isAdmin) {
    return children;
  }
  return <NotFound />;
};

export default PrivateRoute;
