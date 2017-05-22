import React from 'react';
import {connect} from "react-redux";

import ImageUpdater from "../components/common/ImageUpdater";
import {patchUser} from "../actions/userActions_";
import {defaultUserPreviewImage} from "../constants/constants";

class ProfileImageForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: 'image',
      value: this.props.user.image ? this.props.user.image : defaultUserPreviewImage,
      requestAction: this.props.patchUser
    };
  }

  render() {
    return <ImageUpdater
      name={this.state.name}
      value={this.state.value}
      id={this.props.user.id}
      requestAction={this.state.requestAction}
    />
  }
}

ProfileImageForm.propTypes = {
  patchUser: React.PropTypes.func.isRequired,
};

export default connect(null, { patchUser })(ProfileImageForm);