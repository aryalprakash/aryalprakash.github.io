/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ProfileSideBar from './ProfileSideBar';

const wishlist = {
  items:[
    {
      id:1,
      display_name: "Leather Boot",
      imgPath: "../../../img/sub-category/Veal.jpg",
      price: 110,
      currency: "AED",
      quantity: 2,
      unit: "kg",
    },
    {
      id:2,
      display_name: "Leather Boot",
      imgPath: "../../../img/sub-category/Veal.jpg",
      price: 110,
      currency: "AED",
      quantity: 2,
      unit: "kg",
    },
    {
      id:3,
      display_name: "Leather Boot",
      imgPath: "../../../img/sub-category/Veal.jpg",
      price: 110,
      currency: "AED",
      quantity: 2,
      unit: "kg",
    },
    {
      id:4,
      display_name: "Leather Boot",
      imgPath: "../../../img/sub-category/Veal.jpg",
      price: 110,
      currency: "AED",
      quantity: 2,
      unit: "kg",
    },{
      id:5,
      display_name: "Leather Boot",
      imgPath: "../../../img/sub-category/Veal.jpg",
      price: 110,
      currency: "AED",
      quantity: 2,
      unit: "kg",
    },
  ]
};
class UserWishlist extends Component{
  render(){
    return(
        <div className="main-content">
          <ProfileSideBar active="wishlist"/>
          <div className="card center-content">
            <div className="col-md-12 col-sm-12 col-xs-12 user-wishlist">
              <h3>My Wishlists</h3>
              <div className="line" style={{marginBottom: 15}}></div>
              {
                wishlist.items.map((item,index)=>
                  <div key={index} className="col-md-3 col-sm-6 col-xs-12">
                    <div className="thumbnail">
                      {/*<div className="ribbon"><span className="fa fa-remove tooltip-bottom"><span className="tooltip-text">Remove</span></span></div>*/}
                      <img src={require("../../../img/sub-category/staples.png")} alt="" />
                      <div className="caption">
                        <h4>{item.display_name}</h4>
                        <p>{item.price} {item.currency} <span style={{color: "#777",textDecoration: "line-through"}}> 150 AED</span></p>

                        <div className="wishlist-btn">
                          <button className="btn btn-sm btn-success"><span className="fa fa-shopping-cart"/> Buy Now</button>
                          <button className="btn btn-sm btn-danger"><span className="fa fa-trash"/> Remove</button>
                        </div>

                      </div>
                    </div>
                  </div>
                )
              }

            </div>
          </div>
        </div>
    );
  }
}

export default UserWishlist;