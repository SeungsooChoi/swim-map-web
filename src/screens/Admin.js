import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Nav from '../components/admin/Nav';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Admin = () => {
  return (
    <Wrapper>
      <Nav />
      <Outlet />
    </Wrapper>
  );
};

export default Admin;
