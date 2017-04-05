/**
 * Created by bikash on 4/4/17.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';

class OfferSearchResults extends Component {
  render() {
    let {searchOfferResult} = this.props;

    return(
      <div className="">
        <h4>Showing {searchOfferResult.results.slice(0,this.props.searchLimit).length} of {searchOfferResult.count} results for Offers</h4>
        <div className="offer-sec">
          <div className="row">
            {
              searchOfferResult.results.map(offer =>
                offer.catalog.slice(0,1).map(catalog =>
                  <div key={catalog.id} className="col-md-3 col-sm-6">
                    <Link to={{ pathname: `/${offer.store.display_name}/profile/promo`, query: { storeId: offer.store.id } }}>
                      <div className="thumbnail">
                        <img src={'http://192.168.10.7:8000'+catalog.thumbnail}/>
                        <div className="caption">
                          <h4>{(offer.offer_name).toUpperCase()}</h4>
                          <p>Store: {offer.store.display_name}</p>
                          <p>Ends in: {offer.end_date}</p>
                        </div>
                      </div>
                    </Link>

                  </div>
                )

              )
            }

          </div>

        </div>

      </div>
    )
  }
}

OfferSearchResults.propTypes = {
  searchOfferResult: React.PropTypes.object.isRequired
};

OfferSearchResults.defaultProps = {
  searchLimit: 3
};

export default OfferSearchResults;