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
    newURL = `?page=1&q=${data.searchInput}`;
  }
  else {
    newURL = `?page=1&q=${data.searchInput}&lat=${data.lat}&lon=${data.lng}`;
  }
  return function (dispatch) {
    dispatch(saveSearchField(data)); //not used right now, for future use

    dispatch(searchStore(newURL, false)).then(success => {
      dispatch(searchOffer(newURL, false)).then(success => {
        browserHistory.push(`/search/${newURL}`);
      })
    });
  }

}

function magicUrlizer(url) {

  let querySplit = url.split('?');

  if (querySplit.length > 1){
    let queryString = querySplit[1];
    let queryItems = queryString.split('&');
    let queryBucket = {};

    let items, key, value, itemValues;
    for (let index in queryItems) {
      items = queryItems[index].split('=');
      key = items[0];
      value = items[1];

      itemValues = queryBucket[key];

      if (!itemValues){
        itemValues = []
      }

      itemValues.push(value);

      queryBucket[key] = itemValues
    }

    let newQueryParams = [];
    for (var property in queryBucket) {
      if (queryBucket.hasOwnProperty(property)) {
        value = queryBucket[property].join(',');
        newQueryParams.push(property+"="+value)
      }
    }
    let newQueryString = newQueryParams.join('&');

    return querySplit[0] + '?' + newQueryString
  }
  return url
}

export function searchStore(newURL, isStorePage) {

  let computedURL = magicUrlizer(newURL);
  // console.log("computed url", computedURL);

  return function (dispatch) {
    return fetch(UNREGISTERED_URL+"/search_store/"+ computedURL,{
      method: 'get',
      credentials: "include",
    }).then(response => response.json()).then(res => {

      console.log("store search results",res);
      dispatch(gotSearchResult(res));
      isStorePage && browserHistory.push(`/search/store/${newURL}`);
    })
  }
}

export function searchOffer(newURL, isOfferPage) {
  let computedURL;
  return function (dispatch) {
    return fetch(UNREGISTERED_URL+"/search_offer/"+ newURL,{
      method: 'get',
      credentials: "include",
    }).then(response => response.json()).then(res => {

      console.log("offer search results",res);
      dispatch(gotOffer(res));
      isOfferPage && browserHistory.push(`/search/offer/${newURL}`);
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