import { combineReducers } from 'redux';
import InfiniaStores from './infinia';

const rootReducer = combineReducers({
    InfiniaStores: InfiniaStores
});

export default rootReducer;
