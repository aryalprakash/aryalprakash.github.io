/**
 * Created by bikash on 3/2/17.
 */
import React, { Component } from 'react';
import _ from 'lodash';

import TextFieldGroup from '../common/TextFieldGroup';


class EditProfile extends Component {

  state = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    alternativePhoneNo: ''
  };

  componentDidMount() {
    if(!_.isEmpty(this.props.userData)){
      let userData = this.props.userData;
      this.setState({
        username: userData.username,
        firstName: userData.first_name,
        lastName: userData.last_name,
        email: userData.email
      });
    }
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

  };

  render() {

    // console.log("user data in edit profile", this.props.userData);

    return(
      <div className="update-profile">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <TextFieldGroup
            field="username"
            value={this.state.username}
            label="Username"
            type="text"
            onChange={this.handleChange}
          />
          <TextFieldGroup
            field="firstName"
            value={this.state.firstName}
            label="First Name"
            type="text"
            onChange={this.handleChange}
          />
          <TextFieldGroup
            field="lastName"
            value={this.state.lastName}
            label="Last Name"
            type="text"
            onChange={this.handleChange}
          />
          {/*<TextFieldGroup*/}
            {/*field="email"*/}
            {/*value={this.state.email}*/}
            {/*label="Email"*/}
            {/*type="email"*/}
            {/*onChange={this.handleChange}*/}
          {/*/>*/}
          <TextFieldGroup
            field="phoneNo"
            value={this.state.phoneNo}
            label="Phone No."
            type="text"
            onChange={this.handleChange}
          />
          <TextFieldGroup
            field="alternativePhoneNo"
            value={this.state.alternativePhoneNo}
            label="Alternative No."
            type="text"
            onChange={this.handleChange}
          />

          <div className="form-group">
            <div className="col-md-3 col-md-offset-9" >
              <button className="btn btn-sm btn-default" style={{marginTop: 10, width: '100%'}}> Save Profile</button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

EditProfile.propTypes = {
  userData: React.PropTypes.object.isRequired
};

export default EditProfile;