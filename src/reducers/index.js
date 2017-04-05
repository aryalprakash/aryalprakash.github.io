import { combineReducers } from 'redux';
import infiniaStores from './infiniaReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import storeReducer from './storeReducer';
import productReducer from './productReducer';
import shippingReducer from './shippingReducer';
import userReducer from './userReducer';
import searchReducer from './searchReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  auth: authReducer,
  InfiniaStores: infiniaStores,
  search: searchReducer,
  user: userReducer,
  cart: cartReducer,
  stores: storeReducer,
  products: productReducer,
  shippingAddress: shippingReducer,
  filters: filterReducer,
});

