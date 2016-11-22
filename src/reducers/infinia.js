import thunk from 'redux-thunk'
//import update from 'react-addons-update';

import {
    GET_MAIN_CATEGORIES,
    GET_STORES_LIST
    } from '../constants/constants.js';

const initialState = { categories: [], stores: []}

const InfiniaStores = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_MAIN_CATEGORIES':
            return {
        ...state,
            categories: action.data
            }

        case 'GET_STORES_LIST':
            return {
                ...state,
                stores: action.data
            }
        default:
            return state
    }
}
export default InfiniaStores