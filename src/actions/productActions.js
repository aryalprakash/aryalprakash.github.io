/**
 * Created by bikash on 3/8/17.
 */
import { dispatch } from 'redux'

import {
  API_URL,
  API_URL1,
  GET_PRODUCTS_LIST,
  GET_PRODUCT_DETAILS,
} from '../constants/constants.js'

export function getProductsList(id, catName) {
    return function (dispatch) {
        // fetch(API_URL+"/products.json").then(response => response.json()).then(res => {
        //     console.log(res);
        //     dispatch(gotProductsList(res.data));
        // })
        fetch(API_URL1+'/stocks?type3='+catName+'&store='+id,{method: 'get'}).then(response => response.json()).then(res=> {
            console.log('from gcs server product list:',res);
            dispatch(gotProductsList(res.results));
        })
    }
}

export function gotProductsList(res) {
    return {type: GET_PRODUCTS_LIST, data: res}
}

export function getProductDetails(res) {
    return function (dispatch) {
        fetch(API_URL+"/productDetails.json").then(response => response.json()).then(res =>{
            // console.log(res);
            dispatch(gotProductDetails(res.detail));
        });
    }
}

export function gotProductDetails(res) {
    return {type: GET_PRODUCT_DETAILS, data: res}
}


