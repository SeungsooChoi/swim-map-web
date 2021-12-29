const SET_SWIMPOOL = 'setSwimPool';

export const setSwimPool = swimPool => {
  return {
    type: SET_SWIMPOOL,
    swimPool,
  };
};

const swimPool = (
  state = {
    swimPool: [],
  },
  action,
) => {
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
