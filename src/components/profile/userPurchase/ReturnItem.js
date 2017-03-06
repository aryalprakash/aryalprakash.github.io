/**
 * Created by bikash on 3/1/17.
 */
import React, { Component } from 'react';

const reasons = [
  "Received Wrong Item in terms of Item, Color, Size or in any other specs",
  "Defect in Items such as scratch, torn, broken, not operating or functioning or working",
  "Received less quantity than ordered",
  "Received missing accessories or parts",
  "Received Item not as described, different from specified or showcased"

];

class ReturnItem extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

  };

  render() {
    return(
      <div className="col-md-12">
        <br/>
        <div className="line"></div>
        <h4>Online Return</h4>
        <p>Select the items you want to return</p>
        <form className="col-md-8 form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label> Select Item</label>
            <select className="form-control">
              <option>Choose Item for Return</option>
              {
                this.props.data.map((data,index) =>
                  <option key={index} value={data.id}> {data.display_name}</option>
                )
              }
            </select>

          </div>
          <div className="form-group">
            <label>Select Reason for Return</label>
            <select className="form-control">
              <option>Select Reason</option>
              {
                reasons.map((reason, index) =>
                  <option key={index}>{reason}</option>
                )
              }
              <option>Others</option>
            </select>
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea className="form-control" rows="4" placeholder="Please write remarks so that we can process your request effectively"/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-default btn-sm"> Request For Return</button>
          </div>

        </form>

      </div>

    )
  }
}

export default ReturnItem;