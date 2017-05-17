import React from 'react';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

const styles = {
  checkbox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  }
};

const MultiChoiceFieldGroup = ({ field, choices, values,  label, error, onChange, required }) => {
 return (
   <div className={classnames("form-group", "checkbox", "col-md-4", { 'has-error': !isEmpty(error) })}>
     <h5>{label}{required ? '*' : ''}</h5>
     {
        choices.map((choice, index) => {
          const filteredValues = values.filter((value) => value === choice[0]);
          const checked = filteredValues.length>0 ? 1 : 0;

          return <label style={styles.checkbox} key={index}>
            <input  
              className="filterCheckbox"
              name={field}
              value={choice[0]}
              type="checkbox"
              onChange={onChange}
              checked={checked}
            /> {choice[1]}
          </label>
        })
     }
     {!isEmpty(error) && error.map((err, index) => <span key={index} className="help-block">{err}</span>)}
   </div>
 );
};

MultiChoiceFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  choices: React.PropTypes.array.isRequired,
  values: React.PropTypes.array,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.array,
  onChange: React.PropTypes.func.isRequired,
  required: React.PropTypes.number
};

MultiChoiceFieldGroup.defaultProps = {
  error: [],
  choices: [],
  values: [],
  required: 0
};

export default MultiChoiceFieldGroup;
