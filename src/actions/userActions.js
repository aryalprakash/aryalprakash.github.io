/**
 * Created by bikash on 3/27/17.
 */
import { dispatch } from 'redux';
import { API_URL1,GET_USER_PROFILE } from '../constants/constants';

export function getUserProfile() {
  return function (dispatch) {
    fetch(API_URL1+"/user/1/",{method: 'get', credentials: "include"}).then(response => response.json()).then(res => {
      // console.log("user profile data",res);
      dispatch(gotUserProfile(res));
    })
  }
}
function gotUserProfile(res) {
  return{
    type: GET_USER_PROFILE,
    data: res
  }
}