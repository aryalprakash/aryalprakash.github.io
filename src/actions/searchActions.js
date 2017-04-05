/**
 * Created by bikash on 4/2/17.
 */
import { dispatch } from 'redux';
import { browserHistory } from 'react-router';
import { UNREGISTERED_URL } from '../constants/constants';
import _ from 'lodash';


export function getSuggestions(data) {
  return function (dispatch) {
    fetch(UNREGISTERED_URL+"/get_suggestions/"+ `?q=${data}`,{
      method: 'get',
      credentials: 'include',
    }).then(response => response.json())
      .then(res => {
        console.log("suggestions for search", res);

        dispatch(gotSuggestions(res));
      })
  }
}

function gotSuggestions(res) {
  return {
    type: 'GET_SUGGESTIONS',
    data: res
  }
}

export function search(data) {

  let newURL;

  if(!data.lat || !data.lng) {
    newURL = `?q=${data.searchInput}`;
  }
  else {
    newURL = `?q=${data.searchInput}&lat=${data.lat}&lon=${data.lng}`;
  }
  return function (dispatch) {
    dispatch(saveSearchField(data)); //not used right now, for future use

    dispatch(searchStore(newURL)).then(success => {
      dispatch(searchOffer(newURL)).then(success => {
        browserHistory.push(`/search/${newURL}`);
      })
    });
  }

}

export function searchStore(newURL) {
  return function (dispatch) {
    return fetch(UNREGISTERED_URL+"/search_store/"+ newURL,{
      method: 'get',
      credentials: "include",
    }).then(response => response.json()).then(res => {

      console.log("store search results",res);
      dispatch(gotSearchResult(res));
    })
  }
}

export function searchOffer(newURL) {
  return function (dispatch) {
    return fetch(UNREGISTERED_URL+"/search_offer/"+ newURL,{
      method: 'get',
      credentials: "include",
    }).then(response => response.json()).then(res => {

      console.log("offer search results",res);
      dispatch(gotOffer(res));
    })
  }
}

function saveSearchField(res) {
  return{
    type: 'SAVE_SEARCH_FIELD',
    data: res
  }
}

function gotSearchResult(res) {
  return {
    type: 'SEARCH_STORE',
    data: res
  }
}

function gotOffer(res) {
  return {
    type: 'SEARCH_OFFER',
    data: res
  }
}