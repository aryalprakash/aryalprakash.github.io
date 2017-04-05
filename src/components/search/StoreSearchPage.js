/**
 * Created by bikash on 4/4/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import StoreSearchResults from './StoreSearchResults';
import SearchFilter from './filter/SearchFilters';
import { searchStore } from '../../actions/searchActions';

class StoreSearchPage extends Component {

  state ={
    searchInput: this.props.location.query.q || '',
    lat: this.props.location.query.lat || '',
    lng: this.props.location.query.lon || '',
  };


  render() {

    let {searchResult} = this.props;

    let newURL;
    if(!this.state.lat || !this.state.lng) {
      newURL = `?q=${this.state.searchInput}`;
    }
    else {
      newURL = `?q=${this.state.searchInput}&lat=${this.state.lat}&lon=${this.state.lng}`;
    }

    { _.isEmpty(searchResult) && this.props.searchStore(newURL); }

    return(
      <div className="search-page" style={{display: 'flex'}}>

        <div className="sidebar-left">
          <SearchFilter/>
        </div>

        <div className="card center-content">
          {
            !_.isEmpty(searchResult) && !_.isEmpty(searchResult.results) ?

              <div className="card col-md-12">
                <StoreSearchResults searchResult={searchResult} searchLimit={4}/>
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
    searchResult: state.search.searchResult,
  }
}

export default connect(mapStateToProps,{ searchStore })(StoreSearchPage);