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
    searchResult: {},
    rating: 0,
};

export default (state = initialState, action) => {
    console.log('i am in reducer`s infiniaAction.js');
    switch (action.type) {
        case GET_MAIN_CATEGORIES:
            return {
        ...state,
            categories: action.data
            };

        case GET_SUB_CATEGORIES:
            return {
                ...state,
                subcategories: action.data
            };

        case GET_RATING:
            return{
            ...state,
            rating: action.data
            };

        case 'SEARCH_STORE':
            return{
              ...state,
                searchResult: action.data
            };
        default:
            return state
    }
}
