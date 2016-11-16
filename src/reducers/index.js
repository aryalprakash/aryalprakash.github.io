import { combineReducers } from 'redux';
import ProductReducer from './product_reducer';
import StoreReducer from './store-reducer';
import SortStore from './sort-store-reducer'

const rootReducer = combineReducers({
    products: ProductReducer,
    stores: StoreReducer,
    sorted: SortStore
});

export default rootReducer;
