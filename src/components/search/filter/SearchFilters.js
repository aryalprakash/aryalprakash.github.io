/**
 * Created by bikash on 4/5/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Slider from './InputFilter';
import CheckboxFilter from './CheckboxFilter';
import { getSearchFilters } from '../../../actions/filterAction';


const rating = [
  [1, 'one'],[2, 'two'],[3, 'three'],[4, 'four'],[5, 'five']
];

class Filters extends Component {

  componentDidMount() {
    this.props.getSearchFilters();
  }

  render() {

    let {filters} = this.props;
    // console.log('filters for search',filters);

    return(
      <div>
        <div className="card sidebar-title"><span className="fa fa-filter"/> Filter</div>

        <Slider
          isShow='flex'
          header="Select Distance Radius:"
          updatePage={this.props.updatePage}
          urlLocation={this.props.urlLocation}
        />
        {
          !_.isEmpty(filters) &&
          <CheckboxFilter
            header="Category:"
            list={filters.cat2Choices}
            showSearchBar={true}
            isCategory={true}
            updatePage={this.props.updatePage}
            urlLocation={this.props.urlLocation}
          />
        }
        <CheckboxFilter
          header="Rating"
          list={rating}
          isRating={true}
          updatePage={this.props.updatePage}
          urlLocation={this.props.urlLocation}
        />

      </div>
    )
  }
}

Filters.propTypes = {
  updatePage: React.PropTypes.func.isRequired,
  urlLocation: React.PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return{
    filters: state.filters.filters
  }
}

export default connect(mapStateToProps,{ getSearchFilters })(Filters);