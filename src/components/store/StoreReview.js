/**
 * Created by bikash on 3/15/17.
 */
import React, { Component } from 'react';

import StoreNavBar from './StoreNavBar';


class StoreReview extends Component {

  state = {
    rating: 3,
  };
  render() {
    return(
      <div>
        <StoreNavBar active="storeReview"/>
        <div className="col-md-10">
          <div>
            <h4>Write a review</h4>
            <textarea className="form-control" placeholder="What do you think about this store, share your thoughts"/>
            <button className="btn btn-success btn-default" style={{marginTop: 10}}> Send Your Review</button>
          </div>

          <div>
            <br/>
            <h4>Reviews</h4>
            <div className="line"></div>
            <div className="review-list">
              <div className="row">
                <div className="col-md-1">
                  {/*<img className="profile-pic img-rounded" src="" />*/}
                  <span className="reviewer">A</span>
                </div>
                <div className="col-md-11">
                  <div className="rating-sec">
                    <span className={this.state.rating>0.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className={this.state.rating>1.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className={this.state.rating>2.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className={this.state.rating>3.5?"fa fa-star":"fa fa-star-o"}/>
                    <span className={this.state.rating>=4.5?"fa fa-star":"fa fa-star-o"}/>
                  </div>
                  <div className="">
                    <p className="username">posted by: Anish(GC) on November 29, 2016 </p>
                    <p>This one is the best jacket in the market right now. The price could have been a bit lesser.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default StoreReview;