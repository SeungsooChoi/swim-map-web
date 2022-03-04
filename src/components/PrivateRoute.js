import React from 'react';
import useLoggedInUser from '../hooks/useLoggedInUser';
import NotFound from '../screens/NotFound';

const PrivateRoute = ({ children }) => {
  const { data } = useLoggedInUser();

  if (data?.seeProfile.isAdmin) {
    return children;
  }
  return <NotFound />;
};

export default PrivateRoute;
