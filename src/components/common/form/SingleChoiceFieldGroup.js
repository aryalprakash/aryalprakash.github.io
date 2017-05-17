import React from 'react';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';


export default class SingleChoiceFieldForTable extends React.Component{
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.props.updateField(name, value);
  };

  render(){
    const {label, value, error, choices, required, field} = this.props;

    return (
      <div className={classnames({ 'has-error': !isEmpty(error) })}>
        {
          !isEmpty(label)?
          <label className={classnames("control-label")}>{label}{required ? '*' : ''}</label>:
          <div></div>
        }
        <select
          required={required}
          onChange={this.handleInputChange}
          name={field}
          value={value}
          className={"form-control"}
        >
          <option>Choose one</option>
          {choices.map((choice, index)=><option key={index} value={choice[0]}>{choice[1]}</option>)}
        </select>
        {!isEmpty(error) && error.map((err, index) => <span key={index} className="help-block">{err}</span>)}
      </div>
    );
  }
}

SingleChoiceFieldForTable.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  error: React.PropTypes.array,
  required: React.PropTypes.number,
  updateField: React.PropTypes.func.isRequired,
  choices: React.PropTypes.array.isRequired
};

SingleChoiceFieldForTable.defaultProps = {
  required: 1,
  error: []
};
