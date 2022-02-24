import React from 'react';
import styled from 'styled-components';
import MapContainer from './MapContainer';
import NavContainer from './NavContainer';
import PoolListContainer from './PoolListContainer';

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.125rem;
  min-height: 50rem;
`;

const MainContainer = () => {
  return (
    <>
      <NavContainer />
      <Main>
        <PoolListContainer />
        <MapContainer />
      </Main>
    </>
  );
};

export default MainContainer;
