/**
 * Created by bikash on 2/19/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { logout } from '../../actions/authActions';

class ProfileSideBar extends Component{

  logout = () => {
    this.props.logout().then(
      (suc)=>{
        console.log("successfully logged out");
        this.context.router.push('/');
      },
      (err)=>{
        console.log("error");
      }
    )
  };

  render(){
    return(
      <div className="sidebar-left">
        <div className="card sidebar-title">
          <Link to="/user/Bikash/profile"><span className="fa fa-user"/> My Account</Link>
        </div>
        <div className="user-profile">
          <Link to="/user/Bikash/profile/notifications">
            <div className={this.props.active == "notification"? "card active": "card"}>
              <span className="fa fa-bell"/> Notifications
            </div>
          </Link>

          <Link to="/user/Bikash/profile/purchase/completed">
            <div className={this.props.active == "purchase"? "card active": "card"}>
              <span className="fa fa-shopping-bag"/> My Purchase
            </div>
          </Link>

          <Link to="/user/Bikash/profile/rating">
            <div className={this.props.active == "rating"? "card active": "card"}>
              <span className="fa fa-star"/> Manage Ratings
            </div>
          </Link>

          <Link to="/user/Bikash/profile/wishlist">
            <div className={this.props.active == "wishlist"? "card active": "card"}>
              <span className="fa fa-heart"/> My Wishlist
            </div>
          </Link>

          <Link to="/user/Bikash/profile/shipping">
            <div className={this.props.active == "shipping"? "card active": "card"}>
              <span className="fa fa-address-book"/> Shipping Address
            </div>
          </Link>

          <Link to="/user/Bikash/profile/message">
            <div className={this.props.active == "message"? "card active": "card"}>
              <span className="fa fa-envelope"/> My Message
            </div>
          </Link>

          <Link to="/user/Bikash/profile/setting">
            <div className={this.props.active == "setting"? "card active": "card"}>
              <span className="fa fa-cog"/> Settings
            </div>
          </Link>

          <div className="card" onClick={this.logout} style={{cursor: 'pointer'}}>
            <span className="fa fa-power-off"/> Logout
          </div>

        </div>

      </div>
    );
  }
}

ProfileSideBar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default connect(null, { logout })(ProfileSideBar);
