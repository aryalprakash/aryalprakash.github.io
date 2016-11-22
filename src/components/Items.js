/**
 * Created by prakash on 8/29/2016.
 */
import React, { Component } from 'react';
import  { Link } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import Deals from './Deals'
import ProductList from '../containers/product-list';

let styles= {
    tab:{
        borderBottom: '2px solid #f7f7f7'
    },
    tabcontent:{
        width: '100%',
        marginTop: '10px'
    }
}

export default class Items extends Component {
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

    add(){
        this.setState({
            count: this.state.count+1,
            cart: this.state.cart+1
        })
    }

    remove(){
        this.setState({
            count: this.state.count-1,
            cart: this.state.cart-1
        })
    }

    render() {
        return (
          <div className="mycontainer">
            <Header cart={this.state.cart} />
            <div className="bread-crumb">
                <div className="select-location">Dubai > Supermarket > Walmart >
                </div>
                <div className="select-cat">Chicken
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
                                <Tab>Walmart Deals</Tab>
                            </TabList>
                            <TabPanel>
                                <div className="items">
                                    <div className="item-category">Chicken Parts</div>
                                    <div className="all-items-list">

                                        <div className="item-hover-card">
                                            <div className="item-hover-card-thumb">
                                                <div className="cart-counter">
                                                    <img src="../../img/infinia/cart1.png" />
                                                    {this.state.count}
                                                </div>
                                                <img src="../../img/store/Chicken.jpg" />
                                            </div>
                                            <div className="item-details">
                                                <div className="item-name">Chicken Wings</div>
                                                <div className="item-price">Rs. 300</div>

                                                <div className="item-description">SKU: 00AD<br/>Brand: Mukharjee<br/>COO: Dubai<br/>Stock: 200</div>
                                                <div className="item-add-cart">
                                                    <div className="box click" onClick={_=>this.remove()}>-</div>
                                                    <div className="count">{this.state.count}</div>
                                                    <div className="box click" onClick={_=>this.add()}>+</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item-hover-card">
                                            <div className="item-hover-card-thumb">
                                                <div className="cart-counter">
                                                    <img src="../../img/infinia/cart1.png" />
                                                    {this.state.count}
                                                </div>
                                                <img src="../../img/store/b.jpg" />
                                            </div>
                                            <div className="item-details">
                                                <div className="item-name">Chicken Breast</div>
                                                <div className="item-price">Rs. 150</div>
                                                <div className="item-description">SKU: 00AD<br/>Brand: Mukharjee<br/>COO: Dubai<br/>Stock: 200</div>
                                                <div className="item-add-cart">
                                                    <div className="box click" onClick={_=>this.remove()}>-</div>
                                                    <div className="count">{this.state.count}</div>
                                                    <div className="box click" onClick={_=>this.add()}>+</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item-hover-card">
                                            <div className="item-hover-card-thumb">
                                                <div className="cart-counter">
                                                    <img src="../../img/infinia/cart1.png" />
                                                    {this.state.count}
                                                </div>
                                                <img src="../../img/store/d.jpg" />
                                            </div>
                                            <div className="item-details">
                                                <div className="item-name">Chicken Legs</div>
                                                <div className="item-price">Rs. 100</div>
                                                <div className="item-description">SKU: 00AD<br/>Brand: Mukharjee<br/>COO: Dubai<br/>Stock: 200</div>
                                                <div className="item-add-cart">

                                                    <div className="box click" onClick={_=>this.remove()}>-</div>
                                                    <div className="count">{this.state.count}</div>
                                                    <div className="box click" onClick={_=>this.add()}>+</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item-hover-card">
                                            <div className="item-hover-card-thumb">
                                                <div className="cart-counter">
                                                    <img src="../../img/infinia/cart1.png" />
                                                    {this.state.count}
                                                </div>
                                                <img src="../../img/store/Chicken.jpg" />
                                            </div>
                                            <div className="item-details">
                                                <div className="item-name">Chicken Heads</div>
                                                <div className="item-price">Rs. 200</div>
                                                <div className="item-description">SKU: 00AD<br/>Brand: Mukharjee<br/>COO: Dubai<br/>Stock: 200</div>
                                                <div className="item-add-cart">
                                                    <div className="box click" onClick={_=>this.remove()}>-</div>
                                                    <div className="count">{this.state.count}</div>
                                                    <div className="box click" onClick={_=>this.add()}>+</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="line margin10"></div>
                                    <div className="item-category">Full Chicken</div>
                                    <div className="all-items-list">


                                        <div className="item-hover-card">
                                            <div className="item-hover-card-thumb">
                                                <div className="cart-counter">
                                                    <img src="../../img/infinia/cart1.png" />
                                                    {this.state.count}
                                                </div>
                                                <img src="../../img/store/Chicken.jpg" />
                                            </div>
                                            <div className="item-details">
                                                <div className="item-name">Chicken Wings</div>
                                                <div className="item-price">Rs. 300</div>
                                                <div className="item-description">SKU: 00AD<br/>Brand: Mukharjee<br/>COO: Dubai<br/>Stock: 200</div>

                                                <div className="item-add-cart">
                                                    <div className="box click" onClick={_=>this.remove()}>-</div>
                                                    <div className="count">{this.state.count}</div>
                                                    <div className="box click" onClick={_=>this.add()}>+</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item-hover-card">
                                            <div className="item-hover-card-thumb">
                                                <div className="cart-counter">
                                                    <img src="../../img/infinia/cart1.png" />
                                                    {this.state.count}
                                                </div>
                                                <img src="../../img/store/Chicken.jpg" />
                                            </div>
                                            <div className="item-details">
                                                <div className="item-name">Chicken Breast</div>
                                                <div className="item-price">Rs. 300</div>
                                                <div className="item-description">SKU: 00AD<br/>Brand: Mukharjee<br/>COO: Dubai<br/>Stock: 200</div>

                                                <div className="item-add-cart">
                                                    <div className="box click" onClick={_=>this.remove()}>-</div>
                                                    <div className="count">{this.state.count}</div>
                                                    <div className="box click" onClick={_=>this.add()}>+</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item-hover-card">
                                            <div className="item-hover-card-thumb">
                                                <div className="cart-counter">
                                                    <img src="../../img/infinia/cart1.png" />
                                                    {this.state.count}
                                                </div>
                                                <img src="../../img/store/Chicken.jpg" />
                                            </div>
                                            <div className="item-details">
                                                <div className="item-name">Chicken Legs</div>
                                                <div className="item-price">Rs. 300</div>
                                                <div className="item-description">SKU: 00AD<br/>Brand: Mukharjee<br/>COO: Dubai<br/>Stock: 200</div>

                                                <div className="item-add-cart">
                                                    <div className="box click" onClick={_=>this.remove()}>-</div>
                                                    <div className="count">{this.state.count}</div>
                                                    <div className="box click" onClick={_=>this.add()}>+</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="item-hover-card">
                                            <div className="item-hover-card-thumb">
                                                <div className="cart-counter">
                                                    <img src="../../img/infinia/cart1.png" />
                                                    {this.state.count}
                                                </div>
                                                <img src="../../img/store/Chicken.jpg" />
                                            </div>
                                            <div className="item-details">
                                                <div className="item-name">Chicken Heads</div>
                                                <div className="item-price">Rs. 300</div>
                                                <div className="item-description">SKU: 00AD<br/>Brand: Mukharjee<br/>COO: Dubai<br/>Stock: 200</div>

                                                <div className="item-add-cart">
                                                    <div className="box click" onClick={_=>this.remove()}>-</div>
                                                    <div className="count">{this.state.count}</div>
                                                    <div className="box click" onClick={_=>this.add()}>+</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="line margin10"></div>
                                    <div className="item-category">Half Chicken</div>
                                    <ProductList/>

                                </div>
                            </TabPanel>
                            <TabPanel>
                                <h2>Hello from Bar</h2>
                            </TabPanel>
                        </Tabs>
                        <div className="search-box absolute-search"><input className="search-input" placeholder="Search Items"/><div className="search-icon"><img src="../../img/infinia/search.png" /></div></div>
                    </div>
                {this.state.cart>0?<Link to="/checkout" className="link"><div className="fixed-bottom">Proceed to Checkout</div></Link>:null}
                </div>
                <Deals />
            </div>
            <Footer />
        </div>)
    }
}
