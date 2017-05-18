/**
 * Created by prakash on 8/29/2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import  isEmpty  from 'lodash/isEmpty';

import Filter from './Filter'
import Deals from './Deals'
import StoreList from './store/StoreList';
import ContentSearchBox from './common/ContentSearchBox';
import { getMainCategories } from '../actions/infiniaAction';
import {getStoresList, filterByLocation} from '../actions/storeActions';

class Search extends Component {
    constructor() {
        super();
        this.state = {
          registered: false,
          list: false,
          class: '',
          isShownDeals: false,
        }
    }

    componentDidMount(){
      this.props.getMainCategories();
    }

    showFilter() {
      let filter = document.getElementById('filterSection');
      console.log("isShownFilter", this.state.isShownFilter);

      if(filter.style.display === 'block') {
        console.log("display none", filter);
        filter.style.display = ''

      }
      else {
        console.log("display block", filter);
        filter.style.display = 'block'
      }

    }

    showDeals() {
      let deals = document.getElementById('dealSection');

      if(deals.style.display === 'block') {
        deals.style.display = ''
      }
      else {
        deals.style.display = 'block'

      }

    }

    render() {
      let {categories} = this.props;
      console.log("main categories in search", categories);

        return (<div className="mycontainer">
                    <div className="main-content">
                      <div id="filterSection" className="filter-section">
                        <Filter props={this.props} />
                      </div>
                      <div className="card center-content">
                        <div className="content-title">
                            <h2><span className="fa fa-home"/> Stores</h2>
                            <ContentSearchBox/>

                            <div className="for-mobile-view">
                              <span className="fa fa-filter" onClick={()=> this.showFilter()}/>
                              <span className="fa fa-bolt" onClick={()=> this.showDeals()}/>
                            </div>
                        </div>
                        {
                          !isEmpty(categories) &&
                          <StoreList
                            getStoresList={this.props.getStoresList}
                            categories={categories}
                            currentCategory={this.props.routeParams.category}
                          />
                        }

                      </div>
                      <div id="dealSection" className="deals-section">
                        <Deals />
                      </div>
                    </div>
            </div>
          )
    }
}

function mapStateToProps(state) {
    return{
      categories: state.InfiniaStores.categories,
    }

}


export default connect(mapStateToProps, {getMainCategories, getStoresList})( Search )