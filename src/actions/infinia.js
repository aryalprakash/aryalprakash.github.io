'use strict';
import thunk from 'redux-thunk'
import { dispatch } from 'redux'
//require('es6-promise').polyfill();
//require('isomorphic-fetch');

import {
    SIGN_UP_URL,
    API_URL,
    API_URL1,
    GET_MAIN_CATEGORIES,
    GET_STORES_LIST,
    GET_SUB_CATEGORIES,
    GET_PRODUCTS_LIST,
    GET_PRODUCT_DETAILS,
    GET_STORE_DETAILS,
    GET_CART_ITEMS,
    } from '../constants/constants.js'
import { sortBy, orderBy } from 'lodash';

let storeList = [];
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


export function getStoresList(category){
    return function(dispatch){
        // fetch(API_URL+"/stores.json?category="+category).then(response => response.json()).then(res => {
        //     console.log(res);
        //     storeList = res.data;
        //     dispatch(gotStoresList(res.data));
        // })
        console.log(category);
        fetch(API_URL1+'/stores?categoryfirst__category__iendswith='+category,{method: 'get'}).then(response => response.json()).then(res=> {
            console.log('from gcs server',res.results);
            storeList = res.results;
            dispatch(gotStoresList(res.results));
        })
    }
}

export function getStoreDetails(id) {
    return function (dispatch) {
        fetch(API_URL1+'/stores?id='+id,{method: 'get'}).then(response => response.json()).then(res=> {
            console.log('from gcs server storeDetails:',res.results);
            dispatch(gotStoreDetails(res.results));
        })

    }

}
export function gotStoreDetails(res) {
    return {type: GET_STORE_DETAILS, data: res}
}

export function gotStoresList(res){
    return {type: GET_STORES_LIST, data: res}
}

export function sortStore(choice) {

    if(choice == 'atoz'){
        let newStore = storeList;
        newStore = _.sortBy(newStore, [function(o) { return o.display_name.toLowerCase(); }]);

        return {
            type: 'SORT_BY_ATOZ',
            data: newStore
        };
    }
    else{
        let newStore = storeList;
        newStore = _.sortBy(newStore, [function(o) { return o.display_name.toLowerCase(); }]).reverse();

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
        return o.country.toLowerCase() == choice.toLowerCase();
    });
    return{
        type: 'FILTER_BY_LOCATION',
        data: newStore
    }
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

export function getProductsList(id, catName) {
    return function (dispatch) {
        // fetch(API_URL+"/products.json").then(response => response.json()).then(res => {
        //     console.log(res);
        //     dispatch(gotProductsList(res.data));
        // })
        fetch(API_URL1+'/stocks?type3='+catName+'&store='+id,{method: 'get'}).then(response => response.json()).then(res=> {
            console.log('from gcs server product list:',res);
            dispatch(gotProductsList(res.results));
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

export function addToCart(id, count){

    return function (dispatch) {
        return fetch(API_URL1+'/add_items_to_cart', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                items:[
                    {
                        id: id,
                        count: count,

                    }
                ],
            })
        }).then(response => response.json()).then(res =>{
            console.log("response after adding to cart:",res);
            if(res.code == 200){
                dispatch(getCartItems());
                return res;
            }
        });
    }

}

export function removeFromCart(id) {
  return function (dispatch) {
    return fetch(API_URL1+'/delete_cart_items', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
            id: id
      })
    }).then(response => response.json()).then(res =>{
      if(res.code == 200){
        dispatch(getCartItems());
        return res;
      }
    });
  }
}

export function setCartItem(id, count) {
  return function (dispatch) {
    return fetch(API_URL1+'/set_items_in_cart', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        items:[
          {
            id: id,
            count: count,

          }
        ],
      })
    }).then(response => response.json()).then(res =>{
      if(res.code == 200){
        dispatch(getCartItems());
        return res;
      }
    });
  }
}

export function getCartItems() {
    return function (dispatch) {
        fetch(API_URL1+"/get_cart_items",{method: 'get', credentials: 'include'}).then(response => response.json()).then(res =>{
            // console.log("get cart items",res);
            dispatch(gotCartItems(res));
        });
    }

}
export function gotCartItems(res) {
    return{type: GET_CART_ITEMS, data: res}
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