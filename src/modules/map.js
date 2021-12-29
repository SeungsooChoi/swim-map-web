const SET_MAP = 'setMap';

export const setMap = map => {
  return {
    type: SET_MAP,
    map,
  };
};

const map = (
  state = {
    map: null,
  },
  action,
) => {
  switch (action.type) {
    case SET_MAP:
      return {
        ...state,
        map: action.map,
      };
    default:
      return state;
  }
};

export default map;
