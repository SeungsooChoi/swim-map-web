import { combineReducers } from 'redux';
import map from './map';
import swimPool from './swimPool';
import filter from './filter';

const rootReducer = combineReducers({
  map,
  swimPool,
  filter,
});

export default rootReducer;
