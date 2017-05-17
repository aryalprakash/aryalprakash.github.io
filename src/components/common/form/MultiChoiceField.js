import React from 'react';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

const styles = {
  checkbox: {
    // display: 'flex',
    // flexDirection: 'row',
    // alignItems: 'center',
    // padding: 10,
    // fontWeight: 'normal'
  }
};

class MultiChoiceField extends React.Component {
  handleInputChange = (event) => {
    const name = event.target.name;
    this.props.updateField(name);
  };

  render() {
    const { field, choices, values,  label, error, required } = this.props;

    return (
      <div className={classnames("form-group", { 'has-error': !isEmpty(error) })}>
        <label className={classnames("control-label")}>{label}{required ? '*' : ''}</label>
        {
          choices.map((choice, index) => {
            const filteredValues = values.filter((value) => value === choice[0]);
            const checked = filteredValues.length>0 ? 1 : 0;

            return(
              <div className="my-checkbox">
                <label key={index}>
                  <input
                    name={field}
                    value={choice[0]}
                    type="checkbox"
                    onChange={this.handleInputChange}
                    checked={checked}
                  />
                  <span className="ftr"><i className="ftr-icon fa fa-check"/></span>
                  &nbsp;&nbsp;{choice[1]}
                </label>
              </div>
            );
          })
        }
        {!isEmpty(error) && error.map((err, index) => <span key={index} className="help-block">{err}</span>)}
      </div>
    );
  }
}

MultiChoiceField.propTypes = {
  field: React.PropTypes.string.isRequired,
  choices: React.PropTypes.array.isRequired,
  values: React.PropTypes.array,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.array,
  updateField: React.PropTypes.func.isRequired,
  required: React.PropTypes.number
};

MultiChoiceField.defaultProps = {
  error: [],
  choices: [],
  values: [],
  required: 1
};

export default MultiChoiceField;