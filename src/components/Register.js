import React, { Component } from 'react';
import  { Link } from 'react-router';


export class Register extends Component{
    render(){
        return(<div className="login-container">
            <div className="login-form">
                <div className="form-title">Sign Up</div>
                <div className="line"></div>
                <div className="form-elements">
                    <div className="form-group">
                        <div className="label">Name</div>
                        <input className="form-input" type="text"/>
                    </div>
                    <div className="form-group">
                        <div className="label">Gender</div>
                        <input className="form-input" type="text"/>
                    </div>
                    <div className="form-group">
                        <div className="label">Address</div>
                        <input className="form-input" type="text"/>
                    </div>
                    <div className="form-group">
                        <div className="label">Date of Birth</div>
                        <input className="form-input" type="text"/>
                    </div>
                    <div className="form-group">
                        <div className="label">E-mail</div>
                        <input className="form-input" type="text"/>
                    </div>
                    <div className="form-group">
                        <div className="label">Password</div>
                        <input className="form-input" type="password"/>

                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit-button">Sign Up</button>
                    </div>
                    <div className="social-login">
                        <div className="social-label">or Sign Up using</div>
                        <div className="social-options">
                            <div className="facebook">
                                <img src="../../img/facebook.png" />Facebook</div>
                            <div className="google">
                                <img src="../../img/google.png" />Google</div>
                        </div>
                    </div>
                    <div className="login-switch">
                        <Link className="link" to="/login">Already have an account yet? Login.</Link>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default class RegisterPage extends Component {
    constructor() {
        super();
        this.state = {

        }

    }

    render() {
        return (<div className="container center">
            <Register />
        </div>)
    }
}
