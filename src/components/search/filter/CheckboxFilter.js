/**
 * Created by bikash on 4/5/17.
 */
import React, { Component } from 'react';

class CheckboxFilter extends Component {

  state = {
    isShow: this.props.isShow,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDisplay = (e) => {
    this.state.isShow == 'flex' ?
      this.setState({isShow: 'none'})
      :
      this.setState({isShow: 'flex'})

  };

  render() {
    return(
      <div className="card">
        <div className="filter-heading" onClick={this.handleDisplay}>
          <span className="filter-header">{this.props.header}</span>
          <span className={this.state.isShow == 'none' ? "fa fa-angle-down": "fa fa-angle-up"}/>
        </div>
        <div className="line" style={{display: this.state.isShow}}></div>

        <div className="filter-content" style={{display: this.state.isShow, flexDirection: 'column'}} >
          <div className="checkbox">
            <label>
              <input type="checkbox" value=""/>
                <span className="ftr"><i className="ftr-icon fa fa-check"/></span>
                Option one is this
            </label>
          </div>

          <div className="checkbox">
            <label>
              <input type="checkbox" value=""/>
                <span className="ftr"><i className="ftr-icon fa fa-check"/></span>
                Option one is that
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" name="o1" value=""/>
                <span className="ftr"><i className="ftr-icon fa fa-circle"/></span>
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
};

CheckboxFilter.defaultProps = {
  isShow: 'flex',
};

export default CheckboxFilter;