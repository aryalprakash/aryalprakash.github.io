/**
 * Created by bikash on 3/15/17.
 */
import React, { Component } from 'react';

import StoreNavBar from './StoreNavBar';
import StarRating from '../StarRating';



class StoreReview extends Component {

  state = {
    rating: 3,
  };
  render() {
    return(
      <div>
        <StoreNavBar active="storeReview" storeId={this.props.location.query.storeId} storeName={this.props.params.store}/>
        <div className="col-md-10">
          <div className="row col-md-12" style={{paddingBottom: 20}}>
            <h4>Rate Your Shopping Experience</h4>
            <div className="line"></div>
            <div className="col-md-4" style={{marginTop: 3, paddingLeft: 0}}>Overall shopping Experience:</div>
            <div className="col-md-8">
              <StarRating rating={0} ratingCategory="overall"/>
            </div>

          </div>

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
                <div className="col-md-2 col-sm-2 col-xs-12">
                  <img className="reviewer img-rounded" src={require('../../../img/profile-icon.png')} />
                  {/*<span className="reviewer">A</span>*/}
                </div>
                <div className="col-md-10 col-sm-10 col-xs-12">
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