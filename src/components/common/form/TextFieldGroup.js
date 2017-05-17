/**
 * Created by bikram on 1/30/17.
 */

import React from 'react';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

const styles={
  label:{
    marginRight : 20
  }
}

export default class TextFieldGroup extends React.Component{
  handleInputChange=(index)=>(event)=>{
    const value=event.target.value;
    const name=event.target.name;
    console.log(event.target.name, event.target.value, index);
    this.props.updateField(name, value, null, index);
  };

  render(){
    const { field, value, required, label, labelClasses, error, type, index }=this.props;
    return (
      <div className={classnames({'has-error': !isEmpty(error) })}>
        {
          !isEmpty(label)?
          <label style={styles.label} className={classnames("control-label", )}>{label}{required ? '*' : ''}</label>:
          <div></div>
        }
        <input
          onChange={this.handleInputChange(index)}
          value={value}
          type={type}
          name={field}
          required={required}
          className={"form-control"}
        />
        {!isEmpty(error) && error.map((err, index) => <span key={index} className="help-block">{err}</span>)}
      </div>
    );
  }
}

TextFieldGroup.propTypes={
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  error: React.PropTypes.array,
  required: React.PropTypes.number,
  type: React.PropTypes.string.isRequired,
  updateField: React.PropTypes.func.isRequired
};

TextFieldGroup.defaultProps={
  type: 'text',
  required: 1,
  error: []
};
