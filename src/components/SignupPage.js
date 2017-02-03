/**
 * Created by bikash on 2/3/17.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';

import Register from './Register.js';
import {userSignUp} from '../actions/infinia';

class SignupPage extends Component{

  constructor(props){
    super(props);
    this.state= {

    }
  }

  render(){
    const { errors } = this.state;

    return(
      <div className="mycontainer center">
        <Register userSignUp={this.props.userSignUp} />
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignUp: React.PropTypes.func.isRequired
}

export default connect(null, {userSignUp})(SignupPage);