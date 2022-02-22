import React, { useState } from 'react';
import styled from 'styled-components';
import { sidoData } from '../../lib/sidoData';
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
  const [sido, setSido] = useState(
    sidoData.map(item => {
      return {
        name: item.name,
        clicked: false,
      };
    }),
  );
  const [lane, setLane] = useState([
    { name: '50m', clicked: false },
    { name: '25m', clicked: false },
    { name: '기타', clicked: false },
  ]);

  return (
    <>
      <NavContainer
        sido={sido}
        setSido={setSido}
        lane={lane}
        setLane={setLane}
      />
      <Main>
        <PoolListContainer sido={sido} lane={lane} />
        <MapContainer />
      </Main>
    </>
  );
};

export default MainContainer;
