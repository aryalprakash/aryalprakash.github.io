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
import { sortBy, orderBy } from 'lodash';

import {getStoresList, filterByLocation} from '../actions/infinia.js'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            list: false,
            place: 'Dubai',
            class: '',
            loc: 'active-color',
            cat: 'passive-color',
        }
    }

    componentDidMount(){
        this.props.dispatch(getStoresList(this.props.routeParams.category))
    }
    func(){
        let val = document.getElementsByClassName('selectOption');
        console.log(val[0].value);
        this.props.dispatch(filterByLocation(val[0].value))
    }

    render() {
        let {stores} = this.props;
        console.log(stores);
        return (<div className="mycontainer">
                    <Header />
                    <div className="bread-crumb">
                        <div className="select-location">My Location:
                            <select className="selectOption" onChange={()=> this.func()}>
                                <option value="Dubai">Dubai</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Nepal">Nepal</option>
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
                                <div className="container store-sec">
                                  <div className="row">
                                  {stores.length>0?stores.map(store=>
                                      <div key={store.storeName} className="col-md-4 col-sm-6">
                                          <Link to={store.linkto}>
                                              <div className="thumbnail">
                                                  <div className="ribbon"><span className={store.status == "online"? "fa fa-circle opn": "fa fa-circle clo"}> </span></div>
                                                  <img src={store.imgPath} />
                                                  <div className="caption">
                                                      <h4>{store.storeName}</h4>
                                                      <p>Location: {store.location}</p>
                                                      <p>Min-Order: {store.minOrder}{store.currency}</p>
                                                      <p>Category: {store.category}</p>

                                                  </div>
                                              </div>
                                          </Link>
                                    </div>
                                  ):<h2>Sorry!!! <br/>There is no Store to show.</h2>}

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

const mapStateToProps = ({stores}) => ({stores});


export default connect(mapStateToProps)( Search )