import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { moveToMapCoords, updateMarkers } from '../lib/mapApi';
import useGeolocation from '../hooks/useGeolocation';
import { formatDate } from '../lib/util';
import { setInfoWindow, setMarker } from '../modules/map';
import NaverMap from './naverMap/NaverMap';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Map = () => {
  // 1. get swimpool from DB  >  save store
  // 2. set naverMap
  // 3. get currentLocation and man.panTo
  const { map, swimpool } = useSelector(state => ({
    map: state.map.map,
    swimpool: state.swimPool.swimPool,
  }));
  const dispatch = useDispatch();
  const { location } = useGeolocation();
  const { naver } = window;

  useEffect(() => {
    let markers = [];
    let infoWindows = [];

    const handleClickMarkers = seq => {
      let marker = markers[seq];
      let infoWindow = infoWindows[seq];
      if (infoWindow.getMap()) {
        infoWindow.close();
      } else {
        infoWindow.open(map, marker);
      }
    };

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

        let infoWindow = new naver.maps.InfoWindow({
          content: `<div class="iw_inner">
                        <span>${pool.sigunguName}</span>
                        <h1>${pool.name} (${pool.inOutDoorDivName})</h1>
                        ${
                          pool.roadNmAddr
                            ? `<span>${pool.roadNmAddr}</span>`
                            : pool.lotNoAddr
                            ? `<span>${pool.lotNoAddr}</span>`
                            : `<span>등록된 주소 정보가 없습니다.</span>`
                        }
                        <div>
                          ${
                            pool.regPoolLaneCnt > 0
                              ? `<span>${pool.regPoolLength}m 레인 : ${pool.regPoolLaneCnt}개</span>`
                              : ''
                          }
          
                          ${
                            pool.irregPoolLaneCnt > 0
                              ? `<span>${pool.irregPoolLength}m 레인 : ${pool.irregPoolLaneCnt}개</span>`
                              : ''
                          }
                        </div>
                        <div>업데이트 날짜 :${formatDate(
                          Number(pool.updatedAt),
                        )}</div>
                      </div>`,
          borderWidth: 0,
          disableAnchor: true,
          backgroundColor: 'transparent',
        });

        markers.push(newMarker);
        infoWindows.push(infoWindow);
      });

      // store에 마커, 인포윈도우 등록
      dispatch(setMarker(markers));
      dispatch(setInfoWindow(infoWindows));

      // 맵 클릭 시 정보 창 다 닫히게 설정
      naver.maps.Event.addListener(map, 'click', () => {
        infoWindows.forEach(item => {
          item.close();
        });
      });

      // 맵에 마커 설정
      naver.maps.Event.addListener(map, 'idle', () =>
        updateMarkers(map, markers),
      );

      // 마커 클릭 시 이벤트 설정
      for (let i = 0; i < markers.length; i++) {
        naver.maps.Event.addListener(markers[i], 'click', function () {
          handleClickMarkers(i);
        });
      }
    };

    if (swimpool.length > 0) {
      paintMarker();
    }
  }, [swimpool, map]);

  useEffect(() => {
    if (location !== null) {
      // 현재 위치로 지도 이동
      moveToMapCoords(map, location.latitude, location.longitude);
    }
  }, [location, map]);

  return (
    <Container>
      <NaverMap />
    </Container>
  );
};

export default Map;
