import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { isLoggedUser } from '../../apollo';
import routes from '../../routes';
import Profile from '../user/Profile';

const SLink = styled(Link)`
  all: unset;
  padding: 1.025rem 1.5rem;
  cursor: pointer;
`;

const UserProfile = () => {
  const isLoggedIn = useReactiveVar(isLoggedUser);
  return isLoggedIn ? <Profile /> : <SLink to={routes.login}>로그인</SLink>;
};

export default UserProfile;
