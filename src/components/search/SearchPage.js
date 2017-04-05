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

          <Deals />

        </div>

      </div>
    )
  }
}

export default SearchPage;