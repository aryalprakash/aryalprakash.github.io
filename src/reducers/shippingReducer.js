/**
 * Created by bikash on 3/8/17.
 */
import {
  GET_SHIPPING_ADDRESS,
} from '../constants/constants.js';

const initialState = {
  shippingAddress: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case GET_SHIPPING_ADDRESS:
      return{
        ...state,
        shippingAddress: action.data
      };

    default:
      return state;
  }

}