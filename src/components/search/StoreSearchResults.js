/**
 * Created by bikash on 4/4/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';


class StoreSearchResults extends Component {
  render() {
    let {searchResult} = this.props;
    return(
      <div className="">
        <h4>Showing {searchResult.results.slice(0, this.props.searchLimit).length} of {searchResult.count} stores near Sarjhah Dubai</h4>
        <div className="store-sec" style={{paddingTop: 10}}>
          <div className="row">
            {searchResult.results.slice(0, this.props.searchLimit).map(store=>
              <div key={store.id} className="col-md-3 col-sm-6">
                <Link to={store.registered ?
                { pathname: `/store/${store.display_name}`, query: { id: store.id } }
                  :
                { pathname: `/${store.display_name}/profile`, query: { storeId: store.id } }

                } >
                  <div className="thumbnail">
                    <img src="../../img/store.png"/>
                    <div className="caption">
                      <h4>{store.display_name}</h4>
                      <p>Location: {store.country}, {store.city}</p>
                      <p>Min-Order: {store.minimum_buy}{store.currency}</p>
                      {/*<p>Category: {store.categorysecond.map((item)=>(<span key={item.id}>{item.category}, </span>))}</p>*/}

                    </div>
                  </div>
                </Link>
              </div>
            )}

          </div>

        </div>
      </div>
    )
  }
}

StoreSearchResults.propTypes = {
  searchResult: React.PropTypes.object.isRequired
};

StoreSearchResults.defaultProps = {
  searchLimit: 3
};

export default StoreSearchResults;