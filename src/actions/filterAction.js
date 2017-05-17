/**
 * Created by bikash on 12/6/16.
 */
import { dispatch } from 'redux';
import {
    API_URL1,
    UNREGISTERED_URL,
} from '../constants/constants.js'

export function getSearchFilters() {
    return function(dispatch){
        fetch(API_URL1+"/filters/?keys=cat2").then(response => response.json()).then(res => {
            dispatch(gotSearchFilters(res));
        })
    }
}
export function gotSearchFilters(res) {
    return{
        type:"GET_SEARCH_FILTERS",
        data:res
    }
}