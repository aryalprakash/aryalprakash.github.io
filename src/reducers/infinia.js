import thunk from 'redux-thunk'
//import update from 'react-addons-update';

import {
    GET_MAIN_CATEGORIES,
    GET_STORES_LIST,
    GET_SUB_CATEGORIES,
    GET_PRODUCTS_LIST,
    GET_PRODUCT_DETAILS,
    GET_STORE_DETAILS,
    GET_CART_ITEMS,
    GET_APP_CREDENTIALS,
    GET_SHIPPING_ADDRESS,
    GET_RATING,
    } from '../constants/constants.js';

const initialState = {
    categories: [],
    stores: [],
    products: [],
    productDetails: [],
    current_store: [],
    cart: {},
    shippingAddress: [],
    rating: 0,
};

const InfiniaStores = (state = initialState, action) => {
    console.log('i am in reducer`s infiniaAction.js');
    switch (action.type) {
        case GET_MAIN_CATEGORIES:
            return {
        ...state,
            categories: action.data
            };

        case GET_STORES_LIST:
            console.log(action.data);
            return {
                ...state,
                stores: action.data
            };

        case GET_STORE_DETAILS:
            console.log(action.data);
            return {
                ...state,
                storeDetails: action.data
            };
        case GET_SUB_CATEGORIES:
            return {
                ...state,
                subcategories: action.data
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
        case GET_CART_ITEMS:
            return{
              ...state,
                cart: action.data
            };
        case GET_APP_CREDENTIALS:
            return{
              ...state,
                appCredentials: action.data
            };
        case GET_SHIPPING_ADDRESS:
            return{
              ...state,
                shippingAddress: action.data
            };
      case GET_RATING:
        return{
          ...state,
          rating: action.data
        };
        default:
            return state
    }
};
export default InfiniaStores