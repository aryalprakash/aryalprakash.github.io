/**
 * Created by bikash on 3/8/17.
 */
import { dispatch } from 'redux'
import {
  API_URL1,
  GET_STORES_LIST,
  GET_STORE_DETAILS,
} from '../constants/constants.js'
import { sortBy, orderBy } from 'lodash';

let storeList = [];

export function getStoresList(category){
  return function(dispatch){
    // fetch(API_URL+"/stores.json?category="+category).then(response => response.json()).then(res => {
    //     console.log(res);
    //     storeList = res.data;
    //     dispatch(gotStoresList(res.data));
    // })
    console.log(category);
    fetch(API_URL1+'/stores?category__slug__iendswith='+category,{method: 'get'}).then(response => response.json()).then(res=> {
      console.log('from gcs server',res.results);
      storeList = res.results;
      dispatch(gotStoresList(res.results));
    })
  }
}

export function getStoreDetails(id) {
  return function (dispatch) {
    fetch(API_URL1+'/stores?id='+id,{method: 'get', credentials: 'include',}).then(response => response.json()).then(res=> {
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
