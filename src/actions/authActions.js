/**
 * Created by bikash on 2/10/17.
 */
import { dispatch } from 'redux';
import {
  API_URL,
  API_URL1,
  GET_APP_CREDENTIALS,
  SIGN_UP_URL,
  UNREGISTERED_URL,
} from '../constants/constants.js';
import cookie from 'react-cookie';
import { getStoreDetails }  from './storeActions';
import {handleResponse} from "./urls";

export var credentials;
export let csrf;

export function getAppCredentials() {
  return function (dispatch) {
    fetch(API_URL1+"/api_credentials",{method: 'get'}).then(response => response.json()).then(res => {
      // console.log("appCredentials",res);
      credentials = res;
      dispatch(gotAppCredentials(res));
    })
  }
}

export function getCSRFToken() {
  return function (dispatch) {
    return fetch(API_URL1+"/get_csrf", {method: 'get', credentials: "include"}).then(response => response.json()).then(res => {
      csrf = res;
      return csrf
    })
  }
}
export function gotAppCredentials(res) {
  return {
    type: GET_APP_CREDENTIALS,
    data: res
  }

}

export function isLoggedIn() {
  return function (dispatch) {
    return fetch(SIGN_UP_URL+'/api/v1/logged_in', {
      method: 'GET',
      credentials: 'include',
    }).then(handleResponse)
      .then(
      (response) => dispatch(loggedIn(response)),
      (error) => console.log(error)
    )
  }
}

export function loggedIn(res) {
  return {
    type: "LOGGED_IN",
    data: res
  }
}

export function userSignUp(userData) {
  console.log("user data",userData);
  const postData = `email=${userData.email}&password=${userData.password}`;
  // const postData = `username=${userData.username}&first_name=${userData.firstName}&last_name=${userData.lastName}&email=${userData.email}&password=${userData.password}`
  return function (dispatch) {
    return fetch(SIGN_UP_URL+'/complete/email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: postData
    }).then(handleResponse);
  }

}

export function loginWithEmail(data) {

  const newdata = `email=${data.email}&password=${data.password}&csrfmiddlewaretoken=${csrf.csrf}`;
  return dispatch => {
    return fetch(SIGN_UP_URL+'/account/login/email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: newdata
    }).then(handleResponse).then(res =>
          console.log("response after login",res)
    );
  }
}

export function loginWithFacebook(accessToken) {
  console.log("csrf token",csrf.csrf);

  localStorage.setItem('accessToken', accessToken);
  // const data = `grant_type=convert_token&client_id=${credentials.client_id}&client_secret=${credentials.client_secret}&backend=facebook&token=${accessToken}`;
  const data = `code=${accessToken}&csrfmiddlewaretoken=${csrf.csrf}`;

  return function (dispatch) {
    return fetch(SIGN_UP_URL+'/account/login/facebook/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',

      },
      credentials: 'include',
      body: data
    }).then(handleResponse);
  }

}

export function logout() {

  const data = `csrfmiddlewaretoken=${csrf.csrf}`;
  return function (dispatch) {
    return fetch(SIGN_UP_URL+'/account/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: data
    }).then(handleResponse);
  }
}

export function followStore(id) {
  const data = `csrfmiddlewaretoken=${csrf.csrf}`;

  return dispatch => {
    return fetch(UNREGISTERED_URL+'/follow/'+`${id}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: data
    }).then(handleResponse).then(
      (success) => {
        console.log("response after following store",success);
        if(success.status_code === 200) {
          console.log("i am here at follow");
          dispatch(getStoreDetails(id));
        }
      },
      (err) => {
        console.log("error while following");
      }
    );
  }
}

export function unfollowStore(id) {
  const data = `csrfmiddlewaretoken=${csrf.csrf}`;

  return dispatch => {
    return fetch(UNREGISTERED_URL+'/unfollow/'+`${id}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      credentials: 'include',
      body: data
    }).then(handleResponse).then(
      (success) => {
        console.log("response after unfollowing store",success);
        if(success.status_code === 200) {
          console.log("i am here at unfollow");
          dispatch(getStoreDetails(id));
        }
      },
      (err) => {
        console.log("error while unfollowing");
      }

    );
  }
}