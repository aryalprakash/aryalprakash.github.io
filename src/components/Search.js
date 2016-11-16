/**
 * Created by prakash on 8/29/2016.
 */
import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Filter from './Filter'
import Deals from './Deals'
import StoreList from '../containers/store-list'

export default class Search extends Component {
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
    render() {
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

                                    <StoreList/>

                                    {/*<StoreList storeProp = {this.state.store} imgPathProp={this.state.imgPath} storeNameProp={this.state.storeName} storeLocationProp={this.state.storeLocation } minOrderProp={this.state.minOrder} catListProp={this.state.catList}/>*/}
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
// class StoreList extends React.Component{
//     render(){
//         return(
//             <div className="col-md-4 col-sm-6">
//                 <Link to={this.props.storeProp}>
//                     <div className="thumbnail">
//                         <div className="ribbon"><span className="fa fa-circle opn"> </span></div>
//                         <img src={this.props.imgPathProp} />
//                         <div className="caption">
//                             <h4>{this.props.storeNameProp}</h4>
//                             <p>Location: {this.props.storeLocationProp}</p>
//                             <p>Min-Order: 100 AED</p>
//                             <p>Category: {this.props.catListProp}</p>
//
//                         </div>
//                     </div>
//                 </Link>
//
//             </div>
//         );
//     }
// }
