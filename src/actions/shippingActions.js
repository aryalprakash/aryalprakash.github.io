/**
 * Created by bikash on 2/21/17.
 */
import { dispatch } from 'redux';
import {
  API_URL,
  API_URL1,
  GET_APP_CREDENTIALS,
  GET_SHIPPING_ADDRESS,
  SIGN_UP_URL,
} from '../constants/constants.js';

import {csrf} from './authActions';

export function getShippingAddress() {
  return function (dispatch) {
    return fetch(API_URL1+"/shipping_address/",{method: 'get', credentials: 'include'}).then(response => response.json()).then(res =>{
      console.log("get shipping address",res.results);
      dispatch(gotShippingAddress(res.results));
    });
  }
}

export function gotShippingAddress(res) {
  return{type: GET_SHIPPING_ADDRESS, data: res}
}

export function deleteShippingAddress(id) {
  return function (dispatch) {
    return fetch(API_URL1+'/shipping_address/'+ id +'/', {
      method: 'DELETE'
    }).then(response => response.json()).then(res =>{
        dispatch(getShippingAddress());
    });
  }
}

export function addShippingAddress(data) {
  return function (dispatch) {
    return fetch(API_URL1+'/shipping_address/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrf.csrf,
      },
      credentials: 'include',
      body: JSON.stringify({
            "country": data.country,
            "name": data.name,
            "city": data.city,
            "area": "okmandu1__Kathmandu",
            "building": data.building,
            "nearest_landmark": data.nearest_landmark,
            "mobile_number": data.mobile_number,
            "type": data.type,
            "alternative_email": "",
            "floor": data.floor,
            "room": data.room,
            "apartment": data.apartment,
            "company": data.company,
            "street": data.street,
            "latitude": data.latitude,
            "longitude": data.longitude,
      })
    }).then(response => response.json()).then(res =>{
      console.log("response after adding shipping address:",res);
      dispatch(getShippingAddress());

    });
  }
}