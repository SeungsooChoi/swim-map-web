import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Map from '../components/Map';
import Nav from '../components/Nav';
import SwimList from '../components/SwimList';
import useGeolocation from '../lib/useGeolocation';
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
  // store에서 map값을 가져와서 처음에 naverMap 객체가 생성되었는지 확인
  const map = useSelector(state => state.swim.map);
  const { location, error } = useGeolocation();
  const { naver } = window;

  useEffect(() => {
    if (map !== null) {
      // 마커 표시
      console.log('마커표시');
    }
  }, [map]);

  useEffect(() => {
    if (location !== null) {
      // 내 위치에 마커 표시
      map.panTo(new naver.maps.LatLng(location.latitude, location.longitude));
    }
  }, [location]);

  useEffect(() => {
    // DB에서 수영장 정보 가져와서 store에 저장
  }, []);

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
