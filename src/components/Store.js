/**
 * Created by prakash on 8/29/2016.
 */
import React, { Component } from 'react';
import  { Link } from 'react-router';
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import Deals from './Deals'

export default class Store extends Component {
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
        return (<div className="container">
            <Header />
            <div className="bread-crumb">
                <div className="select-location">Location:
                    <select>
                        <option>Dubai</option>
                        <option>Qatar</option>
                        <option>Nepal</option>
                    </select>
                </div>
                <div className="select-cat">Category:
                    <select>
                        <option>Supermarket</option>
                        <option>Fashion</option>
                        <option>Electronics</option>
                        <option>Kids' Wear</option>
                    </select>

                </div>
            </div>
            <div className="main-content">
                <div className="sidebar-left">
                <div className="card profile">
                    <div className="store-image">
                        <img src="../../img/store/walmart.jpg" />
                    </div>
                    <div className="store-profile-name">Walmart Stores</div>
                    <div className="store-profile-address">Hile Road, Kathmandu</div>
                </div>
                <div className="card">
                    Delivery Areas
                    <div className="line"></div>
                    <div className="store-profile-content">Ratnapark, Chabahil, Bhaktapur, Lalitpur</div>
                </div>

                    <div className="card">
                    Delivery Time
                        <div className="line"></div>
                        <div className="store-profile-content">8:00 AM - 6:00 PM</div>
                    </div>

                </div>
                <div className="card center-content">
                    <div className="content-title">
                        <div></div>
                        <div className="search-box"><input className="search-input" placeholder="Search Items"/><div className="search-icon"><img src="../../img/infinia/search.png" /></div></div>
                    </div>
                    <div className="line"></div>
                </div>
                <Deals />
            </div>
            <Footer />
        </div>)
    }
}
