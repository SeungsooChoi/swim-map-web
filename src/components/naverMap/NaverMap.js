import React, { useEffect } from 'react';
import styled from 'styled-components';

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

const NaverMap = () => {
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
    // size: new naver.maps.Size(900, 900),
  };

  useEffect(() => {
    const container = document.getElementById('map');
    const map = new naver.maps.Map(container, options);
  }, []);

  return <Map id="map" className="map" />;
};

export default NaverMap;
