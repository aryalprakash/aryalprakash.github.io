'use strict';
import thunk from 'redux-thunk'
import { dispatch } from 'redux'
//require('es6-promise').polyfill();
//require('isomorphic-fetch');

import {
    SIGN_UP_URL,
    API_URL1,
    GET_MAIN_CATEGORIES,
    GET_SUB_CATEGORIES,
    } from '../constants/constants.js'

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


export function userSignUp(userData) {
  console.log("user data",userData);
  const postData = `username=${userData.username}&first_name=${userData.firstName}&last_name=${userData.lastName}&email=${userData.email}&password=${userData.password}`
  return function (dispatch) {
    return fetch(SIGN_UP_URL+'/complete/email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: postData
    }).then(res =>{
        console.log(res)
    });
  }

}

export function addRating(rating, ratingCategory) {
  return{type: "GET_RATING", data: rating}
}