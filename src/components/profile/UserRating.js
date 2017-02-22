/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import ProfileSideBar from './ProfileSideBar';



let styles= {
  tab:{
    borderBottom: '2px solid #f7f7f7'
  },
  tabcontent:{
    width: '100%',
    marginTop: '10px'
  }
};

class UserRating extends Component{
  render(){
    return(
        <div className="main-content">
          <ProfileSideBar active="rating"/>
          <div className="card center-content">

          </div>
        </div>
    );
  }
}

export default UserRating;