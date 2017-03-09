/**
 * Created by bikash on 3/8/17.
 */
import {
  GET_PRODUCTS_LIST,
  GET_PRODUCT_DETAILS,

} from '../constants/constants.js';

const initialState = {
  products: [],
  productDetails: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return {
        ...state,
        products: action.data
      };
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.data
      };

    default:
      return state;
  }

}