/**
 * Created by bikash on 4/2/17.
 */
import React, { Component } from 'react';

class StoreAboutUs extends Component {
  render() {
    let {storeDetails} = this.props;
    return(
      <div>
        <div className="card">
          <div className="store-profile-name">{storeDetails.display_name}</div>
          <div className="store-profile-address">{storeDetails.street}, {storeDetails.state}</div>
        </div>

        <div className="card">
          Store Description
          <div className="store-profile-content">{storeDetails.description}</div>
        </div>

        <div className="card">
          Opening Hours
          <div className="store-profile-content">{storeDetails.opening_hours}</div>
          Closing Hours
          <div className="store-profile-content">{storeDetails.closing_hours}</div>
        </div>
        <div className="card">
          Delivery Areas
          <div className="store-profile-content">
            {storeDetails.delivery_area.map(data => data+ " ")}
          </div>
        </div>
        <div className="card">
          Minimum Order
          <div className="store-profile-content">{storeDetails.minimum_buy} AED</div>
        </div>
        <div className="card">
          Categories Served
          <div className="store-profile-content">
            {
              storeDetails.categorysecond.map((cat)=>
                (cat.category)+" "
              )
            }
          </div>
        </div>

      </div>
    )
  }
}

StoreAboutUs.propTypes = {
  storeDetails: React.PropTypes.object.isRequired,
};

export default StoreAboutUs;