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
    selectLocation(){
        let val = document.getElementsByClassName('selectLocation');
        console.log(val[0].value);
        this.props.dispatch(filterByLocation(val[0].value))
    }

    render() {
        let {stores} = this.props;
        console.log('in store page',stores);
        return (<div className="mycontainer">
                    <Header />
                    <div className="bread-crumb">
                        <div className="select-location">My Location:
                            <select className="selectLocation" onChange={()=> this.selectLocation()}>
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
                                      <div key={store.id} className="col-md-4 col-sm-6">
                                          <Link to={{ pathname: '/store', query: { id: store.id } }} >
                                              <div className="thumbnail">
                                                  <div className="ribbon"><span className={store.status == "online"? "fa fa-circle opn": "fa fa-circle clo"}> </span></div>
                                                  <img src="../../img/store.png" />
                                                  <div className="caption">
                                                      <h4>{store.display_name}</h4>
                                                      <p>Location: {store.country}, {store.state}</p>
                                                      <p>Min-Order: {store.minimum_buy}{store.currency}</p>
                                                      <p>Category: {store.categorysecond.map((item)=>(<span key={item.id}>{item.category}, </span>))}</p>

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