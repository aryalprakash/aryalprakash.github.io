/**
 * Created by bikash on 4/5/17.
 */
import React, { Component } from 'react';

class CheckboxFilter extends Component {

  state = {
    isShow: this.props.isShow,
    searchInput: ''
  };

  componentDidMount() {
      let temp = {};

      if(this.props.isCategory && this.props.urlLocation.query.categorysecond__category__in){
        let categories= this.props.urlLocation.query.categorysecond__category__in;

        if(categories instanceof Array){
          categories.map(item =>
            temp[item] = true
          );
        }else{
          temp[categories] = true
        }
      }
      if(this.props.isRating && this.props.urlLocation.query.rating__in){
        let categories= this.props.urlLocation.query.rating__in;

        if(categories instanceof Array){
          categories.map(item =>
            temp[item] = true
          );
        }else{
          temp[categories] = true
        }
      }

      this.setState(temp);
  }

  handleCheckbox = (e) => {
    if(e.target.checked){
      this.setState({
        [e.target.value]: true
      });
      this.props.isCategory &&
        this.props.updatePage(this.props.urlLocation.search+`&categorysecond__category__in=${e.target.value}`);

      this.props.isRating &&
        this.props.updatePage(this.props.urlLocation.search+`&rating__in=${e.target.value}`);

    }
    else{
      this.setState({
        [e.target.value]: false
      });

      this.props.isCategory &&
        this.props.updatePage((this.props.urlLocation.search).replace(`&categorysecond__category__in=${e.target.value}`, ''));

      this.props.isRating &&
        this.props.updatePage((this.props.urlLocation.search).replace(`&rating__in=${e.target.value}`, ''));
    }


  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleDisplay = (e) => {
    this.state.isShow == 'flex' ?
      this.setState({isShow: 'none'})
      :
      this.setState({isShow: 'flex'})

  };

  renderRatingStar(count) {
    let ratingStar = [];
    for(let i =4; i>= count; i--){
      ratingStar.push(
        <i key={i} className="fa fa-star-o"/>
      )
    }
    return ratingStar;
  }

  renderRatingList (count) {
    let ratingList = [];
    for(let i=1; i<=count; i++){
      ratingList.push(
          <i key={i} className="fa fa-star"/>
      )
    }
    return ratingList;
  };

  render() {
    let filteredList = this.props.list.filter(
      (cat) => {
        return cat[1].indexOf(this.state.searchInput) !== -1;
      }
    );

    return(
      <div className="card">
        <div className="filter-heading" onClick={this.handleDisplay}>
          <span className="filter-header">{this.props.header}</span>
          <span className={this.state.isShow == 'none' ? "fa fa-angle-down": "fa fa-angle-up"}/>
        </div>
        <div className="line" style={{display: this.state.isShow}}></div>

        {
          this.props.showSearchBar &&
          <div className="search-field" style={{display: this.state.isShow}}>
            <span className="fa fa-search"/>
            <input type="text" name="searchInput" placeholder="Search Category" value={this.state.searchInput} onChange={this.handleChange} style={{height: 30}}/>
          </div>
        }

        <div className="filter-content" style={{display: this.state.isShow, flexDirection: 'column'}} >

          {
            filteredList.map((item,index)=>
              <div key={index} className="checkbox">
                <label>
                  <input type="checkbox" value={item[0]} onChange={this.handleCheckbox} checked={this.state[item[0]]}/>
                  <span className="ftr"><i className="ftr-icon fa fa-check"/></span>
                  {
                    this.props.isRating &&
                      <span className="rtr">
                        {this.renderRatingList(item[0])}
                        {this.renderRatingStar(item[0])}
                      </span>
                  }
                  {(item[1]).toUpperCase()}
                </label>
              </div>
            )
          }

          <div className="checkbox">
            <label>
              <input type="checkbox" name="o1" value="opt" onClick={this.handleCheckbox}/>
                <span className="ftr"><i className="ftr-icon fa fa-check"/></span>
                Option one is this
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="o1" value=""/>
                <span className="ftr"><i className="ftr-icon fa fa-circle"/></span>
                Option one is that
            </label>
          </div>

        </div>

      </div>
    )
  }
}

CheckboxFilter.propTypes = {
  header: React.PropTypes.string.isRequired,
  urlLocation: React.PropTypes.object.isRequired,
};

CheckboxFilter.contextTypes = {
  router: React.PropTypes.object.isRequired
};

CheckboxFilter.defaultProps = {
  isShow: 'flex',
  showSearchBar: false,
  isRating: false
};

export default CheckboxFilter;