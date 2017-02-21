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
          <span className="fa fa-user"/> My Account
        </div>
        <div className="user-profile">
          <Link to="/profile">
            <div className="card">
              <span className="fa fa-shopping-bag"/> My Purchase
            </div>
          </Link>

          <div className="card">
            <span className="fa fa-star"/> Manage Ratings
          </div>

          <div className="card">
            <span className="fa fa-heart"/> My Wishlist
          </div>
          <div className="card">
            <span className="fa fa-address-book"/> Shipping Address
          </div>
          <div className="card">
            <span className="fa fa-envelope"/> My Message
          </div>
          <div className="card">
            <span className="fa fa-cog"/> Settings
          </div>
          <div className="card">
            <span className="fa fa-power-off"/> Logout
          </div>

        </div>

      </div>
    );
  }
}

export default ProfileSideBar;