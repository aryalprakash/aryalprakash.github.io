import thunk from 'redux-thunk'
//import update from 'react-addons-update';

import {
    GET_MAIN_CATEGORIES,
    GET_STORES_LIST,
    GET_PRODUCTS_LIST,
    GET_PRODUCT_DETAILS
    } from '../constants/constants.js';

const initialState = { categories: [], stores: [], products: [], productDetails: []};

const InfiniaStores = (state = initialState, action) => {
    console.log('i am in infinia.js');
    switch (action.type) {
        case GET_MAIN_CATEGORIES:
            return {
        ...state,
            categories: action.data
            };

        case GET_STORES_LIST:
            return {
                ...state,
                stores: action.data
            };
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
            return state
    }
}
export default InfiniaStores