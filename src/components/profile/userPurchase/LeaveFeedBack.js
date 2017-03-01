/**
 * Created by bikash on 2/28/17.
 */
import React, { Component } from 'react';

class LeaveFeedBack extends Component {
  render() {
    return(
      <div className="col-md-10 leave-feedback">
        <br/>
        <h4>Leave your Feedback</h4>
        <div className="form-group">
          <textarea rows="4" className="form-control" maxLength="400" placeholder="Place your feedback here"/>
        </div>
        <button className="btn btn-sm btn-default" style={{marginLeft: 5}}>Send Your Feedback</button>
      </div>
    )
  }
}

export default LeaveFeedBack;