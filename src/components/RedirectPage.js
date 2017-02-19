/**
 * Created by bikash on 2/4/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router'

import Header from './Header';
import Footer from './Footer';

const style= {
  marginTop: 110,
  backgroundColor: "#fff",
  boxShadow: "0 0 9px #ccc",
  webkitBoxShadow: "0 0 9px #ccc",
  mozBoxShadow: "0 0 9px #ccc",
};

class RedirectPage extends Component{
  render(){
    return(
      <div className="mycontainer">
        < Header/>

        <div className="main">
          <div className="container">
            <div className="jumbotron"  style={style}>
              <h2>Thank you for joining us!!<br/>Let's confirm your email.</h2>
              <h2></h2>
              <br/>
              <p style={{marginBottom: 5}}>Email sent to blahblah@blah.com</p>
              <h5>Click the link in the email to confirm your email address and validate the account</h5>
              <br/>
              <Link to="">
                <button className="btn btn-primary">Send Another Email</button>
              </Link>

              <br/>
              <br/>

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

export default RedirectPage;