/**
 * Created by bikash on 4/2/17.
 */
import { UNREGISTERED_URL } from '../constants/constants';

export function search(data) {
  let newURL;
  console.log("", data.searchInput);
  if(_.isEmpty(data.lat) || _.isEmpty(data.lng))
    newURL = UNREGISTERED_URL+"/search_store/"+`?q=${data.searchInput}`;
  else
    newURL = UNREGISTERED_URL+"/search_store/"+`?q=${data.searchInput}&lat=${data.lat}&lon=${data.lng}`;
  return function (dispatch) {
    fetch(newURL,{
      method: 'get',
      credentials: "include",
    }).then(response => response.json()).then(res => {
      console.log("store search results",res);
      dispatch(gotSearchResult(res));
    })
  }
}

function gotSearchResult(res) {
  return {
    type: 'SEARCH_STORE',
    data: res
  }
}