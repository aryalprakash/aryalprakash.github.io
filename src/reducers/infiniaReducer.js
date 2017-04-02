import thunk from 'redux-thunk'
//import update from 'react-addons-update';

import {
    GET_MAIN_CATEGORIES,
    GET_SUB_CATEGORIES,
    GET_RATING,
    } from '../constants/constants.js';

const initialState = {
    categories: [],
    subcategories: [],
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

        default:
            return state
    }
}
