export const moveToMapCoords = (mapObj, lat, lng) => {
  const { naver } = window;
  mapObj.panTo(new naver.maps.LatLng(lat, lng));
};

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

export const openInfoWindow = (map, marker, selectedId, infoWindow) => {
  const currentMarker = marker[selectedId];
  const lat = currentMarker.position._lat;
  const lng = currentMarker.position._lng;

  moveToMapCoords(map, lat, lng);
  infoWindow[selectedId].open(map, currentMarker);
};
