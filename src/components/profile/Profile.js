/**
 * Created by bikash on 2/19/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ProfileSideBar from './ProfileSideBar';
import ShippingAddress from './ShippingAddress';
import Header from '../Header';
import Footer from '../Footer';


class Profile extends Component{
  render(){
    return(
      <div className="mycontainer">
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
          <ProfileSideBar/>
          <div className="card center-content">
            <ShippingAddress/>
          </div>

        </div>
        <Footer/>
      </div>
    );
  }
}

export default Profile;