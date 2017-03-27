/**
 * Created by bikash on 3/27/17.
 */
import React, { Component } from 'react';
import {Link} from 'react-router';

import AddStore from './AddStore';

const div={
  paddingTop: 10,
  paddingBottom: 10,
  background: "#f8f8f8"
};
const spanStyle1 = {
  color: 'blue',
};
const spanStyle2 = {
  color: 'green',
};

class AddStorePage extends Component {
  render() {
    document.title = "Infinia Store | Add Store";
    return(
      <div>
        <div className=" center" style={div}>
          <Link to="/" className="link">
            <div className="ilogo">
              <img src="./img/infinia/logo.png" />
              <div className="ilogo-text"><span style={spanStyle1}>Infinia</span><span style={spanStyle2}>Stores</span></div>
            </div>
          </Link>
        </div>
        <div className="center" style={{background: "#f8f8f8"}}>
          <div>
            <AddStore />
          </div>
        </div>
      </div>
    )
  }
}

export default AddStorePage;