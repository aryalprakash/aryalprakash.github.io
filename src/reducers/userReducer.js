/**
 * Created by bikash on 3/27/17.
 */
import {
  GET_USER_PROFILE,

} from '../constants/constants.js';

const initialState = {
  userData: {},
  feeds: {},
};

export default (state = initialState, action) => {

  switch(action.type){
    case GET_USER_PROFILE:
      return {
        ...state,
        userData: action.data
      };

    case "GET_FEEDS":
      return {
        ...state,
        feeds: action.data
      };

    default:
      return state

  }
}
