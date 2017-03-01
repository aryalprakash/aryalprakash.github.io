/**
 * Created by bikash on 2/19/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

class ProfileSideBar extends Component{
  render(){
    return(
      <div className="sidebar-left">
        <div className="card sidebar-title">
          <Link to="/user/:user/profile"><span className="fa fa-user"/> My Account</Link>
        </div>
        <div className="user-profile">
          <Link to="/user/:user/profile/purchase/completed">
            <div className={this.props.active == "purchase"? "card active": "card"}>
              <span className="fa fa-shopping-bag"/> My Purchase
            </div>
          </Link>

          <Link to="/user/:user/profile/rating">
            <div className={this.props.active == "rating"? "card active": "card"}>
              <span className="fa fa-star"/> Manage Ratings
            </div>
          </Link>

          <Link to="/user/:user/profile/wishlist">
            <div className={this.props.active == "wishlist"? "card active": "card"}>
              <span className="fa fa-heart"/> My Wishlist
            </div>
          </Link>

          <Link to="/user/:user/profile/shipping">
            <div className={this.props.active == "shipping"? "card active": "card"}>
              <span className="fa fa-address-book"/> Shipping Address
            </div>
          </Link>

          <Link to="/user/:user/profile/message">
            <div className={this.props.active == "message"? "card active": "card"}>
              <span className="fa fa-envelope"/> My Message
            </div>
          </Link>

          <Link to="/user/:user/profile/setting">
            <div className={this.props.active == "setting"? "card active": "card"}>
              <span className="fa fa-cog"/> Settings
            </div>
          </Link>

          <div className="card">
            <span className="fa fa-power-off"/> Logout
          </div>

        </div>

      </div>
    );
  }
}

export default ProfileSideBar;