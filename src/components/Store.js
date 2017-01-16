/**
 * Created by prakash on 8/29/2016.
 */
import React, { Component } from 'react'
import  { Link } from 'react-router'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { connect } from 'react-redux';
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import Deals from './Deals'
import Gmap from './maps'
import SlidingTabPanel from './SlidingTabPanel'

import {getStoreDetails} from '../actions/infinia.js'

let styles= {
    tab:{
        borderBottom: '2px solid #f7f7f7'
    },
    tabcontent:{
        width: '100%',
        marginTop: '10px'
    }
};

class Store extends Component {
    constructor(props) {
        super(props);
        console.log('Key in store page',props.location.query.id);
        this.state = {
            list: false,
            place: 'Dubai',
            class: '',
            loc: 'active-color',
            cat: 'passive-color',


        }


    }

    handleSelect(index, last) {
        console.log('Selected tab: ' + index + ', Last tab: ' + last);
    }

    componentDidMount(){
        this.props.dispatch(getStoreDetails(this.props.location.query.id));


    }

    render() {

        const { search } = this.state;

        let {storeDetails} = this.props;
        console.log('storeDetails page',storeDetails);

        return (
          <div className="mycontainer">
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
           {storeDetails ?
            <div className="main-content">

                    <div className="sidebar-left">

                        <div className="card profile">
                            <div className="store-image">
                                <img src="../../img/store.png" />
                            </div>
                            <div className="store-profile-name">{storeDetails[0].display_name}</div>
                            <div className="store-profile-address">{storeDetails[0].street}, {storeDetails[0].state}</div>
                        </div>

                        <div className="card">
                            Delivery Time
                            {/*<div className="line"></div>*/}
                            <div className="store-profile-content">8:00 AM - 6:00 PM</div>
                        </div>
                        <div className="card">
                            Delivery Areas
                            {/*<div className="line"></div>*/}
                            <div className="store-profile-content">Ratnapark, Chabahil, Bhaktapur, Lalitpur</div>
                        </div>
                        <div className="card">
                            Minimum Order
                            {/*<div className="line"></div>*/}
                            <div className="store-profile-content">{storeDetails[0].minimum_buy} AED</div>
                        </div>
                        <div className="card">
                            Rating
                            {/*<div className="line"></div>*/}
                            <div className="store-profile-content"><span className="fa fa-smile-o" /></div>
                        </div>
                        <div className="card">
                            Location
                            <div className="store-profile-content">
                                <Gmap initialCenter={{ lng: storeDetails[0].longitude, lat: storeDetails[0].latitude }} placeProp={this.state.place}/>

                            </div>
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
                                <Tab>Regular Offer</Tab>
                                <Tab>Walmart Deals</Tab>
                            </TabList>
                            {/*For regular offer*/}
                            <TabPanel>

                                <SlidingTabPanel maxChildren={5} storeID={storeDetails[0].id} catList={storeDetails[0].categorysecond}>
                                    {storeDetails[0].categorysecond.map((cat)=>
                                        <Tab key={cat.id}>
                                            <div className="cat-icon ">
                                                <img className="img-rounded" src={cat.image}/>
                                                {cat.category}
                                            </div>
                                        </Tab>
                                    )}

                                </SlidingTabPanel>


                            </TabPanel>
                            {/*For Store deals*/}
                            <TabPanel>
                                <h3>Hello you are in the deals section</h3>
                            </TabPanel>
                        </Tabs>
                        <div className="search-box absolute-search"><input className="search-input" placeholder="Search Items"/><div className="search-icon"><img src="../../img/infinia/search.png" /></div></div>
                    </div>
                </div>
                <Deals />
            </div>

               : <p>Sorry<br/>No data</p>
           }
            <Footer />
        </div>)
    }
}

const mapStateToProps = ({storeDetails}) => ({storeDetails});


export default connect(mapStateToProps)( Store )