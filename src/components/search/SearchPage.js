/**
 * Created by bikash on 4/2/17.
 */
import React, { Component } from 'react';

import Deals from '../Deals';


class SearchPage extends Component {

  render() {
    return(
      <div className="mycontainer">
        <div className="main-content">

          {this.props.children}

          <div id="dealSection" className="deals-section">
            <Deals />
          </div>

        </div>

      </div>
    )
  }
}

export default SearchPage;