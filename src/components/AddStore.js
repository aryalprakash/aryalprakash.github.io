/**
 * Created by bikash on 3/6/17.
 */
import React, { Component } from 'react';

import TextFieldGroup from './common/TextFieldGroup';
import validateInput from '../validations/signupValidation';

class AddStore extends Component {

  state = {
    initialValue: {
      storeName:'',
      fullName:'',
      email:'',
      phoneNo: ''
    },
    errors: {}
  };

  isValid(){
    const {errors, isValid} = validateInput(this.state);

    if(!isValid){
      console.log("errors", errors);
      this.setState({ errors });
    }

    return isValid;
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    if(this.isValid()){
      this.setState({ isLoading: true });
    }
  };

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render() {
    const { errors } = this.state;

    return(
      <div className="login-container">
        <div className="login-form">
          <div className="form-title">Add Your Store</div>
          <div className="line"></div>

          <form className="form-horizontal" onSubmit={this.handleSubmit}>

            <TextFieldGroup
              field="storeName"
              value={this.state.initialValue.storeName}
              label="Store Name"
              type="text"
              onChange={this.handleChange}
            />
            <TextFieldGroup
              field="fullName"
              value={this.state.initialValue.fullName}
              label="Full Name"
              type="text"
              onChange={this.handleChange}
            />
            <TextFieldGroup
              field="email"
              value={this.state.initialValue.email}
              label="Email"
              type="email"
              onChange={this.handleChange}
            />
            <TextFieldGroup
              field="phoneNo"
              value={this.state.initialValue.phoneNo}
              label="Phone No"
              type="text"
              onChange={this.handleChange}
            />

            <div className="form-group">
              <div className="col-md-12">
                <button type="submit" className="submit-button">Add store</button>
              </div>
            </div>

          </form>

        </div>
      </div>
    )
  }
}

export default AddStore;