/**
 * Created by bikash on 2/28/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addRating } from '../actions/infiniaAction';

class StarRating extends Component {
  state = {
    rating: this.props.rating || null,
    temp_rating: null
  };

  rate = (rating) => {
    this.setState({
      rating: rating,
      temp_rating: rating
    });

    this.props.addRating(rating, this.props.ratingCategory);
  };

  star_over = (rating) => {
    this.state.temp_rating = this.state.rating;
    this.state.rating = rating;

    this.setState({
      rating: this.state.rating,
      temp_rating: this.state.temp_rating
    });
  };

  star_out = () => {
    this.state.rating = this.state.temp_rating;

    this.setState({ rating: this.state.rating });
  };

  render() {
    var stars = [];

    for(var i = 1; i <= 5; i++) {
      var klass = 'star-rating star';

      if (this.state.rating >= i && this.state.rating != null) {
        klass += ' is-selected';
      }

      stars.push(
        <label
          key={i}
          className={klass}
          onClick={this.rate.bind(this, i)}
          onMouseOver={this.star_over.bind(this, i)}
          onMouseOut={this.star_out}>
          ★
        </label>
      );
    }
    return(
      <div className="star-rating">
        {stars}
      </div>
    );
  }
}

StarRating.propTypes = {
  rating: React.PropTypes.number.isRequired,
  ratingCategory: React.PropTypes.string.isRequired
};

export default connect(null, { addRating })(StarRating);