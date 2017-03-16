/**
 * Created by bikash on 3/14/17.
 */
import React, { Component } from 'react';

import Deals from '../Deals';


class StoreProfile extends Component {
  state = {
    rating: 4
  };

  render() {
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

                <img className="img-thumbnail" src="../../img/store.png"/>

                <div className="store-intro">
                  <div className="name">Wallmart</div>

                  <div className="rating-sec">
                    <span className={this.state.rating>0.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className={this.state.rating>1.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className={this.state.rating>2.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className={this.state.rating>3.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className={this.state.rating>=4.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className="store-rating-number"> (4)</span>

                  </div>
                </div>
                <div className="store-side-info">
                  <button className="btn btn-default" style={{marginRight: "10px"}}> Shop Now</button>
                  <button className="btn btn-default">Register Your Store</button>
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

export default StoreProfile;