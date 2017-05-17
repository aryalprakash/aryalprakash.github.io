/**
 * Created by bikash on 2/5/17.
 */

import React, { Component } from 'react';
import { Link } from 'react-router'

const style= {
  marginTop: 110,
  backgroundColor: "#fff",
  boxShadow: "0 0 9px #ccc",
  webkitBoxShadow: "0 0 9px #ccc",
  mozBoxShadow: "0 0 9px #ccc",
};

class VerifiedPage extends Component{
  render(){
    return(
      <div className="mycontainer">

        <div className="main">
          <div className="container">
            <div className="jumbotron"  style={style}>
              <div className=" alert-success" style={{backgroundColor: "#fff"}}>
                <h2>Congratulations <br/>Your account is verified !!! <span className="fa fa-check-circle"></span> </h2>
              </div>
              <br/>
              <Link to="">
                <button className="btn btn-success">Let's Shop Now</button>
              </Link>

              <br/><br/>
              <h5>If something is not working please <Link to="">contact us</Link></h5>
              <br/>
              <h5>Kind Regards,</h5>

              <h5>The InfiniaStores Team</h5>
            </div>
          </div>

        </div>
        {/*<Footer/>*/}
      </div>
    );

  }
}

export default VerifiedPage;