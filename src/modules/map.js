const SET_MAP = 'setMap';
const SET_MARKER = 'setMarker';
const SET_INFOWINDOW = 'setInfoWindow';

export const setMap = map => {
  return {
    type: SET_MAP,
    map,
  };
};

export const setMarker = marker => {
  return {
    type: SET_MARKER,
    marker,
  };
};

export const setInfoWindow = infoWindow => {
  return {
    type: SET_INFOWINDOW,
    infoWindow,
  };
};

const map = (
  state = {
    map: null,
    marker: [],
    infoWindow: [],
  },
  action,
) => {
  switch (action.type) {
    case SET_MAP:
      return {
        ...state,
        map: action.map,
      };
    case SET_MARKER:
      return {
        ...state,
        marker: action.marker,
      };
    case SET_INFOWINDOW:
      return {
        ...state,
        infoWindow: action.infoWindow,
      };
    default:
      return state;
  }
};

export default map;
