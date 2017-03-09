/**
 * Created by bikash on 3/8/17.
 */
import {
  GET_CART_ITEMS,

} from '../constants/constants.js';

const initialState = {
  cart: {},
};

export default (state = initialState, action) => {

  switch (action.type) {
    case GET_CART_ITEMS:
      return{
        ...state,
        cart: action.data
      };

    default:
      return state;
  }

}