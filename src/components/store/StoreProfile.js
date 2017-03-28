/**
 * Created by bikash on 3/14/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Deals from '../Deals';
import {getStoreDetails} from '../../actions/storeActions';
import { followStore, unfollowStore } from '../../actions/authActions';


class StoreProfile extends Component {
  state = {
    rating: 4,
    follow: false
  };

  componentDidMount() {
    this.props.getStoreDetails(this.props.location.query.storeId);
  }

  followStore (id, isFollowed) {

    if(isFollowed === undefined){
      this.context.router.push('/login');
    }
    else {
      if(isFollowed === false) {

        this.props.followStore(id).then(
          (success)=> {
            console.log("successfully followed");
          },
          (err)=> {
            console.log("error during following");
          }
        );
      }
      else {

        this.props.unfollowStore(id).then(
          (success)=> {
            console.log("successfully unfollowed");
          },
          (err)=> {
            console.log("error during unfollowing");
          }
        );

      }
    }

  }

  render() {

    let {storeDetails} = this.props;
    // console.log('storeDetails in storeProfile page',storeDetails[0]);

    return(
      <div className="mycontainer">
        <div className="main-content">
          {
            storeDetails.length>0 ?
              <div className="card center-content">
                <div className="store-profile">
                  <div className="cover-photo">
                    <img src="../../img/spinneys.jpg"/>
                    <div className="cover-overlay"></div>
                  </div>
                  <div className="store-logo">

                    <img className="img-thumbnail" src="../../img/stores/spinneys.png"/>

                    <div className="store-intro">
                      <div className="name">{storeDetails[0].display_name}</div>

                      <div className="rating-sec">
                        <span className={storeDetails[0].rating>0.5?"fa fa-star":"fa fa-star-o"}/>
                        <span className={storeDetails[0].rating>1.5?"fa fa-star":"fa fa-star-o"}/>
                        <span className={storeDetails[0].rating>2.5?"fa fa-star":"fa fa-star-o"}/>
                        <span className={storeDetails[0].rating>3.5?"fa fa-star":"fa fa-star-o"}/>
                        <span className={storeDetails[0].rating>=4.5?"fa fa-star":"fa fa-star-o"}/>
                        <span className="store-rating-number"> (57 votes)</span>

                      </div>
                    </div>
                    <div className="store-side-info">

                      {
                        storeDetails[0].followed === false || storeDetails[0].followed === undefined ?
                          <button className="btn btn-sm btn-default" style={{marginRight: "10px"}} onClick={() => this.followStore(storeDetails[0].id, storeDetails[0].followed)}>
                            <span className="fa fa-user-plus"/> Follow
                          </button>
                          :
                          <button className="btn btn-sm btn-danger" style={{marginRight: "10px"}} onClick={() => this.followStore(storeDetails[0].id, storeDetails[0].followed)}>
                            <span className="fa fa-user-times"/> Unfollow
                          </button>

                      }
                      <Link to={ {pathname: `/store/${storeDetails[0].display_name}`, query: { id: storeDetails[0].id }} }>
                        <button className="btn btn-sm btn-default" style={{marginRight: "10px"}}> Shop Now </button>
                      </Link>
                      {
                        storeDetails[0].registered === false &&
                          <Link to="/addStore">
                            <button className="btn btn-sm btn-default">Register Your Store</button>
                          </Link>
                      }
                    </div>
                  </div>

                </div>
                <div className="col-md-12">
                  {this.props.children}

                </div>


              </div>

              :
              <h2 className="col-md-10">Sorry there is something wrong</h2>
          }
          <Deals/>

        </div>

      </div>
    )
  }
}

StoreProfile.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    storeDetails: state.stores.storeDetails
  }
}

export default connect(mapStateToProps,{ getStoreDetails, followStore, unfollowStore })(StoreProfile);