import React from 'react';
import {connect} from "react-redux";

import Form from "../components/common/form/Form";
import {patchUser} from "../actions/userActions_";

class ProfileForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      fields: [
        {
          type: 'text',
          name: 'username',
          label: 'Username',
          value: this.props.user.username ? this.props.user.username : '',
          placeholder: '',
          required: 1
        },
        {
          type: 'text',
          name: 'first_name',
          label: 'First Name',
          value: this.props.user.first_name ? this.props.user.first_name : '',
          placeholder: '',
          required: 1
        },
        {
          type: 'text',
          name: 'last_name',
          label: 'Last Name',
          value: this.props.user.last_name ? this.props.user.last_name : '',
          placeholder: '',
          required: 1
        },
        {
          type: 'text',
          name: 'mobile_number',
          label: 'Mobile Number',
          value: this.props.user.mobile_number ? this.props.user.mobile_number : '',
          placeholder: '',
          required: 1
        }
      ],
      actionLabel: 'Save',
      requestAction: this.props.patchUser,
      successMessage: 'User has been added successfully.',
      redirectURL: '',
      update: this.props.update
    };
  }

  render() {
    return <Form
      name='user'
      update={this.props.update}
      id={this.props.user.id}
      fields={this.state.fields}
      actionLabel={this.state.actionLabel}
      requestAction={this.state.requestAction}
      redirectURL={this.state.redirectURL}
      closeModal={this.props.closeModal}
    />
  }
}

ProfileForm.propTypes = {
  patchUser: React.PropTypes.func.isRequired,
  update: React.PropTypes.bool.isRequired,
  closeModal: React.PropTypes.func
};

ProfileForm.defaultProps = {
  update: false
};

export default connect(null, { patchUser })(ProfileForm);