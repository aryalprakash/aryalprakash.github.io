/**
 * Created by bikash on 3/15/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gmap from '../maps';
import StoreNavBar from './StoreNavBar';
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
                <div className="store-profile-name">{storeDetails[0].display_name}</div>
                <div className="store-profile-address">{storeDetails[0].street}, {storeDetails[0].state}</div>

                <div className="card">
                  Store Description
                  <div className="store-profile-content">{storeDetails[0].description}</div>
                </div>

                <div className="card">
                  Opening Hours
                  <div className="store-profile-content">{storeDetails[0].opening_hours}</div>
                  Closing Hours
                  <div className="store-profile-content">{storeDetails[0].closing_hours}</div>
                </div>
                <div className="card">
                  Delivery Areas
                  <div className="store-profile-content">
                    {storeDetails[0].delivery_area.map(data => data+ " ")}
                  </div>
                </div>
                <div className="card">
                  Minimum Order
                  <div className="store-profile-content">{storeDetails[0].minimum_buy} AED</div>
                </div>
                <div className="card">
                  Categories Served
                  <div className="store-profile-content">
                    {
                      storeDetails[0].categorysecond.map((cat)=>
                        (cat.category)+" "
                      )
                    }
                  </div>
                </div>

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