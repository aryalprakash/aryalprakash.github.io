/**
 * Created by bikash on 5/11/17.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';

import { getStoreDetails } from '../../actions/storeActions';
import StoreNavBar from './StoreNavBar';

class StoreFans extends Component {
  render() {
    let {storeDetails} = this.props;
    let followers;
    {storeDetails.length == 0 ? this.props.getStoreDetails(this.props.location.query.storeId): followers = storeDetails[0].followers}
    console.log("store followers", followers);
    return(
      <div>
        <StoreNavBar active="storeFans" storeId={this.props.location.query.storeId} storeName={this.props.params.store}/>
        <div className="col-md-10 col-sm-12">
          <h4>Store Followers</h4>
          <div className="line"></div>

          <div className="store-fans">
            {
              followers.length > 0 ? followers.map((fan, index) =>
                <div key={index} className="col-md-2 col-sm-3 col-xs-4">
                  <div className="fans tooltip-bottom">
                    <img src={require('../../../img/profile-icon.png')}/>
                    <p>{fan.firstName} {fan.lastName}</p>
                    <span className="tooltip-text">{fan.username}</span>
                  </div>
                </div>
              ):
                <div>
                  <h5>Sorry you have no followers. </h5>
                </div>
            }

            {/*<div className="col-md-2 col-sm-3 col-xs-4">*/}
              {/*<div className="fans tooltip-bottom">*/}
                {/*<img src={require('../../../img/profile.jpg')}/>*/}
                {/*<p>Anup Rayamajhi</p>*/}
                {/*<span className="tooltip-text">Anup Rayamajhi</span>*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<div className="col-md-2 col-sm-3 col-xs-4">*/}
              {/*<div className="fans tooltip-bottom">*/}
                {/*<img src={require('../../../img/spinneys.jpg')}/>*/}
                {/*<p>Spinneys</p>*/}
                {/*<span className="tooltip-text">Spinneys</span>*/}
              {/*</div>*/}
            {/*</div>*/}
          </div>

        </div>


      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    storeDetails: state.stores.storeDetails
  }
}

export default connect(mapStateToProps, { getStoreDetails })(StoreFans);