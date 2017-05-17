/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ProfileSideBar from '../ProfileSideBar';
import CompletedPurchase from './CompletedPurchase';


let content= {
  padding: 15,
};

class UserPurchase extends Component{
  render(){
    return(
        <div className="main-content">
          <ProfileSideBar active="purchase"/>
          <div className="card center-content">
            <div className="col-md-12">
              {this.props.children}
            </div>
          </div>
        </div>
    );
  }
}

export default UserPurchase;
