/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

import ProfileSideBar from './ProfileSideBar';
import EditProfile from './EditProfile';
import { getUserProfile } from '../../actions/userActions';


let styles= {
  tab:{
    borderBottom: '2px solid #f7f7f7'
  },
  tabcontent:{
    width: '100%',
    marginTop: '10px'
  }
};

class UserSetting extends Component{

  componentDidMount() {
    this.props.getUserProfile();
  }

  render(){

    let {userData} = this.props;
    console.log("in user setting", userData);

    return(
      <div className="main-content">
        <ProfileSideBar active="setting"/>
        <div className="card center-content">
          <div className="col-md-7">
            <h4>Profile Setting</h4>
            <div className="line"></div>
            {
              !_.isEmpty(userData) ?

                <EditProfile userData={userData.user_data} />
                :
                <EditProfile userData={{}} />

            }
          </div>

          <div className="col-md-7 update-password">
            <h4 style={{marginBottom: 2}}>Password Setting</h4>
            <p style={{color: "#aaa"}}>Change your password or recover current one</p>
            <div className="line"></div>

            <form className="form-horizontal">
              <div className="form-group">
                <label className="col-md-4 control-label">Current Password</label>
                <div className="col-md-8">
                  <input type="password" className="form-control"/>
                  <span ><Link to="" className="alert-warning">Forgot your password?</Link></span>
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-4 control-label">New Password</label>
                <div className="col-md-8">
                  <input type="password" className="form-control"/>
                </div>
              </div>

              <div className="form-group">
                <label className="col-md-4 control-label">Verify Password</label>
                <div className="col-md-8">
                  <input type="password" className="form-control"/>
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-3 col-md-offset-9">
                  <button className="btn btn-sm btn-default" style={{marginTop: 10, width: '100%'}}> Save Changes</button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    userData: state.user.userData
  }
}

export default connect(mapStateToProps, { getUserProfile })(UserSetting);