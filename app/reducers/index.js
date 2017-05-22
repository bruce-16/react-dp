/**
 * all reducers will become one.
 */

import {combineReducers} from 'redux';
import {userInfo} from './userInfo';


export default combineReducers({
  userInfo
});