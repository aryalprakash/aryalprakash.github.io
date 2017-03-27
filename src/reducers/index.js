import { combineReducers } from 'redux';
import infiniaStores from './infiniaReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import productReducer from './productReducer';
import shippingReducer from './shippingReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth: authReducer,
  InfiniaStores: infiniaStores,
  user: userReducer,
  cart: cartReducer,
  stores: storeReducer,
  products: productReducer,
  shippingAddress: shippingReducer,

});

