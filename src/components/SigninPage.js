/**
 * Created by bikash on 2/5/17.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Login from './Login';

const logoStyle = {
  height: 60
};
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
class SigninPage extends Component{

  constructor(props){
    super(props);
    this.state= {

    }
  }

  render(){

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
            <Login />
          </div>
        </div>
      </div>

    )
  }
}

export default SigninPage;