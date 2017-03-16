/**
 * Created by bikash on 3/15/17.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';


class StoreNavBar extends Component {
  render() {
    return(
      <div className="store-info col-md-offset-3" style={{marginLeft: "20%"}}>
        <div className="horizontal-navbar">
          <div className="collapse navbar-collapse" style={{paddingLeft: 0}}>
            <ul className="nav navbar-nav">
              <li className={this.props.active == "storeInfo"? "active": ""}>
                <Link to="/:store/profile/">Store Info</Link>
              </li>
              <li className={this.props.active == "storePromo"? "active": ""}>
                <Link to="/:store/profile/promo">Deals and Promo</Link>
              </li>
              <li className={this.props.active == "storeReview"? "active": ""}>
                <Link to="/:store/profile/reviews">Rating and Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default StoreNavBar;