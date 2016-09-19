import React, { Component } from 'react';
import  { Link } from 'react-router';

export default class Footer extends Component{


    render(){
        return(<div className="ifooter">
            <div className="imenu-list">About</div>
            <div className="imenu-list">Terms Conditions</div>
            <div className="imenu-list">Policy</div>
        </div>)
    }
}