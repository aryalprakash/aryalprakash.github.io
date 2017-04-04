/**
 * Created by bikash on 3/30/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import _ from 'lodash';

// const suggestions = {
//   "status_code": 200,
//   "results": {
//     "offers": [
//       {
//         "offer_name": "bumper upahar",
//         "id": 11,
//         "store_id": 3,
//         "store_display_name": "Sherpa Mall"
//       },
//       {
//         "offer_name": "new year offer",
//         "id": 12,
//         "store_id": 4,
//         "store_display_name": "This That Mall"
//       },
//       {
//         "offer_name": "dubai offer",
//         "id": 13,
//         "store_id": 4,
//         "store_display_name": "This That Mall"
//       }
//     ],
//     "stores": [
//       {
//         "display_name": "Test Name",
//         "id": 1
//       },
//       {
//         "display_name": "Sherpa Mall",
//         "id": 3
//       },
//       {
//         "display_name": "This That Mall",
//         "id": 4
//       },
//       {
//         "display_name": "temp temp Mall",
//         "id": 5
//       },
//       {
//         "display_name": "New temp Mall",
//         "id": 6
//       },
//       {
//         "display_name": "Yolo Mall",
//         "id": 2
//       }
//     ]
//   },
//   "success": "Suggestions"
// };

const styles = {
  span: {
    fontSize: 12,
    color: "#7e7e7e"
  }
};

class AutoCompleteSearch extends Component {

  state ={
    isFocus: false,
    isAutoCompleteFocus: false,
    searchInput: '',
    width: '300px'
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.getSuggestions(e.target.value);

  };

  updateSearchField(value) {
    this.setState({searchInput: value, isAutoCompleteFocus: false});

    this.props.updateSearchField(value);
  }

  showSuggestions(choice) {
    var width = document.getElementById('main_search').offsetWidth;
    // console.log("input field width", width);
    this.setState({width, isFocus: choice});
  }

  handleMouseEvent(choice) {
    this.setState({isAutoCompleteFocus: choice})
  }

  render() {

    let {suggestions} = this.props;
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
               autoComplete="off"
               placeholder="Search by Store, Brand, Product, Category..."
        />
        {
          show &&
          <div className="auto-complete" style={{width: this.state.width}}>
            {
              !_.isEmpty(suggestions) ?
                <ul className="list-group"
                    onMouseOver={() => this.handleMouseEvent(true)}
                    onMouseLeave={() => this.handleMouseEvent(false)}
                >
                  {
                    suggestions.results.stores.slice(0,3).map((value,index)=>
                      <Link key={value.id} to={{pathname: `/${value.display_name}/profile`, query: { storeId: value.id }}}>
                        <li className="list-group-item"
                            onClick={() => this.updateSearchField(value.display_name)}
                        >
                          {value.display_name}
                        </li>
                      </Link>
                    )
                  }
                  {
                    suggestions.results.offers.slice(0,3).map((value,index)=>
                      <li key={value.id} className="list-group-item"
                          onClick={() => this.updateSearchField(value.offer_name)}
                      >
                        {value.offer_name} <span style={styles.span}> by {value.store_display_name}</span>
                      </li>
                    )
                  }
                </ul>
                :
                <ul className="list-group"
                    onMouseOver={() => this.handleMouseEvent(true)}
                    onMouseLeave={() => this.handleMouseEvent(false)}
                >
                  <Link to="/search/Supermarket"><li className="list-group-item">Supermarket</li></Link>
                  <Link to="/search/Electronics"><li className="list-group-item">Electronics</li></Link>
                  <Link to="/search/Fashion"><li className="list-group-item">Fashion</li></Link>
                  <Link to="/search/Kids Zone"><li className="list-group-item">Kids Zone</li></Link>
                </ul>

            }

          </div>
        }
      </div>
    )
  }
}
AutoCompleteSearch.propTypes = {
  updateSearchField: React.PropTypes.func.isRequired,
  getSuggestions: React.PropTypes.func.isRequired
};

AutoCompleteSearch.defaultProps = {
  style: {},
  width: 'auto',
};

function mapStateToProps(state) {
  return{
    suggestions: state.search.suggestions
  }
}

export default connect(mapStateToProps)(AutoCompleteSearch);