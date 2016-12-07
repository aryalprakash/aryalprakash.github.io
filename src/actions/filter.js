/**
 * Created by bikash on 12/6/16.
 */

import {
    API_URL,
} from '../constants/constants.js'

export function getNewImage() {
    return function(dispatch){
        const url = API_URL;
        fetch(API_URL+"/productDetails.json").then(response => response.json()).then(res => {
            console.log(res.other);
            dispatch(gotNewImage(res.detail));
        })
    }
}
export function gotNewImage(res) {
    return{type:"New_image", data:res}
}