import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useGeolocation from '../lib/useGeolocation';
import NaverMap from './naverMap/NaverMap';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const { naver } = window;

const Map = () => {
  // 1. get swimpool from DB  >  save store
  // 2. set naverMap
  // 3. get currentLocation and man.panTo
  const { map, swimpool } = useSelector(state => ({
    map: state.map.map,
    swimpool: state.swimPool.swimPool,
  }));

  const { location } = useGeolocation();

  useEffect(() => {
    const paintMarker = () => {
      // 1. marker : [], infoWindow : [] 필요함.
      const swimArr = [...swimpool];

      console.log(map);
      console.log(swimpool);
      swimArr.forEach(pool => {
        let newMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(pool.latitude, pool.longitude),
          map,
        });

        // let infoWindow = new naver.maps.InfoWindow({
        //   content: `<div class="iw_inner">
        //                 <h1>${pool[i].FACLT_NM}</h1>
        //                 <div>
        //                   ${
        //                     pool[i].REGULR_RELYSWIMPL_LENG
        //                       ? `
        //                       <div>정규경영장 레인 길이 : ${pool[i].REGULR_RELYSWIMPL_LENG}(M)</div>
        //                       <div>정규경영장 레인 수 : ${pool[i].REGULR_RELYSWIMPL_LANE_CNT}(줄)</div>`
        //                       : pool[i].IRREGULR_RELYSWIMPL_LENG
        //                       ? `
        //                       <div>비정규경영장 레인 길이 : ${pool[i].IRREGULR_RELYSWIMPL_LENG}(M)</div>
        //                       <div>비정규경영장 레인 수 : ${pool[i].IRREGULR_RELYSWIMPL_LANE_CNT}(줄)</div>`
        //                       : `제공되는 레인 길이, 레인 수가 없습니다.`
        //                   }
        //                 </div>
        //               </div>`,
        //   borderWidth: 0,
        //   disableAnchor: true,
        //   backgroundColor: "transparent",
        // });
      });
    };

    if (swimpool.length > 0) {
      paintMarker();
    }
  }, [swimpool, map]);

  useEffect(() => {
    if (location !== null) {
      // 현재 위치로 지도 이동
      map.panTo(new naver.maps.LatLng(location.latitude, location.longitude));
    }
  }, [location, map]);

  return (
    <Container>
      <NaverMap />
    </Container>
  );
};

export default Map;
