import { combineReducers } from 'redux';
import persons from './personsReducer';
import sortFilter from './sortByFilterReducer';

const rootReducer = combineReducers({
  persons,
  sortFilter
});

export default rootReducer;
