import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { moveToMapCoords, updateMarkers } from '../../lib/mapApi';
import useGeolocation from '../../hooks/useGeolocation';
import { formatDate } from '../../lib/util';
import { setInfoWindow, setMarker } from '../../modules/map';
import NaverMap from '../../components/home/NaverMap';
import './mapContainer.scss';

/**
 * InfoWindow String 리턴
 * @param {Object} pool
 * @returns
 */
const createInfoWindow = pool => {
  return `<div class="mapInfoWindow">
            <h1 class="title">
              ${pool.name} ${
    pool.inOutDoorDivName === '실내'
      ? `<span class="inDoor">${pool.inOutDoorDivName}</span>`
      : pool.inOutDoorDivName === '실외'
      ? `<span class="outDoor">${pool.inOutDoorDivName}</span>`
      : `
                  <span class="inDoor">
                    ${pool.inOutDoorDivName.split(' ')[0]}
                  </span>
                  <span class="outDoor">
                    ${pool.inOutDoorDivName.split(' ')[1]}
                  </span>
                `
  }
            </h1>
            ${
              pool.roadNmAddr
                ? `<span class="address">${pool.roadNmAddr}</span>`
                : pool.lotNoAddr
                ? `<span class="address">${pool.lotNoAddr}</span>`
                : `<span class="address">등록된 주소 정보가 없습니다.</span>`
            }
            <p class="info">
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
            <div class="updateText">업데이트 날짜 : ${formatDate(
              Number(pool.updatedAt),
            )}</div>
          </div>`;
};

const MapContainer = () => {
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

    if (swimpool.length > 0 && map) {
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

export default MapContainer;
