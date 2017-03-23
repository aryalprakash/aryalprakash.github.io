/**
 * Created by bikash on 3/14/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';


import Deals from '../Deals';
import {getStoreDetails} from '../../actions/storeActions';


class StoreProfile extends Component {
  state = {
    rating: 4,
    follow: false
  };

  followStore = (e) => {
    this.state.follow ?
      this.setState({follow: false})
      :
      this.setState({follow: true})

  };

  render() {

    let {storeDetails} = this.props;
    {storeDetails == undefined || storeDetails.length == 0 && this.props.getStoreDetails(this.props.location.query.id)}
    console.log('storeDetails in storeProfile page',storeDetails);

    return(
      <div className="mycontainer">
        <div className="main-content">

          <div className="card center-content">
            <div className="store-profile">
              <div className="cover-photo">
                <img src="../../img/spinneys.jpg"/>
                <div className="cover-overlay"></div>
              </div>
              <div className="store-logo">

                <img className="img-thumbnail" src="../../img/stores/spinneys.png"/>

                <div className="store-intro">
                  <div className="name">Spinneys</div>

                  <div className="rating-sec">
                    <span className={this.state.rating>0.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className={this.state.rating>1.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className={this.state.rating>2.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className={this.state.rating>3.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className={this.state.rating>=4.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className="store-rating-number"> (57 votes)</span>

                  </div>
                </div>
                <div className="store-side-info">
                  {
                    this.state.follow ?
                      <button className="btn btn-sm btn-default" style={{marginRight: "10px"}} onClick={this.followStore}><span className="fa fa-user-plus"/> Follow</button>
                      :
                      <button className="btn btn-sm btn-danger" style={{marginRight: "10px"}} onClick={this.followStore}><span className="fa fa-user-times"/> Unfollow</button>

                  }
                  <button className="btn btn-sm btn-default" style={{marginRight: "10px"}}> Shop Now</button>
                  <button className="btn btn-sm btn-default">Register Your Store</button>
                </div>
              </div>

            </div>
            <div className="col-md-12">
              {this.props.children}

            </div>


          </div>
          <Deals/>

        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    storeDetails: state.stores.storeDetails
  }
}

export default connect(mapStateToProps,{ getStoreDetails })(StoreProfile);