import { combineReducers } from 'redux';
import InfiniaStores from './infiniaReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import productReducer from './productReducer';
import shippingReducer from './shippingReducer';

export default combineReducers({
  auth: authReducer,
  InfiniaStores: InfiniaStores,
  cart: cartReducer,
  stores: storeReducer,
  products: productReducer,
  shippingAddress: shippingReducer,

});

