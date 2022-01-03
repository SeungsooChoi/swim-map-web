import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setMap } from '../../modules/map';
import { setSwimPool } from '../../modules/swimPool';

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

const SELECT_QUERY = gql`
  query selectAll {
    swimPools {
      id
      sigunguName
      name
      inOutDoorDivName
      manageMainName
      contactNo
      homepageAddr
      divingLength
      divingWidth
      divingDepth
      regPoolLength
      regPoolWidth
      regPoolLaneCnt
      irregPoolLength
      irregPoolWidth
      irregPoolLaneCnt
      seatCnt
      personCnt
      latitude
      longitude
      lotNoAddr
      roadNmAddr
      remarks
      updatedAt
    }
  }
`;
const { naver } = window;

const NaverMap = () => {
  const { data, loading, error } = useQuery(SELECT_QUERY);
  const dispatch = useDispatch();

  useEffect(() => {
    // DB에서 수영장 정보 가져와서 store에 저장
    const dispatchSwimPool = () => {
      let pools = [...data.swimPools];
      const sortedPools = pools.sort((a, b) => a.id - b.id);
      dispatch(setSwimPool(sortedPools), [sortedPools]);
    };

    if (data !== undefined) {
      dispatchSwimPool();
    } else {
      if (loading) {
        // DB연결 확인해야하는 부분인데 어떻게 처리할지 생각..
      }
    }
  }, [data]);

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
  }, []);

  return <Map id="map" className="map" />;
};

export default NaverMap;
