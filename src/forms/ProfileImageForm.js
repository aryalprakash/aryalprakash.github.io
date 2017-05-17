import React from 'react';
import {connect} from "react-redux";

import Form from "../components/common/form/Form";
import {patchUser} from "../actions/userActions_";
import {defaultUserPreviewImage} from "../constants/constants";

class ProfileImageForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      fields: [
        {
          type: 'image',
          name: 'image',
          label: 'User Profile Image',
          value: this.props.user.image ? this.props.user.image : defaultUserPreviewImage,
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

ProfileImageForm.propTypes = {
  patchUser: React.PropTypes.func.isRequired,
  update: React.PropTypes.bool.isRequired,
  closeModal: React.PropTypes.func
};

ProfileImageForm.defaultProps = {
  update: false
};

export default connect(null, { patchUser })(ProfileImageForm);