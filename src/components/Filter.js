import React, { Component } from 'react';
import  { Link } from 'react-router';

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            list: false,
            place: 'Dubai',
            class: '',
            loc: 'active-color',
            cat: 'passive-color'
        }

    }

    render() {
    return(<div className="sidebar-left">
        <div className="card sidebar-title">Filter
        </div>
        <div className="card">Status
            <div className="boxes">
                <div className="select-box"><div className="options-button not-selected">All</div></div>
                <div className="select-box"><div className="options-button selected">Open</div></div>
                <div className="select-box"><div className="options-button selected">Closed</div></div>
            </div>
        </div>
        <div className="card">Sort
            <div className="boxes">
                <div className="select-box"><div className="options-button not-selected">A-Z</div></div>
                <div className="select-box"><div className="options-button selected">Z-A</div></div>
            </div>
        </div>
        <div className="card">Minimum Order
            <div className="boxes">
                <div className="select-box"><div className="options-button selected">All</div></div>
                <div className="select-box"><div className="options-button not-selected">100</div></div>
                <div className="select-box"><div className="options-button not-selected">200</div></div>
                <div className="select-box"><div className="options-button not-selected">300</div></div>
            </div>
        </div>
        {this.props.props.routeParams.category == 'fashion'?<div className="card">Color
            <div className="boxes">
                <div className="select-box"><div className="options-button not-selected">All</div></div>
                <div className="select-box"><div className="options-button not-selected pink">Pink</div></div>
                <div className="select-box"><div className="options-button not-selected green">Green</div></div>
                <div className="select-box"><div className="options-button not-selected b-blue">Blue</div></div>
            </div>
        </div>:null}
        <div className="card">Delivery Areas
            <div className="lists">
                <div className="check-list"><input className="checkbox" type="checkbox" />Sarjah</div>
                <div className="check-list"><input className="checkbox" type="checkbox" />Marjah</div>
                <div className="check-list"><input className="checkbox" type="checkbox" />Barjah</div>
            </div>
        </div>
    </div>)
    }
}
