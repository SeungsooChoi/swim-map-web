// initialState
const initialState = {
  swimPool: [],
};

// action type
const SET_SWIMPOOL = 'setSwimPool';

// action function
export const setSwimPool = swimPool => {
  return {
    type: SET_SWIMPOOL,
    swimPool,
  };
};

// reducer
const swimPool = (state = initialState, action) => {
  switch (action.type) {
    case SET_SWIMPOOL:
      return {
        ...state,
        swimPool: action.swimPool,
      };
    default:
      return state;
  }
};

export default swimPool;
