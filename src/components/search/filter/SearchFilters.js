/**
 * Created by bikash on 4/5/17.
 */
import React, { Component } from 'react';

import Slider from './InputFilter';
import CheckboxFilter from './CheckboxFilter';

class Filters extends Component {

  render() {
    return(
      <div>
        <div className="card sidebar-title"><span className="fa fa-filter"/> Filter</div>

        <Slider isShow='flex' header="Select Distance Radius:"/>
        <CheckboxFilter header="Rating:"/>

      </div>
    )
  }
}

export default Filters;