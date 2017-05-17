/**
 * Created by bikram on 1/30/17.
 */

import React from 'react';
import isEmpty from 'lodash/isEmpty';
import classnames from 'classnames';

class BoolField extends React.Component {
  handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;

    this.props.updateField(name, value);
  };

  render() {
    const {field, value, label, id, required, error} = this.props;
    return (
      <div className="my-checkbox">
        <label>
          <input
            id={id}
            name={field}
            type="checkbox"
            checked={value}
            value="checked"
            onChange={this.handleInputChange}
            style={{marginTop: 4}}
            required={required}
          />
          <span className="ftr"><i className="ftr-icon fa fa-check"/></span>
          {label}
        </label>
        {!isEmpty(error) && error.map((err, index) => <span key={index} className="help-block">{err}</span>)}
      </div>

    );
  }
}

BoolField.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.bool.isRequired,
  label: React.PropTypes.string.isRequired,
  id: React.PropTypes.string,
  error: React.PropTypes.array,
  required: React.PropTypes.number,
  updateField: React.PropTypes.func.isRequired
};

BoolField.defaultProps = {
  id: '',
  required: 1,
  error: []
};

export default BoolField;