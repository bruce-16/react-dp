import * as actionTypes from '../actions/actionTypes';

let initialState = {};

export function userInfo(state = initialState, action){
  switch (action.type){
    case actionTypes.USER_INFO_LOGIN :
      let newData = action.data;
      return {
        ...state,
        ...newData
      };
    default :
      return state;
  }
}