import React, { useState } from 'react';
import styled from 'styled-components';
import Map from '../components/Map';
import Nav from '../components/Nav';
import SwimList from '../components/SwimList';
import Login from '../components/user/Login';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Login isOpen={isModalOpen} close={closeModal} />
      <Nav onClick={onClick} />
      <MapDivider>
        <SwimList />
        <Map />
      </MapDivider>
    </>
  );
};

export default Home;
