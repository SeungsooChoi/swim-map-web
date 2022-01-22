import React from 'react';
import styled from 'styled-components';
import Map from '../components/Map';
import NavigationBar from '../components/NavigationBar';
import PoolList from '../components/PoolList';
import { elementSize } from '../styles';

const height = window.innerHeight;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: ${height - elementSize.navHeight}px;
`;

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Contents>
        <PoolList />
        <Map />
      </Contents>
    </>
  );
};

export default Home;
