/**
 * Created by prakash on 8/29/2016.
 */
import React, { Component } from 'react';
import  { Link } from 'react-router';
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import Deals from './Deals'

export default class History extends Component {
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
                            <img src="../../img/profile.jpg" />
                        </div>
                        <div className="store-profile-name">Anup Rayamajhi</div>
                        <div className="store-profile-address">Pepsicola, Kathmandu</div>
                    </div>
                    <div className="card">
                    <Link to="/history" className="links">Order History</Link>
                    </div>
                    <div className="card">
                    <Link to="" className="links">Messages/Offers</Link>
                    </div>
                    <div className="card">
                    <Link to="/bookmarks" className="links">Bookmarks</Link>
                    </div>

                </div>
                <div className="card center-content">
                    <div className="content-title">
                        <div className="bold">Order History</div>
                    </div>
                    <div className="line"></div>
                    <div className="all-basket-items">
                        <div className="store-basket">
                            <div className="date">23rd March, 2016</div>
                            <div className="line"></div>
                            <div className="store-basket-icon">
                                <img className="thumb" src="../../img/store/walmart.jpg" />
                                <div className="name">Walmart</div>
                            </div>
                            <div className="basket-items">
                                <div className="basket-item">
                                    <div className=""><div className="thumb"><img src="../../img/store/chicken.jpg" /></div>
                                        <div className="item-details">
                                            <div className="item">Chicken with Fried Wings </div>
                                            <div className="item-price">Rs. 300/kg</div>
                                        </div></div>
                                    <div className="flex"><div className="item-total">Rs. 600</div>
                                        </div>
                                </div>
                                <div className="line"></div>

                                <div className="basket-item">
                                    <div className=""><div className="thumb"><img src="../../img/store/Fish.jpg" /></div>
                                        <div className="item-details">
                                            <div className="item">Fish with French Fries </div>
                                            <div className="item-price">Rs. 600/plate</div>
                                        </div></div>
                                    <div className="flex"><div className="item-total">Rs. 1800</div>
                                        </div>
                                </div>
                                <div className="line"></div>
                                <div className="basket-item">
                                    <div className=""><div className="thumb"><img src="../../img/store/d.jpg" /></div>
                                        <div className="item-details">
                                            <div className="item">Drumsticks </div>
                                            <div className="item-price">Rs. 100/plate</div>
                                        </div></div>
                                    <div className="flex"><div className="item-total">Rs. 200</div>
                                        </div>
                                </div>

                            </div>

                        </div>
                        <div className="store-basket">
                            <div className="date">2nd March, 2016</div>
                            <div className="line"></div>
                            <div className="store-basket-icon">
                                <img className="thumb" src="../../img/stores/2.jpg" />
                                <div className="name">Pwalmart</div>
                            </div>
                            <div className="basket-items">
                                <div className="basket-item">
                                    <div className=""><div className="thumb"><img src="../../img/store/chicken.jpg" /></div>
                                        <div className="item-details">
                                            <div className="item">Chicken with Fried Wings </div>
                                            <div className="item-price">Rs. 300/kg</div>
                                        </div></div>
                                    <div className="flex"><div className="item-total">Rs. 600</div>
                                        </div>
                                </div>
                                <div className="line"></div>

                                <div className="basket-item">
                                    <div className=""><div className="thumb"><img src="../../img/store/Fish.jpg" /></div>
                                        <div className="item-details">
                                            <div className="item">Fish with French Fries </div>
                                            <div className="item-price">Rs. 600/plate</div>
                                        </div></div>
                                    <div className="flex"><div className="item-total">Rs. 1800</div>
                                        </div>
                                </div>
                                <div className="line"></div>
                                <div className="basket-item">
                                    <div className=""><div className="thumb"><img src="../../img/store/d.jpg" /></div>
                                        <div className="item-details">
                                            <div className="item">Drumsticks </div>
                                            <div className="item-price">Rs. 100/plate</div>
                                        </div></div>
                                    <div className="flex"><div className="item-total">Rs. 200</div>
                                        </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <Deals />
            </div>
            <Footer />
        </div>)
    }
}
