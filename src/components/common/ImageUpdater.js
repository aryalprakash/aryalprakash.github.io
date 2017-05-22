/**
 * Created by bikash on 5/18/17.
 */
import React, { Component } from 'react';
import { connect } from "react-redux";
import classnames from 'classnames';

import ImageField from './form/ImageField';
import {defaultPreviewImage} from "../../constants/constants";
import {getCSRFToken} from "../../actions/authActions";
import {addFlashMessage} from "../../actions/flashMessages";

const styles = {
  form: {
    backgroundColor: 'white'
  },
  formFields: {
    width: '100%',
  }
};

class ImageUpdater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CSRFToken: undefined,
      isLoading: false,
      name: this.props.name,
      value: {
        [this.props.name]: '', [`${this.props.name}PreviewImage`]: this.props.value,
      },
      requestAction: this.props.requestAction,
    };
  }
  componentWillMount() {
    this.props.getCSRFToken().then(
      (success) => {
        this.setState({CSRFToken: success.csrf})
      },
      (error) => {
        console.log('Error: ', error)
      }
    );
  }

  formData = (file) => {
    let formData = new FormData();

    formData.append('csrfmiddlewaretoken', this.state.CSRFToken);
    formData.append(this.state.name, file);

    console.log("-----FORM DATA -----");
    console.log(`${this.state.name}: `, file);
    console.log("--------------------");

    return formData;
  };

  updateField = (name, value, file=null) => {
    let reader = new FileReader();

    this.setState({isLoading: true});

    this.props.requestAction(this.props.id, this.formData(file), this.state.CSRFToken).then(
      (success) => {
        console.log('Success on updating image: ', success);
        this.setState({
          isLoading: false,
          value: {...this.state.value, [`${name}PreviewImage`]: success[this.state.name], [name]: value}
        });
        this.props.addFlashMessage({
          type: 'success',
          text: 'The image has been successfully updated.'
        });
        // flash Message: The image has been successfully updated.
      },
      (error) => {
        console.log('Error on updating image: ', error);
        this.setState({
          isLoading: false
        });
        // flash Message: Error
      }
    );
  };

  render() {
    const { name, value, isLoading } = this.state;
    console.log('form current value: ', this.state.value);
    return(
      <form
        id="imageForm"
        encType="multipart/form-data"
        className={classnames('form-horizontal custom-form')}
        style={styles.form}
      >

        <div style={styles.formFields} className="form-fields">
          <ImageField
            field={name}
            value={value[name]}
            previewImage={value[`${name}PreviewImage`]}
            updateField={this.updateField}
          />
          {
            isLoading &&
            <div id="myProgress" className="load-bar">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          }
        </div>

      </form>
    )
  }
}

ImageUpdater.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  requestAction: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
};

ImageUpdater.defaultProps = {
  value: defaultPreviewImage
};

export default connect(null, { getCSRFToken, addFlashMessage })(ImageUpdater);