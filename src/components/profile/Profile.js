/**
 * Created by bikash on 2/19/17.
 */
import React, { Component } from 'react';

import Breadcrumb from '../Breadcrumb';
import Header from '../Header';
import Footer from '../Footer';



class Profile extends Component{
  render(){
    return(
      <div className="mycontainer">
        <Header />
        <Breadcrumb/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Profile;