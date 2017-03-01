/**
 * Created by bikash on 2/28/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';


import StarRating from '../../StarRating';

const styles ={
  rating:{
    paddingLeft: 0,
    marginTop: -5,

  }
};

class RatePurchase extends Component {
  render() {
    let {rating} = this.props;

    return(
      <div className="col-md-8 rate-purchase">
        <h4>Rate your shopping experience</h4>
        <label className="col-md-5" style={{paddingLeft: 0}}>
          Overall experience:
        </label>
        <div className="col-md-7" style={styles.rating}>
          <StarRating rating={1} ratingCategory="overall"/>
        </div>
        {
          rating > 0 &&
          <div className="col-md-12">
            <h5>Could you please rate this</h5>
            <label className="col-md-3" style={{paddingLeft: 0}}>
              Price:
            </label>
            <div className="col-md-8" style={styles.rating}>
              <StarRating rating={0} ratingCategory="price"/>
            </div>

            <label className="col-md-3" style={{paddingLeft: 0}}>
              Quality:
            </label>
            <div className="col-md-8" style={styles.rating}>
              <StarRating rating={0} ratingCategory="quality"/>
            </div>

            <label className="col-md-3" style={{paddingLeft: 0}}>
              Delivery:
            </label>
            <div className="col-md-8" style={styles.rating}>
              <StarRating rating={0} ratingCategory="delivery"/>
            </div>

            <label className="col-md-3" style={{paddingLeft: 0}}>
              Support:
            </label>
            <div className="col-md-8" style={styles.rating}>
              <StarRating rating={0} ratingCategory="support"/>
            </div>
          </div>
        }
      </div>

    )
  }
}

function mapStateToProps(state){
  return {
    rating: state.rating
  }
}

export default connect(mapStateToProps)(RatePurchase);