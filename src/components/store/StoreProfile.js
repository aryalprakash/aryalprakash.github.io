/**
 * Created by bikash on 3/14/17.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';

import Deals from '../Deals';

class StoreProfile extends Component {
  render() {
    return(
      <div className="mycontainer">
        <div className="main-content">

          <div className="card center-content">
            <div className="store-profile">
              <div className="cover-photo">
                <img src="../../img/infinia/wall1.jpg"/>
              </div>
              <div className="store-logo">
                <img className="img-thumbnail" src="../../img/store.png"/>
                <div className="name">
                  Wallmart
                </div>
                {/*<div className="address">*/}
                  {/*Washington, United States*/}
                {/*</div>*/}
              </div>
            </div>
            <div className="store-info col-md-offset-3" style={{marginLeft: "20%"}}>
              <div className="horizontal-navbar">
                <div className="collapse navbar-collapse" style={{paddingLeft: 0}}>
                  <ul className="nav navbar-nav">
                    <li className={this.props.active == "completed"? "active": "active"}>
                      <Link to="/:store/profile/">Store Info</Link>
                    </li>
                    <li className={this.props.active == "pending"? "active": ""}>
                      <Link to="/:store/profile/deals">Deals and Promo</Link>
                    </li>
                    <li className={this.props.active == "pending"? "active": ""}>
                      <Link to="/:store/profile/reviews">Reviews</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
          <Deals/>

        </div>

      </div>
    )
  }
}

export default StoreProfile;