const SET_MAP = 'setMap';

const setMap = map => {
  return {
    type: SET_MAP,
    map,
  };
};

const mapReducer = (
  state = {
    swim: {
      map: null,
    },
  },
  action,
) => {
  console.log(action);
  switch (action.type) {
    case SET_MAP:
      return {
        ...state,
        swim: {
          ...state.swim,
          map: action.map,
        },
      };
    default:
      return state;
  }
};

export const actionCreators = {
  setMap,
};

export default mapReducer;
