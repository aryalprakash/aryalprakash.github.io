import React, { Component } from 'react';
import {connect} from 'react-redux';
import  { Link } from 'react-router';
import FacebookLogin from 'react-facebook-login';

import { loginWithEmail } from '../actions/authActions';

class Login extends Component{
    constructor() {
      super();
      this.state = {
        email: '',
        password: '',
        checkbox: 'remember'
      }

    }
    responseFacebook = (response) => {
      if(response.status == "not_authorized"){
        console.log("Please login to the app");
      }
      if(response.status == "connected"){
        console.log(response);
      }
    };

    handleSubmit = (e) =>{
      e.preventDefault();

      this.props.loginWithEmail(this.state).then(
        (success) => {
          console.log('success', success);
        },
        (err) => {
          console.log('error', err);
        }
      );

    };

    handleChange = (e) =>{
      this.setState({
        [e.target.name]: e.target.value
      })
    };

    render(){
        return(<div className="login-container">
            <div className="login-form">
              <div className="form-title">Login</div>
              <div className="line"></div>

              <form onSubmit={this.handleSubmit}>
                  <div className="form-elements">
                    <div className="form-group">
                        <label className="control-label">E-mail</label>
                        <input className="form-control" name="email" value={this.state.email} type="email" placeholder="Your Email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label className="control-label">Password</label>
                        <input className="form-control" name="password" value={this.state.password} type="password" placeholder="Your Password" onChange={this.handleChange}/>

                    </div>
                    <div className="form-options">
                      <div className="remember checkbox">
                        <label>
                          <input name="checkbox" value={this.state.checkbox} type="checkbox"/> Remember Me
                        </label>
                      </div>
                      <div className="forget">
                        <div className="control-label">Forgot password</div>
                      </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit-button">Login</button>
                    </div>

                  </div>
              </form>
              <div className="social-login">
                <div className="social-label">or Login using</div>
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
                    <img src="../../img/google.png"/>Google
                  </div>
                </div>
              </div>
              <div className="login-switch">
                <Link className="link" to="/register">Haven't created an account yet? Register.</Link>
              </div>
            </div>
        </div>)
    }
}

Login.propTypes = {
  loginWithEmail: React.PropTypes.func.isRequired
}

export default connect(null, { loginWithEmail })(Login);
