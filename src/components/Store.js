/**
 * Created by prakash on 8/29/2016.
 */
import React, { Component } from 'react';
import  { Link } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
var Slider = require('react-slick');
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import Deals from './Deals'
import SubCategoryList from './subCategoryList'
import Gmap from './maps'

let styles= {
    tab:{
        borderBottom: '2px solid #f7f7f7'
    },
    tabcontent:{
        width: '100%',
        marginTop: '10'
    }
}
var initialCenter = { lng: 55.5136, lat: 25.3223 }

export default class Store extends Component {
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

    render() {
        const { search } = this.state

        var settings = {
            dots: false,
            infinite: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1

        };

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
            <div className="main-content">
                <div className="sidebar-left">
                    <div className="card profile">
                        <div className="store-image">
                            <img src="../../img/store.png" />
                        </div>
                        <div className="store-profile-name">Walmart Stores</div>
                        <div className="store-profile-address">Hile Road, Kathmandu</div>
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
                        <div className="store-profile-content">100 AED</div>
                    </div>
                    <div className="card">
                        Rating
                        {/*<div className="line"></div>*/}
                        <div className="store-profile-content"><span className="fa fa-smile-o" /></div>
                    </div>
                    <div className="card">
                        Location
                        <div className="store-profile-content">
                            <Gmap initialCenter={initialCenter} placeProp={this.state.place}/>

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
                                <Tabs>
                                    <TabList style={styles.tab}>
                                        {/*<Slider {...settings}>*/}
                                            <Tab>
                                                <div className="cat-icon ">
                                                    <img className="img-rounded" src="../../img/category/grocery.png"/>
                                                    Grocery
                                                </div>

                                            </Tab>
                                            <Tab>
                                                <div className="cat-icon ">
                                                    <img className="img-rounded" src="../../img/category/butchery.png"/>
                                                    Butchery
                                                </div>

                                            </Tab>
                                            <Tab>
                                                <div className="cat-icon ">
                                                    <img className="img-rounded" src="../../img/category/kitchen.png"/>
                                                    Kitchen Appliances
                                                </div>

                                            </Tab>
                                            <Tab>
                                                <div className="cat-icon ">
                                                    <img className="img-rounded" src="../../img/category/personal.png"/>
                                                    Personal Care
                                                </div>

                                            </Tab>
                                            <Tab>
                                                <div className="cat-icon ">
                                                    <img className="img-rounded" src="../../img/category/fashion.png"/>
                                                    Fashion
                                                </div>

                                            </Tab>
                                            <Tab>
                                                <div className="cat-icon ">
                                                    <img className="img-rounded" src="../../img/category/electronic.png"/>
                                                    Electronics
                                                </div>

                                            </Tab>
                                        {/*</Slider>*/}
                                    </TabList>
                                    {/*For grocery category*/}
                                    <TabPanel>
                                        <SubCategoryList />

                                    </TabPanel>
                                    {/*For Buthcery category*/}
                                    <TabPanel>
                                        you are in Butchery
                                    </TabPanel>
                                    <TabPanel>
                                        you are in Kitchen
                                    </TabPanel>
                                    <TabPanel>
                                        you are in Personal
                                    </TabPanel>
                                    <TabPanel>
                                        you are in Fashion
                                    </TabPanel>
                                    <TabPanel>
                                        you are in Electronics
                                    </TabPanel>
                                </Tabs>
                                <div className="items">
                                </div>
                                {/*<div className="items-container">*/}
                                    {/*<div className="item-cat">*/}
                                        {/*<Link className="link" to="/items">*/}
                                        {/*<div className="item-thumb">*/}
                                            {/*<img src="../../img/store/Chicken.jpg" />*/}
                                        {/*</div>*/}
                                        {/*<div className="item-name">Chicken</div>*/}
                                        {/*</Link>*/}
                                    {/*</div>*/}
                                    {/*<div className="item-cat">*/}
                                        {/*<Link className="link" to="/items">*/}
                                            {/*<div className="item-thumb">*/}
                                                {/*<img src="../../img/store/Fish.jpg" />*/}
                                            {/*</div>*/}
                                            {/*<div className="item-name">Fish</div>*/}
                                        {/*</Link>*/}
                                    {/*</div>*/}
                                    {/*<div className="item-cat">*/}
                                        {/*<Link className="link" to="/items">*/}
                                            {/*<div className="item-thumb">*/}
                                                {/*<img src="../../img/store/Fish.jpg" />*/}
                                            {/*</div>*/}
                                            {/*<div className="item-name">Fish</div>*/}
                                        {/*</Link>*/}
                                    {/*</div>*/}
                                    {/*<div className="item-cat">*/}
                                        {/*<Link className="link" to="/items">*/}
                                            {/*<div className="item-thumb">*/}
                                                {/*<img src="../../img/store/Fish.jpg" />*/}
                                            {/*</div>*/}
                                            {/*<div className="item-name">Fish</div>*/}
                                        {/*</Link>*/}
                                    {/*</div>*/}
                                    {/*<div className="item-cat">*/}
                                        {/*<Link className="link" to="/items">*/}
                                            {/*<div className="item-thumb">*/}
                                                {/*<img src="../../img/store/Fish.jpg" />*/}
                                            {/*</div>*/}
                                            {/*<div className="item-name">Fish</div>*/}
                                        {/*</Link>*/}
                                    {/*</div>*/}
                                    {/*<div className="item-cat">*/}
                                        {/*<Link className="link" to="/items">*/}
                                            {/*<div className="item-thumb">*/}
                                                {/*<img src="../../img/store/Fish.jpg" />*/}
                                            {/*</div>*/}
                                            {/*<div className="item-name">Fish</div>*/}
                                        {/*</Link>*/}
                                    {/*</div>*/}
                                    {/*<div className="item-cat">*/}
                                        {/*<Link className="link" to="/items">*/}
                                            {/*<div className="item-thumb">*/}
                                                {/*<img src="../../img/store/Fish.jpg" />*/}
                                            {/*</div>*/}
                                            {/*<div className="item-name">Fish</div>*/}
                                        {/*</Link>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
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
            <Footer />
        </div>)
    }
}
