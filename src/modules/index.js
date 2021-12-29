import { combineReducers } from 'redux';
import map from './map';
import swimPool from './swimPool';

const rootReducer = combineReducers({
  map,
  swimPool,
});

export default rootReducer;
