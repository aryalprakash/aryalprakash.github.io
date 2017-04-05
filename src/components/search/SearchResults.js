/**
 * Created by bikash on 4/4/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import _ from 'lodash';

import StoreSearchResults from './StoreSearchResults';
import OfferSearchResults from './OfferSearchResults';
import { search } from '../../actions/searchActions';


// const stores = [
//   {
//     "id": 1,
//     "country": "UAE",
//     "city": "Kathmandu",
//     "display_name": "Test Name",
//     "minimum_buy": 0,
//   },
//   {
//     "id": 2,
//     "country": "UAE",
//     "city": "Kathmandu",
//     "display_name": "Yolo Mall",
//     "minimum_buy": 0,
//   },
//   {
//     "id": 3,
//     "country": "UAE",
//     "city": "Kathmandu",
//     "display_name": "Sherpa Mall",
//     "minimum_buy": 0,
//   },
//   {
//     "id": 4,
//     "country": "UAE",
//     "city": "Kathmandu",
//     "display_name": "This That Mall",
//     "minimum_buy": 0,
//   },
// ];

class SearchResults extends Component {

  state ={
    searchInput: this.props.location.query.q || '',
    lat: this.props.location.query.lat || '',
    lng: this.props.location.query.lon || '',

  };

  render() {
    let {searchResult} = this.props;
    let {searchOfferResult} = this.props;

    let newURL;
    if(!this.state.lat || !this.state.lng) {
      newURL = `?q=${this.state.searchInput}`;
    }
    else {
      newURL = `?q=${this.state.searchInput}&lat=${this.state.lat}&lon=${this.state.lng}`;
    }

    {
      ( _.isEmpty(searchResult) || _.isEmpty(searchOfferResult) ) && this.props.search(this.state);
    }

    return(

          <div className="search-page center-content">

            {/***Results showing stores only***/}
            {
              !_.isEmpty(searchResult) && !_.isEmpty(searchResult.results) ?

                <div className="card col-md-12">
                  <StoreSearchResults searchResult={searchResult}/>
                  <Link to={`/search/store/${newURL}`}>
                    <button className="btn btn-primary " style={{marginBottom: 10}}>Load More >></button>
                  </Link>
                </div>
                :
                <div className="card center-content">
                  <h2>Sorry! there is no stores to show</h2>
                </div>
            }


            {/***Results showing offers only***/}
            {
              !_.isEmpty(searchOfferResult) && !_.isEmpty(searchOfferResult.results) ?
                <div className="card col-md-12">
                  <OfferSearchResults searchOfferResult={searchOfferResult}/>
                  <Link to={`/search/offer/${newURL}`}>
                    <button className="btn btn-primary " style={{marginBottom: 10}}>Load More >></button>
                  </Link>
                </div>
                :
                <div className="card center-content">
                  <h2>Sorry! there is no results to show</h2>
                </div>
            }


          </div>

    )
  }
}

function mapStateToProps(state) {
  return{
    searchResult: state.search.searchResult,
    searchOfferResult: state.search.searchOfferResult,
  }
}

export default connect(mapStateToProps, { search })(SearchResults);