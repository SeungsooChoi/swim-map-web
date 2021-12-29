import React from 'react';
import styled from 'styled-components';
import Map from '../components/Map';
import Nav from '../components/Nav';
import SwimList from '../components/SwimList';
import { elementSize } from '../styles';

const height = window.innerHeight;

const MapDivider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: ${height - elementSize.navHeight}px;
`;

const Home = () => {
  return (
    <>
      <Nav />
      <MapDivider>
        <SwimList />
        <Map />
      </MapDivider>
    </>
  );
};

export default Home;
