import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveToMapCoords, updateMarkers } from '../lib/mapApi';
import useGeolocation from '../hooks/useGeolocation';
import { formatDate } from '../lib/util';
import { setInfoWindow, setMarker } from '../modules/map';
import NaverMap from './naverMap/NaverMap';

/**
 * InfoWindow String 리턴
 * @param {Object} pool
 * @returns
 */
const createInfoWindow = pool => {
  return `<div class="flex flex-col p-4 rounded-lg w-80 text-sm bg-white shadow-2xl shadow-cgBlue/50">
            <span>${pool.sigunguName}</span>
            <h1 class="mt-3 text-base">
              ${pool.name} (${pool.inOutDoorDivName})
            </h1>
            ${
              pool.roadNmAddr
                ? `<span>${pool.roadNmAddr}</span>`
                : pool.lotNoAddr
                ? `<span>${pool.lotNoAddr}</span>`
                : `<span>등록된 주소 정보가 없습니다.</span>`
            }
            <p class="my-2">
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
            </p>
            <div class="text-xs text-right">업데이트 날짜 :${formatDate(
              Number(pool.updatedAt),
            )}</div>
          </div>`;
};

const Map = () => {
  const { map } = useSelector(state => ({ map: state.map.map }));
  const { swimpool } = useSelector(state => ({
    swimpool: state.swimPool.swimPool,
  }));
  const dispatch = useDispatch();
  const { location } = useGeolocation();

  useEffect(() => {
    const { naver } = window;
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

      swimArr.forEach(pool => {
        let newMarker = new naver.maps.Marker({
          position: new naver.maps.LatLng(pool.latitude, pool.longitude),
          map,
        });

        let infoWindow = new naver.maps.InfoWindow({
          content: createInfoWindow(pool),
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
  }, [swimpool, map, dispatch]);

  useEffect(() => {
    if (location !== null) {
      // 현재 위치로 지도 이동
      moveToMapCoords(map, location.latitude, location.longitude);
    }
  }, [location, map]);

  return <NaverMap />;
};

export default Map;
