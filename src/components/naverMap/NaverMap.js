import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { actionCreators } from '../../modules/mapReducer';

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

const NaverMap = () => {
  const dispatch = useDispatch();
  const { naver } = window;

  const options = {
    center: new naver.maps.LatLng(33.450701, 126.570667),
    zoomControl: true,
    zoomControlOptions: {
      style: naver.maps.ZoomControlStyle.SMALL,
      position: naver.maps.Position.TOP_RIGHT,
    },
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: naver.maps.MapTypeControlStyle.BUTTON,
      position: naver.maps.Position.TOP_RIGHT,
    },
    minZoom: 6,
    zoom: 10,
  };

  useEffect(() => {
    console.log('NaverMap useEffect');

    const container = document.getElementById('map');
    const map = new naver.maps.Map(container, options);

    dispatch(actionCreators.setMap(map), [map]);
  }, []);

  return <Map id="map" className="map" />;
};

export default NaverMap;
