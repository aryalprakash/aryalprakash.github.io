/**
 * Created by bikram on 1/30/17.
 */

import React from 'react';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

class TextField extends React.Component {
  handleInputChange=(event) => {
    const value=event.target.value;
    const name=event.target.name;
    this.props.updateField(name, value, null, this.props.type);
  };

  render() {
    const {field, type, value, label, id, required, error, labelClasses, fieldClasses, disabled}=this.props;
    return(
      <div className={classnames("form-group", { 'has-error': !isEmpty(error) })}>
        <label className={classnames("col-md-3 col-sm-3 control-label", {labelClasses})}>{label}{required ? '*' : ''}</label>
        <div className="col-md-9 col-sm-9">
          <input
            onChange={this.handleInputChange}
            value={value}
            type={type}
            name={field}
            className={classnames("form-control", {fieldClasses})}
            required={required}
            id={id}
            disabled={disabled}
          />
        </div>

        {!isEmpty(error) && error.map((err, index) => <span key={index} className="help-block">{err}</span>)}
      </div>
    );
  }
}

TextField.propTypes={
  field: React.PropTypes.string.isRequired,
  fieldClasses: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  labelClasses: React.PropTypes.string,
  id: React.PropTypes.string,
  error: React.PropTypes.array,
  required: React.PropTypes.number,
  type: React.PropTypes.string.isRequired,
  updateField: React.PropTypes.func.isRequired
};

TextField.defaultProps={
  id: '',
  labelClasses: '',
  fieldClasses: '',
  type: 'text',
  required: 1,
  error: []
};

export default TextField;
