/**
 * Created by bikash on 3/8/17.
 */

import { dispatch } from 'redux'
import cookie from 'react-cookie'

import {
  API_URL1,
  GET_CART_ITEMS,
} from '../constants/constants.js'



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
            count: count

          }
        ],
      })
    }).then(response => response.json()).then(res =>{
      if(res.status_code == 200){
        console.log("response after adding to cart:",res);
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
      if(res.status_code == 200){
        console.log("come here when deleted");
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
      if(res.status_code == 200){
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
