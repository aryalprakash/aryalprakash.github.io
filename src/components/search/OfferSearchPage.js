/**
 * Created by bikash on 4/4/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import OfferSearchResults from './OfferSearchResults';
import { searchOffer } from '../../actions/searchActions';

class OfferSearchPage extends Component {

  state ={
    searchInput: this.props.location.query.q || '',
    lat: this.props.location.query.lat || '',
    lng: this.props.location.query.lon || '',

  };

  render() {

    let {searchOfferResult} = this.props;

    let newURL;
    if(!this.state.lat || !this.state.lng) {
      newURL = `?q=${this.state.searchInput}`;
    }
    else {
      newURL = `?q=${this.state.searchInput}&lat=${this.state.lat}&lon=${this.state.lng}`;
    }

    { _.isEmpty(searchOfferResult) && this.props.searchOffer(newURL); }

    return(
      <div className="search-page" style={{display: 'flex'}}>

        <div className="sidebar-left">
          <div className="card sidebar-title"><span className="fa fa-filter"/> Filter</div>
          <div className="card">

          </div>
        </div>

        <div className="card center-content">
          {
            !_.isEmpty(searchOfferResult) && !_.isEmpty(searchOfferResult.results) ?

              <div className="card col-md-12">
                <OfferSearchResults searchOfferResult={searchOfferResult} searchLimit={4}/>
              </div>
              :
              <div className="card center-content">
                <h2>Sorry! there is no stores to show</h2>
              </div>
          }
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    searchOfferResult: state.search.searchOfferResult,
  }
}

export default connect(mapStateToProps, { searchOffer })(OfferSearchPage);