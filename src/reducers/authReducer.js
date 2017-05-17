/**
 * Created by bikash on 3/8/17.
 */
import {
  GET_APP_CREDENTIALS,
} from '../constants/constants.js';

const initialState = {
  appCredentials: [],
  loggedIn: {}
};

export default (state = initialState, action) => {

  switch (action.type) {

    case GET_APP_CREDENTIALS:
      return{
        ...state,
        appCredentials: action.data
      };

    case "LOGGED_IN":
      return{
        ...state,
        loggedIn: action.data
      };

    default:
      return state;
  }

}