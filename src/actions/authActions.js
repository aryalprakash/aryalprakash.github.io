/**
 * Created by bikash on 2/10/17.
 */
import { dispatch } from 'redux';
import {
  API_URL,
  API_URL1,
  GET_APP_CREDENTIALS,
  SIGN_UP_URL,
} from '../constants/constants.js';

var credentials;
export function getAppCredentials() {
  return function (dispatch) {
    fetch(API_URL1+"/api_credentials",{method: 'get'}).then(response => response.json()).then(res => {
      // console.log("appCredentials",res);
      credentials = res;
      dispatch(gotAppCredentials(res));
    })
  }
}

export function gotAppCredentials(res) {
  return {
    type: GET_APP_CREDENTIALS,
    data: res
  }

}

function handleResponse(response) {
  if (response.ok) {
    return response.json()
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function isLoggedIn() {
  return function (dispatch) {
    return fetch(SIGN_UP_URL+'/home/', {
      method: 'GET',

    }).then(handleResponse);
  }
}

export function loginWithEmail(data) {

  const newdata = `email=${data.email}&password=${data.password}`;
  return function (dispatch) {
    return fetch(SIGN_UP_URL+'/complete/email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: newdata
    }).then(handleResponse);
  }
}

export function loginWithFacebook(accessToken) {
  localStorage.setItem('accessToken', accessToken);
  // const data = `grant_type=convert_token&client_id=${credentials.client_id}&client_secret=${credentials.client_secret}&backend=facebook&token=${accessToken}`;
  const data = `code=${accessToken}`;

  return function (dispatch) {
    return fetch(SIGN_UP_URL+'/api/login/social/session/facebook/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: data
    }).then(handleResponse);
  }

}