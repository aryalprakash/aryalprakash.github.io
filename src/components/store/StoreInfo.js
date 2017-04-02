/**
 * Created by bikash on 3/15/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gmap from '../maps';
import StoreNavBar from './StoreNavBar';
import StoreAboutUs from './StoreAboutUs';
import {getStoreDetails} from '../../actions/storeActions';


class StoreInfo extends Component {
  render() {

    let {storeDetails} = this.props;
    {storeDetails == undefined || storeDetails.length == 0 && this.props.getStoreDetails(this.props.location.query.storeId)}
    console.log('storeDetails in storeInfo page',storeDetails);

    return(
      <div className="storeInfo">
        <StoreNavBar active="storeInfo" storeId={this.props.location.query.storeId} storeName={this.props.params.store}/>
        {
          storeDetails.length>0 ?
            <div className="">

              <div className="col-md-4">
                <h4>About Us</h4>
                <div className="line"></div>
                <StoreAboutUs storeDetails={storeDetails[0]}/>
              </div>

              <div className="store-map col-md-8">
                <h4>Store Location</h4>
                <div className="line"></div>
                <Gmap initialCenter={{ lng: 85.3441565, lat: 27.6825445 }} placeProp="Nepal"/>

              </div>
            </div>

            :
            <div className="col-md-12">
              <h2>Oops there is something wrong</h2>
            </div>
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    storeDetails: state.stores.storeDetails
  }
}

export default connect(mapStateToProps,{ getStoreDetails })(StoreInfo);