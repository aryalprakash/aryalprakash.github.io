/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ProfileSideBar from './ProfileSideBar';
import RatePurchase from './userPurchase/RatePurchase';

const userOrderData = [
  {
    tracking_number: 123421,
    order_date: "10-02-2017",
    store_name: "blah blah",
    status: "Enroute",
  },
  {
    tracking_number: 123441,
    order_date: "10-02-2017",
    store_name: "dubai blah",
    status: "Item dispatched",
  },
];

let styles= {
  border:{
    paddingBottom: 10,
    marginBottom: 15
  }
};

class UserRating extends Component{
  render(){
    return(
        <div className="main-content">
          <ProfileSideBar active="rating"/>
          <div className="card center-content">
            <h3>Manage your Rating</h3>
            <div className="col-md-11 item-purchased">
              <h4 className="order-header">Order ID: 13214141 </h4>
              <div className="line"></div>
              <div className="manage-rating">

                {
                  userOrderData.map((item,index)=>
                    <div key={index} className="col-md-12" style={styles.border}>
                      <div className="col-md-2">
                        <img  src={require("../../../img/store.png")} alt="" />
                      </div>
                      <div className="col-md-3">
                        <div className="caption">
                          <h5>Store: {item.store_name}</h5>
                          <h5>Tracking No: {item.tracking_number}</h5>
                          <h5>Order Date: {item.order_date}</h5>
                        </div>
                      </div>

                      <div className="col-md-7">
                        <RatePurchase/>
                      </div>

                    </div>
                  )
                }

              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default UserRating;