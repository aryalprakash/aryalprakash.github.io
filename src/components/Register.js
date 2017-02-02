import React, { Component } from 'react';
import  { Link } from 'react-router';


export default class Register extends Component{

  constructor(props){
    super(props);
    this.state= {
      name: '',
      gender: '',
      address: '',
      dob: '',
      email: '',
      password: '',
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
              <div className="form-title">Sign Up</div>
              <div className="line"></div>
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-elements">
                  <div className="form-group">
                    <label className="col-md-3 control-label">Name</label>
                    <div className="col-md-9">
                      <input className="form-control" name="name" type="text" value={this.state.name}  onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 control-label">Gender</label>
                    <div className="col-md-9">
                      <input className="form-control" name="gender" type="text" value={this.state.gender} onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 control-label">Address</label>
                    <div className="col-md-9">
                      <input className="form-control" name="address" type="text" value={this.state.address} onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 control-label">Birth Date</label>
                    <div className="col-md-9">
                      <input className="form-control" name="dob" type="text" value={this.state.dob} onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 control-label">Email</label>
                    <div className="col-md-9">
                      <input className="form-control" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-md-3 control-label">Password</label>
                    <div className="col-md-9">
                      <input className="form-control" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <button type="submit" className="submit-button">Sign Up</button>
                    </div>
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
              </form>

          </div>
      </div>)
  }
}

