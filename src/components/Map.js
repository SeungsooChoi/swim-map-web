import React from 'react';
import styled from 'styled-components';
import NaverMap from './naverMap/NaverMap';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Map = () => {
  return (
    <Container>
      <NaverMap />
    </Container>
  );
};

export default Map;
