/**
 * Created by bikash on 4/5/17.
 */
import React, { Component } from 'react';

class InputFilter extends Component {
  state = {
    sliderValue: 5,
    isShow: this.props.isShow
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

        <div className="filter-content" style={{display: this.state.isShow}}>
          <input name="sliderValue" type="range" min={1} max={12} value={this.state.sliderValue} onChange={this.handleChange}/>
          <span>{this.state.sliderValue} KM</span>
        </div>
      </div>
    )
  }
}

InputFilter.propTypes = {
  header: React.PropTypes.string.isRequired,
};

InputFilter.defaultProps = {
  isShow: 'flex',
};

export default InputFilter;