'use strict'
import thunk from 'redux-thunk'
import { dispatch } from 'redux'
//require('es6-promise').polyfill();
//require('isomorphic-fetch');

import {
    API_URL,
    GET_MAIN_CATEGORIES,
    GET_STORES_LIST,
    GET_PRODUCTS_LIST,
    GET_PRODUCT_DETAILS,
    } from '../constants/constants.js'
import { sortBy, orderBy } from 'lodash';

let storeList = [];
export function getMainCategories (){
    return function(dispatch){
        const url = API_URL
        fetch(API_URL+"/categories.json").then(response => response.json()).then(res => {
            console.log(res);
            dispatch(gotMainCategories(res.data));
        })
    }
}

export function gotMainCategories(res){
    return {type: GET_MAIN_CATEGORIES, data: res}
}


export function getStoresList(category){
    return function(dispatch){
        fetch(API_URL+"/stores.json?category="+category).then(response => response.json()).then(res => {
            console.log(res);
            storeList = res.data;
            dispatch(gotStoresList(res.data));
        })
    }
}

export function gotStoresList(res){
    return {type: GET_STORES_LIST, data: res}
}

export function sortStore(choice) {
    console.log('i am in action');
    if(choice == 'atoz'){
        let newStore = storeList;
        newStore = _.sortBy(newStore, [function(o) { return o.storeName.toLowerCase(); }]);

        return {
            type: 'SORT_BY_ATOZ',
            data: newStore
        };
    }
    else{
        let newStore = storeList;
        newStore = _.sortBy(newStore, [function(o) { return o.storeName.toLowerCase(); }]).reverse();

        return {
            type: 'SORT_BY_ZTOA',
            data: newStore
        };
    }

}
export function filterByMinOrder(choice) {
    if(choice == 0){
        return{
            type: 'FILTER_BY_MINORDER',
            data: storeList
        }
    }
    else{
        let newStore = storeList.filter(function (o) {
            return o.minOrder == choice;
        });

        return{
            type: 'FILTER_BY_MINORDER',
            data: newStore
        }
    }

}
export function filterByLocation(choice) {
    let newStore = storeList.filter(function (o) {
        return o.location == choice;
    });
    return{
        type: 'FILTER_BY_LOCATION',
        data: newStore
    }
}

export function getProductsList() {
    return function (dispatch) {
        fetch(API_URL+"/products.json").then(response => response.json()).then(res => {
            console.log(res);
            dispatch(gotProductsList(res.data));
        })
    }
}

export function gotProductsList(res) {
    return {type: GET_PRODUCTS_LIST, data: res}
}

export function getProductDetails(res) {
    return function (dispatch) {
        fetch(API_URL+"/productDetails.json").then(response => response.json()).then(res =>{
            // console.log(res);
           dispatch(gotProductDetails(res.detail));
        });
    }
}

export function gotProductDetails(res) {
    return {type: GET_PRODUCT_DETAILS, data: res}
}

