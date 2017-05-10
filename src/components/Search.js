/**
 * Created by prakash on 8/29/2016.
 */
import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import Filter from './Filter'
import Deals from './Deals'
import { sortBy, orderBy } from 'lodash';

import { getMainCategories } from '../actions/infiniaAction';
import {getStoresList, filterByLocation} from '../actions/storeActions';

class Search extends Component {
    constructor() {
        super();
        this.state = {
          registered: false,
          list: false,
          place: 'Dubai',
          class: '',
          loc: 'active-color',
          cat: 'passive-color',
          isShownDeals: false,

        }
    }

    componentDidMount(){
      this.props.getMainCategories();

      setTimeout(()=> {
        if(this.props.categories){
          let category = this.props.categories.filter((cat) => {
            return cat.category_name == this.props.routeParams.category
          });
          this.props.getStoresList(category[0].slug);
        }
      },400);


    }
    selectLocation(){
        let val = document.getElementsByClassName('selectLocation');
        console.log(val[0].value);
        this.props.dispatch(filterByLocation(val[0].value))
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

      this.setState(prevState => ({
        isShownDeals: !prevState.isShownDeals
      }));

    }

    render() {
        let {stores} = this.props;
        console.log('in store page',stores);
        return (<div className="mycontainer">
                    <div className="main-content">
                        <div id="filterSection" className="filter-section">
                          <Filter props={this.props} />
                        </div>
                        <div className="card center-content">
                            <div className="content-title">
                                <h2><span className="fa fa-home"/> Stores</h2>
                                <div className="search-box">
                                  <input className="search-input" placeholder="Search by Name"/>
                                  <div className="search-icon">
                                    <img src="../../img/infinia/search.png" />
                                  </div>
                                </div>
                                <div className="for-mobile-view">
                                  <span className="fa fa-filter" onClick={()=> this.showFilter()}/>
                                  <span className="fa fa-bolt" onClick={()=> this.showDeals()}/>
                                </div>
                            </div>

                            <div className="all-stores">
                                <div className="container store-sec">
                                  <div className="row">
                                  {stores.length>0?stores.map(store=>
                                      <div key={store.id} className="col-md-4 col-sm-6">
                                          <Link to={store.registered ?
                                            { pathname: `/store/${store.display_name}`, query: { id: store.id } }
                                            :
                                            { pathname: `/${store.display_name}/profile`, query: { storeId: store.id } }

                                            } >
                                              <div className="thumbnail">
                                                  <div className="ribbon"><span className={store.status == "online"? "fa fa-circle opn": "fa fa-circle clo"}> </span></div>
                                                  <img src={store.image} />
                                                  <div className="caption">
                                                      <h4>{store.display_name}</h4>
                                                      <p>Location: {store.country}, {store.state}</p>
                                                      <p>Min-Order: {store.minimum_buy}{store.currency}</p>
                                                      <p>Category: {store.categorysecond.map((item)=>(<span key={item.id}>{item.category_name}, </span>))}</p>

                                                  </div>
                                              </div>
                                          </Link>
                                    </div>
                                  ):<h2 className="col-md-12">Sorry!!! <br/>There is no Store to show.</h2>}

                                  </div>

                                </div>

                            </div>
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
      stores: state.stores.stores
    }

}


export default connect(mapStateToProps, {getMainCategories, getStoresList})( Search )