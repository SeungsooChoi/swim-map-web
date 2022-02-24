// initialState
const initialState = {
  map: null,
  marker: [],
  infoWindow: [],
};

// action type
const SET_MAP = 'setMap';
const SET_MARKER = 'setMarker';
const SET_INFOWINDOW = 'setInfoWindow';

// action function
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

// reducer
const map = (state = initialState, action) => {
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
