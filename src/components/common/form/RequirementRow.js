import React from 'react';



class Row extends React.Component {
  onInputChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    let tableFieldValue = {
      [name]: value
    }
    this.props.updateTableRow(this.props.index, tableFieldValue);
  }

  deleteRow=()=>{
    let deleteIndex = this.props.index;
    this.props.deleteTableRow(deleteIndex);
  }

  render(){
    let {index, value} = this.props;
    index += 1;
    value=value || {};
    const required = 1;
    return(
      <tr>
        <td>
          {index}
        </td>
        <td>
          <textarea
            name="item_description"
            className="form-control"
            onChange={this.onInputChange}
            required={required}
            rows="2"
            cols="60"
            value={value.item_description}
          >
          </textarea>
        </td>
        <td>
          <input
            className="form-control"
            onChange={this.onInputChange}
            required={required}
            name="uom"
            value={value.uom}
          />
        </td>
        <td>
          <input
            className="form-control"
            onChange={this.onInputChange}
            required={required}
            name="quantity"
            value={value.quantity}
          />
        </td>
        <td>
          <textarea
            className="form-control"
            onChange={this.onInputChange}
            required={required}
            name="remark"
            rows="2"
            cols="60"
            value={value.remark}
          />
        </td>
        <button
          type="button"
          onClick={this.deleteRow}>x</button>
      </tr>
    );
  }
}

Row.propTypes = {
  index: React.PropTypes.number.isRequired,
  value: React.PropTypes.object.isRequired,
  updateTableRow: React.PropTypes.func.isRequired,
  deleteTableRow: React.PropTypes.func.isRequired
}

export default Row;
