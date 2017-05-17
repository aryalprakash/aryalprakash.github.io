/**
 * Created by bikram on 1/30/17.
 */

import React from 'react';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

class TextArea extends React.Component {
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.props.updateField(name, value);
  };

  render() {
    const { field, value, required, label, error, rows } = this.props;
    return (
      <div className={classnames("form-group", { 'has-error': !isEmpty(error) })}>
        <label className="control-label">{label}{required ? '*' : ''}</label><br/>
        <kbd>{`Use <p>PARAGRAPH CONTENT</p> for paragraphs, <b>TEXT</b> to highlight text, <br/> to break line`}</kbd>
        <textarea
          onChange={this.handleInputChange}
          value={value}
          name={field}
          className="form-control"
          required={required}
          rows={rows}
        />
        {!isEmpty(error) && error.map((err, index) => <span key={index} className="help-block">{err}</span>)}
      </div>
    );
  }
}

TextArea.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.array,
  required: React.PropTypes.number,
  rows: React.PropTypes.number,
  updateField: React.PropTypes.func.isRequired
};

TextArea.defaultProps = {
  required: 1,
  error: [],
  rows: 5
};

export default TextArea;