/**
 * Created by bikash on 5/18/17.
 */
import React, { Component } from 'react';

class LoadingScreen extends Component {
  render() {
    return(
      <div className="loading">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    )
  }
}

export default LoadingScreen;