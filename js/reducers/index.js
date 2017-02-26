import { combineReducers } from 'redux';
import persons from './personsReducer';
import sortType from './sortByFilterReducer';
import currentPerson from './currentPersonReducer';

const rootReducer = combineReducers({
  persons,
  sortType,
  currentPerson
});

export default rootReducer;
