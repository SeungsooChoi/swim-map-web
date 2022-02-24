import { sidoData } from '../lib/sidoData';

// initialState
const initialState = {
  sido: sidoData.map(item => ({
    name: item.name,
    clicked: false,
  })),
  lane: [
    { name: '50m', clicked: false },
    { name: '25m', clicked: false },
    { name: '기타', clicked: false },
  ],
};

// action type
const SET_SIDO = 'setSido';
const SET_LANE = 'setLane';

// action function
export const setSido = sido => ({ type: SET_SIDO, sido });
export const setLane = lane => ({ type: SET_LANE, lane });

// reducer
const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIDO:
      return {
        ...state,
        sido: action.sido,
      };
    case SET_LANE:
      return {
        ...state,
        lane: action.lane,
      };
    default:
      return state;
  }
};

export default filter;
