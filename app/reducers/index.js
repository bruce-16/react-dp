/**
 * all reducers will become one.
 */

import {combineReducers} from 'redux';

function test(state = 'test', action){
  return state;
}

export default combineReducers({
  test
});