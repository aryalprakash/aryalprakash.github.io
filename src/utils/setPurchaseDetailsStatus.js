/**
 * Created by bikash on 2/27/17.
 */
import React, { Component } from "react";


export default function (ComposedComponent) {
  class SetStatus extends Component {
    render() {
      const splitPath = this.props.location.pathname.split('/');
      let pathStatus = splitPath[splitPath.length-1];
      if(pathStatus !== "completed" && pathStatus !== "pending"){
        pathStatus = splitPath[splitPath.length-2];
      }
      return <ComposedComponent {...this.props} status={pathStatus}/>
    }
  }

  return SetStatus;
}

