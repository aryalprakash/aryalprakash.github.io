/**
 * Created by bikash on 3/2/17.
 */
import React, { Component } from 'react';

class EditProfile extends Component {
  render() {
    return(
      <div className="update-profile">
        <form className="form-horizontal">
          <div className="form-group">
            <label className="col-md-4 control-label">First Name</label>
            <div className="col-md-8">
              <input type="text" className="form-control" placeholder="Enter First Name" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-4 control-label">Last Name</label>
            <div className="col-md-8">
              <input type="text" className="form-control" placeholder="Enter Last Name" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-4 control-label">Email</label>
            <div className="col-md-8">
              <input type="email" className="form-control" placeholder="Enter New Email"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-4 control-label">Phone No.</label>
            <div className="col-md-8">
              <input type="text" className="form-control" placeholder="Enter Your Phone Number" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-md-4 control-label">Alternative No.</label>
            <div className="col-md-8">
              <input type="text" className="form-control" placeholder="Enter Your Alternative Phone Number" />
            </div>
          </div>

          <div className="form-group">
            <div className="col-md-4 col-md-offset-9" style={{marginTop: 10}}>
              <button className="btn btn-sm btn-default"> Save Profile</button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

export default EditProfile;