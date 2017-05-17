/**
 * Created by bikash on 3/19/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

import Deals from '../Deals';
import ProfileSideBar from './ProfileSideBar';
import { getFeeds } from '../../actions/userActions';

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

  componentDidMount() {
    this.props.getFeeds();
  }

  showDeals() {
    let deals = document.getElementById('dealSection');

    if(deals.style.display === 'block') {
      deals.style.display = ''
    }
    else {
      deals.style.display = 'block'

    }

  }

  render() {

    let {feeds} = this.props;

    return(
      <div className="main-content">
        <ProfileSideBar active="notification"/>
        <div className="card center-content">
          <div className="deals-for-mobile-view">
            <span className="fa fa-bolt" onClick={()=> this.showDeals()}/>
          </div>
          <h4>Your Notifications</h4>
          <div className="line"></div>
          {
            !_.isEmpty(feeds) ? feeds.items.length > 0 ? feeds.items.map((item) =>
              <div key={item.id} className="media" style={{marginTop: 15}}>
                <div className="media-left">
                  <Link to="#">
                    <img style={styles.imgStyle} className="media-object" src={require("../../../img/store.png")} alt="..."/>
                  </Link>
                </div>
                <div className="media-body" >
                  <h4 className="media-heading" style={{marginTop: 5}}>
                    {item.actor.displayName} {item.verb} {item.target.displayName}
                  </h4>
                  <p style={styles.p}>{item.published} ago</p>
                  {/*<p>lorem epsium garcia sochen oasios gipum thisum dishum</p>*/}
                </div>
              </div>
            )
              :
              <h2>There is no notifictions to show.</h2>
              :
              <h2>There is no Feeds available now</h2>
          }

        </div>
        <div id="dealSection" className="deals-section">
          <Deals />
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    feeds: state.user.feeds
  }
}

export default connect(mapStateToProps, { getFeeds })(UserNotifications);