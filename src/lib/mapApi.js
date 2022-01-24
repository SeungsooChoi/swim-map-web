/**
 * 지도 중심좌표 이동
 * @param {Object} mapObj
 * @param {Number} lat
 * @param {Number} lng
 */
export const moveToMapCoords = (mapObj, lat, lng) => {
  const { naver } = window;
  mapObj.panTo(new naver.maps.LatLng(lat, lng));
};

/**
 * 마커 업데이트
 * @param {Object} mapObj
 * @param {Array} markers
 */
export const updateMarkers = (mapObj, markers) => {
  let mapBounds = mapObj.getBounds();
  let marker, position;

  for (let i = 0; i < markers.length; i++) {
    marker = markers[i];
    position = marker.getPosition();
    if (mapBounds.hasLatLng(position)) {
      showMarker(mapObj, marker);
    } else {
      hideMarker(mapObj, marker);
    }
  }
};

const showMarker = (mapObj, marker) => {
  if (marker.setMap()) return;
  marker.setMap(mapObj);
};

const hideMarker = (mapObj, marker) => {
  if (!marker.setMap()) return;
  marker.setMap(null);
};

/**
 * 정보창 열기
 * @param {Object} map
 * @param {Array} marker
 * @param {Number} selectedId
 * @param {Object} infoWindow
 */
export const openInfoWindow = (map, marker, selectedId, infoWindow) => {
  const currentMarker = marker[selectedId];
  const lat = currentMarker.position._lat;
  const lng = currentMarker.position._lng;

  moveToMapCoords(map, lat, lng);
  infoWindow[selectedId].open(map, currentMarker);
};
