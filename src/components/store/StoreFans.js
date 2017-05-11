/**
 * Created by bikash on 5/11/17.
 */
import React, { Component } from 'react';

import StoreNavBar from './StoreNavBar';

class StoreFans extends Component {
  render() {
    return(
      <div>
        <StoreNavBar active="storeFans" storeId={this.props.location.query.storeId} storeName={this.props.params.store}/>
        <div className="col-md-10 col-sm-12">
          <h4>Store Followers</h4>
          <div className="line"></div>

          <div className="store-fans">
            <div className="col-md-2 col-sm-3 col-xs-4">
              <div className="fans">
                <img src={require('../../../img/profile-icon.png')}/>
                <p>Anup Rayamajhi</p>
              </div>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4">
              <div className="fans">
                <img src={require('../../../img/profile.jpg')}/>
                <p>Anup Rayamajhi</p>
              </div>
            </div>
            <div className="col-md-2 col-sm-3 col-xs-4">
              <div className="fans">
                <img src={require('../../../img/spinneys.jpg')}/>
                <p>Spinneys</p>
              </div>
            </div>
          </div>

        </div>


      </div>
    )
  }
}

export default StoreFans;