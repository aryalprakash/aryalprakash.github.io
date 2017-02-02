/**
 * Created by prakash on 8/29/2016.
 */
import React, { Component } from 'react';
import  { Link } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';

import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import Deals from './Deals'
import ProductList from '../containers/product-list';
import {getStoreDetails} from '../actions/infinia.js'


let styles= {
    tab:{
        borderBottom: '2px solid #f7f7f7'
    },
    tabcontent:{
        width: '100%',
        marginTop: '10px'
    }
}

class Items extends Component {
    constructor() {
        super();
        this.state = {
            list: false,
            place: 'Dubai',
            class: '',
            loc: 'active-color',
            cat: 'passive-color',
            count: 0,
            cart: 0
        }
    }

    add(value){
        console.log("returned value",value);
        this.setState({
            cart: value
        })
    }

    remove(){
        this.setState({
            count: this.state.count-1,
            cart: this.state.cart-1
        })
    }

    render() {

        let {storeDetails} = this.props;
        {storeDetails == undefined && this.props.getStoreDetails(this.props.location.query.storeID)}
        console.log('storeDetails in item page',storeDetails);

        return (
          <div className="mycontainer">
            <Header cart={this.state.cart} />
            <div className="bread-crumb">
                <div className="select-location">Dubai > Supermarket > Walmart >
                </div>
                <div className="select-cat">Chicken
                </div>
            </div>
            {storeDetails &&
            <div className="main-content">
              <div className="sidebar-left">
                <div className="card profile">
                  <div className="store-image">
                    <img src="../../img/store/walmart.jpg" />
                  </div>
                  <div className="store-profile-name">{storeDetails[0].display_name}</div>
                  <div className="store-profile-address">{storeDetails[0].street}, {storeDetails[0].state}</div>
                </div>
                <div className="card">
                  Filters Here
                </div>

              </div>
              <div className="card center-content">
                <div className="store-title relative">
                  <Tabs
                    onSelect={this.handleSelect}
                    selectedIndex={0}
                    style={styles.tabcontent}
                  >
                    <TabList className="main-tab" style={styles.tab}>
                      <Tab >Regular Offer</Tab>
                      <Tab>{storeDetails[0].display_name} Deals</Tab>
                    </TabList>
                    <TabPanel>
                      <div className="items">
                        <ProductList callback={this.add.bind(this)} catName={this.props.location.query.catName} storeID={this.props.location.query.storeID}/>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <h2>Hello from Bar</h2>
                    </TabPanel>
                  </Tabs>
                  <div className="search-box absolute-search"><input className="search-input" placeholder="Search Items"/><div className="search-icon"><img src="../../img/infinia/search.png" /></div></div>
                </div>
                {/*{this.state.cart>0?<Link to="/checkout" className="link"><div className="fixed-bottom">Proceed to Checkout</div></Link>:null}*/}
              </div>
              <Deals />
            </div>

            }
            <Footer />
        </div>)
    }
}

const mapStateToProps = ({storeDetails}) => ({storeDetails});


export default connect(mapStateToProps,{ getStoreDetails })( Items )