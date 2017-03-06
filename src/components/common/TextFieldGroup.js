/**
 * Created by bikash on 3/6/17.
 */
import React from 'react';
import isEmpty from 'lodash/isEmpty';

const TextFieldGroup = ({ field, value, required, label, error, type, onChange }) => {
  return (
    <div className={!isEmpty(error) ? "form-group has-error": "form-group"}>
      <label className="col-md-3 control-label">{label}</label>
      <div className="col-md-9">
        <input
          onChange={onChange}
          value={value}
          type={type}
          name={field}
          className="form-control"
          placeholder={`Enter ${label}`}
          required={required}
        />
      </div>
      {!isEmpty(error) && error.map((err, index) => <span key={index} className="help-block">{err}</span>)}
    </div>
  );
};

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.array,
  required: React.PropTypes.number,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

TextFieldGroup.defaultProps = {
  type: 'text',
  required: 1,
  error: []
};

export default TextFieldGroup;