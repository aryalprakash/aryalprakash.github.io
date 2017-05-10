/**
 * Created by bikash on 4/2/17.
 */
import React, { Component } from 'react';

class StoreAboutUs extends Component {
  render() {
    let {storeDetails, isStoreAboutPage} = this.props;
    return(
      <div>
        <div className="card">
          <div className="store-profile-name">{storeDetails.display_name}</div>
          <div className="store-profile-address">{storeDetails.area}, {storeDetails.city}</div>
        </div>
        {
          isStoreAboutPage &&
            <div className="card">
              Store Description
              <div className="store-profile-content store-description">{storeDetails.description}</div>
            </div>
        }

        <div className={isStoreAboutPage ? "responsive-body" : ''}>
          <div className="card col-sm-6 col-xs-12">
            Opening Hours
            <div className="store-profile-content">{storeDetails.opening_hours}</div>
            Closing Hours
            <div className="store-profile-content">{storeDetails.closing_hours}</div>
          </div>
          <div className="card col-sm-6 col-xs-12">
            Minimum Order
            <div className="store-profile-content">{storeDetails.minimum_buy} AED</div>
          </div>
          <div className="card col-sm-6 col-xs-12">
            Delivery Areas
            <div className="store-profile-content">
              {storeDetails.delivery_area.map(data => data+ " ")}
            </div>
          </div>
          <div className="card col-sm-6 col-xs-12">
            Categories Served
            <div className="store-profile-content">
              {
                storeDetails.categorysecond.map((cat)=>
                  <p key={cat.category_name}>{(cat.category_name).toUpperCase()}</p>
                )
              }
            </div>
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