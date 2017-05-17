/**
 * Created by bikash on 3/8/17.
 */
import {
  GET_STORES_LIST,
  GET_STORE_DETAILS,
} from '../constants/constants.js';

const initialState = {
  stores: [],
  storeDetails: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case GET_STORES_LIST:
      return {
        ...state,
        stores: action.data
      };
    case GET_STORE_DETAILS:
      console.log("store details from storeReducer",action.data);
      return {
        ...state,
        storeDetails: action.data
      };
    case 'SORT_BY_ATOZ':
      return {
        ...state,
        stores: action.data
      };
    case 'SORT_BY_ZTOA':
      return {
        ...state,
        stores: action.data
      };
    case 'FILTER_BY_MINORDER':
      return {
        ...state,
        stores: action.data
      };
    case 'FILTER_BY_LOCATION':
      return {
        ...state,
        stores: action.data
      };

    default:
      return state;
  }

}