/**
 * Created by bikash on 12/6/16.
 */
import { dispatch } from 'redux';
import {
    API_URL1,
} from '../constants/constants.js'

export function getSearchFilters() {
    return function(dispatch){
        fetch(API_URL1+"/category_2").then(response => response.json()).then(res => {
            console.log(res.other);
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