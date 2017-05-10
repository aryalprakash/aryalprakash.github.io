/**
 * Created by bikash on 5/9/17.
 */
import React, { Component } from 'react';

class SearchBox extends Component {

  state = {

  };

  showSearchBar = () => {
    let box = document.getElementById('searchBox');
    box.style.display = 'flex';

  };

  hideSearchBar = () => {
    let box = document.getElementById('searchBox');
    box.style.display = '';
  };

  render() {
    let {class_name, placeholder} = this.props;

    return(
      <div className="search-bar">
        <form>
          <div id="searchBox" className={class_name ? class_name +" search-box": "search-box"}>
            <input className="search-input form-control" placeholder={placeholder}/>
            <span className="close search-close" onClick={this.hideSearchBar}>x</span>
            <div className="search-icon">
              <span className="glyphicon glyphicon-search"/>
            </div>

          </div>
        </form>
        <span className="fa fa-search imenu-list" onClick={this.showSearchBar}/>
      </div>
    )
  }
}

export default SearchBox;