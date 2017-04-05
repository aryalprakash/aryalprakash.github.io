'use strict';
import thunk from 'redux-thunk'
import { dispatch } from 'redux';
//require('es6-promise').polyfill();
//require('isomorphic-fetch');

import {
    SIGN_UP_URL,
    API_URL1,
    GET_MAIN_CATEGORIES,
    GET_SUB_CATEGORIES,
    UNREGISTERED_URL,
    } from '../constants/constants.js'
import _ from 'lodash';

export function getMainCategories (){
    return function(dispatch){
        fetch(API_URL1+"/category_1",{method: 'get'}).then(response => response.json()).then(res => {
            console.log('getMain Categories',res.results);
            dispatch(gotMainCategories(res.results));
        })
    }
}

export function gotMainCategories(res){
    return {type: GET_MAIN_CATEGORIES, data: res}
}



export function getSubCategories(id, choice) {
    return function (dispatch) {
        fetch(API_URL1+"/get_store_categorythird?store="+id+"&categorysecond="+choice,{method: 'get'}).then(response => response.json()).then(res => {
            console.log("third category of store "+id ,res.categorythird);
            dispatch(gotSubCategories(res.categorythird));
        });

    }

}
export function gotSubCategories(res) {
    return {type: GET_SUB_CATEGORIES, data: res}
}


export function addRating(rating, ratingCategory) {
  return{type: "GET_RATING", data: rating}
}

