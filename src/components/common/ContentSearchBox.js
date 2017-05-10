/**
 * Created by bikash on 5/10/17.
 */
import React, { Component } from 'react';

class ContentSearchBox extends Component {
  render() {
    return(
      <div className="content-search-bar">
        <input className="search-input" placeholder="Search by Name"/>
        <div className="search-icon">
          <span className="glyphicon glyphicon-search" style={{color: "#afafaf"}}/>
        </div>
      </div>
    )
  }
}

export default ContentSearchBox;