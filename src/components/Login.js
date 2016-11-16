import React, { Component } from 'react';
import  { Link } from 'react-router';

export class Login extends Component{
    render(){
        return(<div className="login-container">
            <div className="login-form">
                <div className="form-title">Login</div>
                <div className="line"></div>
                <div className="form-elements">
                    <div className="form-group">
                        <div className="label">E-mail</div>
                        <input className="form-input" type="text"/>
                    </div>
                    <div className="form-group">
                        <div className="label">Password</div>
                        <input className="form-input" type="password"/>
                        <div className="form-options">
                            <div className = "remember">
                                <input type="checkbox" />
                            Remember Me
                            </div>
                            <div className= "forget">
                            Forgot password
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit-button">Login</button>
                    </div>
                    <div className="social-login">
                        <div className="social-label">or Login using</div>
                        <div className="social-options">
                            <div className="facebook">
                                <img src="../../img/facebook.png" />Facebook</div>
                            <div className="google">
                                <img src="../../img/google.png" />Google</div>
                        </div>
                    </div>
                    <div className="login-switch">
                        <Link className="link" to="/register">Haven't created an account yet? Register.</Link>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default class LoginPage extends Component {
    constructor() {
        super();
        this.state = {

        }

    }

    render() {
        return (<div className="mycontainer center">
            <Login />
        </div>)
    }
}
