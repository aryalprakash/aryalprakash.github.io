/**
 * Created by bikash on 3/20/17.
 */
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';

import { loginWithFacebook } from '../actions/authActions';


const logo ={
  marginRight: 5,
  fontSize: '1.3em'
};
class SocialLogin extends Component {

  responseFacebook = (response) => {
    if(response.status == "not_authorized") {
      console.log("Please login to the app");
    }
    if(response.status == "connected") {

    }
    console.log(response);
    this.props.loginWithFacebook(response.accessToken).then(
      (success) => {
        console.log('success', success);
        this.context.router.push('/');
      },
      (err) => {
        console.log('err', err)
      }
    );

  };

  render() {
    return(
      <div className="social-login">
        <div className="social-label">or Sign Up using</div>
        <div className="social-options">
          <div className="">
            <FacebookLogin
              appId="204262970008693"
              autoLoad={true}
              fields="name,email,picture"
              textButton=" Facebook"
              callback={this.responseFacebook}
              cssClass="my-facebook-button-class facebook "
              icon="fa-facebook"
            />
          </div>
          <div className="google">
            <span className="fa fa-google" style={logo}/> Google
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { loginWithFacebook })(SocialLogin);