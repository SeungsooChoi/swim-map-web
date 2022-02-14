import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setMap } from '../../modules/map';

const Map = styled.div`
  width: 40rem;
  height: 100%;
  min-height: 47rem;
  margin-left: 3rem;
`;

const { naver } = window;

const NaverMap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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
      zoom: 13,
    };
    const container = document.getElementById('map');
    const map = new naver.maps.Map(container, options);

    dispatch(setMap(map), [map]);
  }, [dispatch]);

  return <Map id="map"></Map>;
};

export default NaverMap;
