/**
 * Created by prakash on 8/29/2016.
 */
import React, { Component } from 'react';
import  { Link } from 'react-router';
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import Deals from './Deals'

export default class Bookmarks extends Component {
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
                        <div className="bold">Bookmarks</div>
                        <div className="search-box"><input className="search-input" placeholder="Search by Name"/><div className="search-icon"><img src="../../img/infinia/search.png" /></div></div>
                    </div>
                    <div className="line"></div>
                    <div className="all-stores">
                        <div className="store">
                            <div className="store-thumb">
                                <img src="../../img/stores/1.jpg" />
                            </div>
                            <div className="store-details">
                                <div className="store-name">Dollar Tree</div>
                                <div className="store-address">Kings Way, Dubai</div>
                            </div>
                        </div>
                        <div className="store">
                            <div className="store-thumb">
                                <img src="../../img/stores/2.jpg" />
                            </div>
                            <div className="store-details">
                                <div className="store-name">Lego Stores</div>
                                <div className="store-address">Jamal, Dubai</div>
                            </div>
                        </div>
                        <div className="store">
                            <div className="store-thumb">
                                <img src="../../img/stores/3.jpg" />
                            </div>
                            <div className="store-details">
                                <div className="store-name">Wallmart</div>
                                <div className="store-address">Ratnapark, Dubai</div>
                            </div>
                        </div>
                        <div className="store">
                            <div className="store-thumb">
                                <img src="../../img/stores/4.jpg" />
                            </div>
                            <div className="store-details">
                                <div className="store-name">Dairy</div>
                                <div className="store-address">Lainchaur, Dubai</div>
                            </div>
                        </div>
                        <div className="store">
                            <div className="store-thumb">
                                <img src="../../img/stores/5.jpg" />
                            </div>
                            <div className="store-details">
                                <div className="store-name">Sports Direct</div>
                                <div className="store-address">Sundhara, Dubai</div>
                            </div>
                        </div>
                        <div className="store">
                            <div className="store-thumb">
                                <img src="../../img/stores/6.jpg" />
                            </div>
                            <div className="store-details">
                                <div className="store-name">Seibu</div>
                                <div className="store-address">Pulchowk, Dubai</div>
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
