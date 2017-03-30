/**
 * Created by bikash on 3/30/17.
 */
import React, { Component } from 'react';

const autoComplete = {
  location: [
    'Kathmandu, Nepal',
    'Bhaktapur, Nepal',
    'Lalitpur, Nepal',
    'Sharjah, United Arab Emirates',
    'Dubai, United Arab Emirates',
    'M.A.D.Gallery Dubai, United Arab Emirates',
    'Burj Khalifa , United Arab Emirates',
    'Nikki Beach Dubai, United Arab Emirates',
    'The Dubai Mall Fountains, United Arab Emirates',
  ]
};

class AutoCompleteSearch extends Component {

  state ={
    isFocus: false,
    isAutoCompleteFocus: false,
    searchInput: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateSearchField(value) {
    this.setState({searchInput: value, isAutoCompleteFocus: false});

    this.props.updateSearchField(value);
  }

  showSuggestions(choice) {
    var field = document.getElementById('main_search').style.width;
    console.log("input field width", field);
    this.setState({isFocus: choice});
  }

  handleMouseEvent(choice) {
    this.setState({isAutoCompleteFocus: choice})
  }

  render() {

    let show = this.state.isFocus || this.state.isAutoCompleteFocus ;

    return(
      <div className="form-group">
        <input style={this.props.style}
               width={this.props.width}
               type="text"
               id="main_search"
               className="form-control"
               name="searchInput"
               onChange={this.handleChange}
               onFocus={() => this.showSuggestions(true)}
               onBlur={() => this.showSuggestions(false)}
               value={this.state.searchInput}
               placeholder="Search by Store, Brand, Product, Category..."
        />
        {
          show &&
          <div className="auto-complete">
            <ul className="list-group"
                onMouseOver={() => this.handleMouseEvent(true)}
                onMouseLeave={() => this.handleMouseEvent(false)}
            >
              {
                autoComplete.location.map((value,index)=>
                  <li key={index} className="list-group-item"
                      onClick={() => this.updateSearchField(value)}
                  >
                    {value}
                  </li>
                )
              }
            </ul>
          </div>
        }
      </div>
    )
  }
}
AutoCompleteSearch.propTypes = {
  updateSearchField: React.PropTypes.func.isRequired
};

AutoCompleteSearch.defaultProps = {
  style: {},
  width: 'auto',
};

export default AutoCompleteSearch;