/**
 * Created by bikash on 3/19/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

import Deals from '../Deals';
import ProfileSideBar from './ProfileSideBar';

const styles = {
  imgStyle: {
    width: 80,
    height: 'auto'
  },

  p: {
    fontSize: 12,
    color: '#aaa'
  }

};

class UserNotifications extends Component {
  render() {
    return(
      <div className="main-content">
        <ProfileSideBar active="notification"/>
        <div className="card center-content">
          <div className="media" style={{marginTop: 15}}>
            <div className="media-left">
              <Link to="#">
                <img style={styles.imgStyle} className="media-object" src={require("../../../img/store.png")} alt="..."/>
              </Link>
            </div>
            <div className="media-body" >
              <h4 className="media-heading" style={{marginTop: 5}}>Wallmart has ELectronics Sales</h4>
              <p style={styles.p}>2 days ago</p>
              <p>lorem epsium garcia sochen oasios gipum thisum dishum</p>
            </div>
          </div>
        </div>
        <Deals />

      </div>
    )
  }
}

export default UserNotifications;