import React, { Component } from 'react';
import  { Link } from 'react-router';

export default class Login extends Component{
    constructor() {
      super();
      this.state = {
        email: '',
        password: '',
        checkbox: 'remember'
      }

    }

    handleSubmit = (e) =>{
      e.preventDefault();

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
                          <input className="form-control" name="email" value={this.state.email} type="email" onChange={this.handleChange}/>
                      </div>
                      <div className="form-group">
                          <label className="control-label">Password</label>
                          <input className="form-control" name="password" value={this.state.password} type="password" onChange={this.handleChange}/>

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
                        <div className="social-login">
                            <div className="social-label">or Login using</div>
                            <div className="social-options">
                                <div className="facebook">
                                    <img src="../../img/facebook.png"/>Facebook
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
                </form>
            </div>
        </div>)
    }
}
