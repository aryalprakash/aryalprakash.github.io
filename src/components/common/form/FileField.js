/**
 * Created by bikram on 1/30/17.
 */

import React from 'react';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

class FileField extends React.Component {
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const file = event.target.files[0];
    this.props.updateField(name, value, file, "file", this.props.index);
  };

  clearField = (event) => {
    event.preventDefault();
    this.props.clearField(this.props.field, 'file');
  };

  render() {
    const {field, label, id, required, error, value, initialValue} = this.props;
    return (
      <div className={classnames("form-group", { 'has-error': !isEmpty(error) })}>
        <label className={classnames("control-label")}>{label}{required ? '*' : ''}</label>
        {!!initialValue && <p>Current file: {initialValue}</p>}
        <input
          onChange={this.handleInputChange}
          type="file"
          name={field}
          required={required}
          id={id}
          className="form-control"
        />
      <span><button type="button" onClick={this.clearField}>Remove file</button></span>
        {!isEmpty(error) && error.map((err, index) => <span key={index} className="help-block">{err}</span>)}
      </div>
    );
  }
}

FileField.propTypes = {
  field: React.PropTypes.string.isRequired,
  fieldClasses: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  initialValue: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  id: React.PropTypes.string,
  error: React.PropTypes.array,
  required: React.PropTypes.number,
  updateField: React.PropTypes.func.isRequired,
  clearField: React.PropTypes.func.isRequired
};

FileField.defaultProps = {
  id: '',
  value: '',
  initialValue: '',
  required: 1,
  error: [],
};

export default FileField;
