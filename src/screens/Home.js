import React from 'react';
import Map from '../components/Map';
import NavigationBar from '../components/NavigationBar';
import PoolList from '../components/PoolList';
import { elementSize } from '../styles';

const windowHeight = window.innerHeight;

const Home = () => {
  return (
    <>
      <NavigationBar />
      <div
        className="flex flex-row justify-between shadow-lg"
        style={{ height: `${windowHeight - elementSize.navHeight}px` }}
      >
        <PoolList />
        <Map />
      </div>
    </>
  );
};

export default Home;
