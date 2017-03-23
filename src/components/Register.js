import React, { Component } from 'react';
import  { Link } from 'react-router';
import { connect } from 'react-redux';

import SocialLogin from './SocialLogin';
import validateInput from '../validations/signupValidation';

class Register extends Component{

  constructor(props){
    super(props);
    this.state= {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {},
      isLoading: false,
    }
  }

  isValid(){
    const {errors, isValid} = validateInput(this.state);

    if(!isValid){
      this.setState({ errors });
    }

    return isValid;
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    if(this.isValid()){

      this.setState({ isLoading: true });
      this.props.userSignUp(this.state).then(
        (res) => {
          console.log("success response",res);
          this.context.router.push('/login');
        },
        (err) => {
          this.setState({isLoading: false});
        }
      );
    }
  };

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render(){
    const { errors } = this.state;

      return(
        <div className="login-container">
          <div className="login-form">
              <div className="form-title">Sign Up</div>
              <div className="line"></div>
              <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <div className="form-elements">
                  {/*<div className={errors.username ? "form-group has-error": "form-group"}>*/}
                    {/*<label className="col-md-3 control-label">Username</label>*/}
                    {/*<div className="col-md-9">*/}
                      {/*<input className="form-control" name="username" type="text" value={this.state.username} placeholder="Enter Username" onChange={this.handleChange}/>*/}
                    {/*</div>*/}
                    {/*{errors.username && <span className="help-block">{errors.username}</span>}*/}
                  {/*</div>*/}
                  {/*<div className="form-group">*/}
                    {/*<label className="col-md-3 control-label">Gender</label>*/}
                    {/*<div className="col-md-9">*/}
                      {/*<select className="form-control" name="gender" value={this.state.gender} onChange={this.handleChange}>*/}
                        {/*<option value="" disabled="">Choose Your Gender</option>*/}
                        {/*<option>Male</option>*/}
                        {/*<option>Female</option>*/}
                        {/*<option>Other</option>*/}
                      {/*</select>*/}
                    {/*</div>*/}
                  {/*</div>*/}
                  {/*<div className={errors.firstName ? "form-group has-error": "form-group"}>*/}
                    {/*<label className="col-md-3 control-label">First Name</label>*/}
                    {/*<div className="col-md-9">*/}
                      {/*<input className="form-control" name="firstName" type="text" value={this.state.firstName} placeholder="Enter First Name" onChange={this.handleChange}/>*/}
                    {/*</div>*/}
                    {/*{errors.firstName && <span className="help-block">{errors.firstName}</span>}*/}
                  {/*</div>*/}
                  {/*<div className={errors.lastName ? "form-group has-error": "form-group"}>*/}
                    {/*<label className="col-md-3 control-label">Last Name</label>*/}
                    {/*<div className="col-md-9">*/}
                      {/*<input className="form-control" name="lastName" type="text" value={this.state.lastName} placeholder="Enter Last Name" onChange={this.handleChange}/>*/}
                    {/*</div>*/}
                    {/*{errors.lastName && <span className="help-block">{errors.lastName}</span>}*/}
                  {/*</div>*/}
                  <div className={errors.email ? "form-group has-error": "form-group"}>
                    <label className="col-md-3 control-label">Email</label>
                    <div className="col-md-9">
                      <input className="form-control" name="email" type="email" value={this.state.email} placeholder="Enter Email" onChange={this.handleChange}/>
                    </div>
                    {errors.email && <span className="help-block">{errors.email}</span>}
                  </div>
                  <div className={errors.password ? "form-group has-error": "form-group"}>
                    <label className="col-md-3 control-label">Password</label>
                    <div className="col-md-9">
                      <input className="form-control" name="password" type="password" value={this.state.password} placeholder="Enter Password" onChange={this.handleChange}/>
                    </div>
                    {errors.password && <span className="help-block">{errors.password}</span>}
                  </div>
                  <div className={errors.confirmPassword ? "form-group has-error": "form-group"}>
                    <label className="col-md-3 control-label">Confirm Password</label>
                    <div className="col-md-9">
                      <input className="form-control" name="confirmPassword" type="password" value={this.state.confirmPassword} placeholder="Renter Password" onChange={this.handleChange}/>
                    </div>
                    {errors.confirmPassword && <span className="help-block">{errors.confirmPassword}</span>}
                  </div>
                  <div className="form-group">
                    <div className="col-md-12">
                      <button disabled={this.state.isLoading} type="submit" className="submit-button">Sign Up</button>
                    </div>
                  </div>

                </div>
              </form>
              <SocialLogin />

              <div className="login-switch">
                Already have an account yet? <Link className="link" to="/login">Login.</Link>
              </div>

          </div>
      </div>
      )
  }
}

Register.propTypes = {
  userSignUp: React.PropTypes.func.isRequired
};

Register.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Register;
