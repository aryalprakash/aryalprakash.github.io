/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux';

import ProfileSideBar from './ProfileSideBar';

const user ={
  marginTop: 5,
  fontSize: "16px",
  color: "#a3a3a3"
};

class UserProfile extends Component{
  render(){
    return(
      <div className="main-content">
        <ProfileSideBar/>
        <div className="card center-content">
          <div className="col-md-10 profile">
            <div className="col-md-2">
              <span className="fa fa-user-circle" style={{fontSize: "5.5em"}}/>
            </div>
            <div className="col-md-9">
              <h2 style={{marginTop: 0}}>Bikash Shrestha</h2>
              <h3 style={user}>(bikash-shrestha)</h3>
              <p>shresthabikash637@gmail.com</p>
            </div>
          </div>
          <div className="col-md-10 update-profile">
            <h3>Update your profile</h3>
            <div className="line"></div>
            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-md-2 control-label">First Name</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Enter First Name" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-2 control-label">Last Name</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Enter Last Name" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-2 control-label">Phone No.</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Enter Your Phone Number" />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-2 control-label">Alternative No.</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Enter Your Alternative Phone Number" />
                </div>
              </div>

            </form>
          </div>
          <div className="col-md-10">
            <h3>Recent Purchase</h3>
            <div className="line"></div>
            <div>
              <p>You do not have any purchases recently</p>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default UserProfile;