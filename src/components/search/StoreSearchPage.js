/**
 * Created by bikash on 4/4/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import _ from 'lodash';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

import StoreSearchResults from './StoreSearchResults';
import SearchFilter from './filter/SearchFilters';
import { searchStore } from '../../actions/searchActions';

class StoreSearchPage extends Component {

  state ={
    searchInput: this.props.location.query.q || '',
    lat: this.props.location.query.lat || '',
    lng: this.props.location.query.lon || '',
    current: parseInt(this.props.location.query.page) || 1,
  };

  updatePage = (newURL) => {
    this.props.searchStore(newURL, true);
  };

  getNextPage = (url) => {
    this.props.searchStore(url, true);
  };

  onChange = (page) => {
    let newURL;
    console.log("active page",page);
    this.setState({
      current: page,
    });

    if(!this.state.lat || !this.state.lng) {
      newURL = (`?page=${page}&q=${this.state.searchInput}`);
    }
    else {
      newURL = (`?page=${page}&q=${this.state.searchInput}&lat=${this.state.lat}&lon=${this.state.lng}`);
    }

    this.getNextPage(newURL);
  };

  render() {

    let {searchResult} = this.props;
    // console.log("props location", this.props.location);

    let newURL = this.props.location.search;

    { _.isEmpty(searchResult) && this.props.searchStore(newURL, true); }

    return(
      <div className="search-page" style={{display: 'flex'}}>

        <div className="sidebar-left">
          <SearchFilter updatePage={this.updatePage} urlLocation={this.props.location}/>
        </div>

        <div className="card center-content">
          {
            !_.isEmpty(searchResult) && !_.isEmpty(searchResult.results) ?

              <div className="card col-md-12">
                <StoreSearchResults searchResult={searchResult} searchLimit={4}/>
                <div className="col-md-offset-3">
                  <Pagination
                    onChange={this.onChange}
                    defaultCurrent={this.state.current}
                    defaultPageSize={4}
                    total={searchResult.count}
                    showLessItems
                  />
                </div>

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

StoreSearchPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return{
    searchResult: state.search.searchResult,
  }
}

export default connect(mapStateToProps,{ searchStore })(StoreSearchPage);