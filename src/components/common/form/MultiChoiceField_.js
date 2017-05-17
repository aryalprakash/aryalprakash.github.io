import React from 'react';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

class MultiChoiceField extends React.Component {
  handleInputChange = (event) => {
    const name = event.target.name;
    const options = event.target.options;
    let value = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    console.log('multichoice field value: ', name, value);
    this.props.updateField(name, value, null, "multiChoice");
  };

  render() {
    const {field, choices, value, label, error, required} = this.props;
    let fieldSize =0;
    // if(choices.length>5){
    //   fieldSize = 5;
    // }else {
      fieldSize = choices.length
    // }

    return (
      <div className={classnames("form-group", {'has-error': !isEmpty(error)})}>
        <label className={classnames("control-label")}>{label}{required ? '*' : ''}</label><br/>
        <kbd>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</kbd>
        <select
          multiple
          required={required}
          onChange={this.handleInputChange}
          name={field}
          value={value}
          className={"form-control"}
          size={fieldSize}
        >
          {choices.map((choice, index) => <option key={index} value={choice[0]}>{choice[1]}</option>)}
        </select>
        {!isEmpty(error) && error.map((err, index) => <span key={index} className="help-block">{err}</span>)}
      </div>
    );
  }
}

MultiChoiceField.propTypes = {
  field: React.PropTypes.string.isRequired,
  choices: React.PropTypes.array.isRequired,
  value: React.PropTypes.array.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.array,
  updateField: React.PropTypes.func.isRequired,
  required: React.PropTypes.number
};

MultiChoiceField.defaultProps = {
  error: [],
  choices: [],
  required: 1
};

export default MultiChoiceField;
