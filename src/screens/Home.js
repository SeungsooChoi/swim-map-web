import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Map from '../components/Map';
import Nav from '../components/Nav';
import SwimList from '../components/SwimList';
import useGeolocation from '../lib/useGeolocation';
import { setSwimPool } from '../modules/swimPool';
import { elementSize } from '../styles';

const height = window.innerHeight;

const MapDivider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: ${height - elementSize.navHeight}px;
`;

const SELECT_QUERY = gql`
  query selectAll {
    swimPools {
      id
      name
      latitude
      longitude
    }
  }
`;

const Home = () => {
  // 1. get swimpool from DB  >  save store
  // 2. set naverMap
  // 3. get currentLocation and man.panTo
  const map = useSelector(state => state.map.map);
  const dispatch = useDispatch();

  const { location, error } = useGeolocation();
  const { data } = useQuery(SELECT_QUERY);
  const { naver } = window;

  useEffect(() => {
    // DB에서 수영장 정보 가져와서 store에 저장
    if (map !== null && data !== undefined) {
      let pools = [...data.swimPools];
      const sortedPools = pools.sort((a, b) => a.id - b.id);
      dispatch(setSwimPool(sortedPools), [sortedPools]);
    }
  }, [data]);

  useEffect(() => {
    if (location !== null) {
      console.log('지도이동');
      // 현재 위치로 지도 이동
      map.panTo(new naver.maps.LatLng(location.latitude, location.longitude));
    }
  }, [location]);

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
