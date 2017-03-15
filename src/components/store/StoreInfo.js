/**
 * Created by bikash on 3/15/17.
 */
import React, { Component } from 'react';

import Gmap from '../maps';
import StoreNavBar from './StoreNavBar';


class StoreInfo extends Component {
  render() {
    return(
      <div className="storeInfo">
        <StoreNavBar active="storeInfo"/>
        <div className="col-md-4">
          <h4>About Us</h4>
          <div className="line"></div>
          <div className="store-profile-name"> Wallmart, Washington Branch</div>
          <div className="store-profile-address">Washington DC, United States</div>
          <div className="card">
            Delivery Time
            <div className="store-profile-content">8:00 AM - 6:00 PM</div>
          </div>
          <div className="card">
            Delivery Areas
            <div className="store-profile-content">Ratnapark, Chabahil, Bhaktapur, Lalitpur</div>
          </div>
          <div className="card">
            Minimum Order
            <div className="store-profile-content">10 AED</div>
          </div>

        </div>
        <div className="store-map col-md-8">
          <h4>Store Location</h4>
          <div className="line"></div>
          <Gmap initialCenter={{ lng: 85.3441565, lat: 27.6825445 }} placeProp="Nepal"/>

        </div>
      </div>
    )
  }
}

export default StoreInfo;