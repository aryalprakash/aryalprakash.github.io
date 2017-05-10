/**
 * Created by bikash on 3/15/17.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';


class StoreNavBar extends Component {
  render() {
    return(
      <div className="store-info">
        <div className="horizontal-navbar">
          <div >
            <ul className="nav nav-tabs">
              <li className={this.props.active == "storeInfo"? "active": ""}>
                <Link to={{ pathname: `/${this.props.storeName}/profile`, query: { storeId: this.props.storeId } }}>Store Info</Link>
              </li>
              <li className={this.props.active == "storePromo"? "active": ""}>
                <Link to={{ pathname: `/${this.props.storeName}/profile/promo`, query: { storeId: this.props.storeId } }}>Deals and Promo</Link>
              </li>
              <li className={this.props.active == "storeReview"? "active": ""}>
                <Link to={{ pathname: `/${this.props.storeName}/profile/reviews`, query: { storeId: this.props.storeId } }}>Rating and Reviews</Link>
              </li>
              <li className={this.props.active == "storeMedia"? "active": ""}>
                <Link to={{ pathname: `/${this.props.storeName}/profile/medias`, query: { storeId: this.props.storeId } }}>Store Medias</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default StoreNavBar;