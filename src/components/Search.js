/**
 * Created by prakash on 8/29/2016.
 */
import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import { connect } from 'react-redux';
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import Deals from './Deals'
import StoreList from '../containers/store-list'

import {getStoresList} from '../actions/infinia.js'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            list: false,
            place: 'Dubai',
            class: '',
            loc: 'active-color',
            cat: 'passive-color',
            store: "store",
            imgPath:"../../img/store.png",
            storeName: "Baqer Mohebi",
            storeLocation: "Dubai",
            minOrder:"100 AED",
            catList:"Grossery, Clothing, Electronics"
        }
    }

    componentDidMount(){
        this.props.dispatch(getStoresList(this.props.routeParams.category))
    }

    render() {
        let {stores} = this.props
        console.log(stores)
        return (<div className="mycontainer">
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
                                <option>Kids Wear</option>
                            </select>

                        </div>
                    </div>
                    <div className="main-content">
                        <Filter props={this.props} />
                        <div className="card center-content">
                            <div className="content-title">
                                <h2><span className="fa fa-home"/> Stores</h2>
                                <div className="search-box"><input className="search-input" placeholder="Search by Name"/><div className="search-icon"><img src="../../img/infinia/search.png" /></div></div>
                            </div>

                            <div className="all-stores">
                                <div className="store-sec">
                                  <div className="row">
                                  {stores?stores.map(store=><div key={store.storeName} className="col-md-4 col-sm-6">
                                      <Link to={store.linkto}>
                                          <div className="thumbnail">
                                              <div className="ribbon"><span className="fa fa-circle opn"> </span></div>
                                              <img src={store.imgPath} />
                                              <div className="caption">
                                                  <h4>{store.storeName}</h4>
                                                  <p>Location: {store.location}</p>
                                                  <p>Min-Order: {store.minOrder}</p>
                                                  <p>Category: {store.category}</p>

                                              </div>
                                          </div>
                                      </Link>
                                  </div>):null}
                                  </div>

                            </div>

                            </div>
                        </div>
                        <Deals />
                    </div>
                    <Footer />
            </div>
          )
    }
}

Search.contextTypes = {
    router: React.PropTypes.object
}

const mapStateToProps = ({ stores }) => ({stores})

export default connect(mapStateToProps)( Search )