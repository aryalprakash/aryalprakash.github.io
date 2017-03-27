/**
 * Created by bikash on 3/23/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authenticate extends Component {

    componentWillReceiveProps(nextProps){

      if(this.props.loggedIn !== nextProps.loggedIn){
        console.log("requireAuth props",nextProps.loggedIn);

        if(nextProps.loggedIn.status_code !== 200){
          this.context.router.push('/login');
        }

      }

    }

    render(){
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    loggedIn: React.PropTypes.object.isRequired
  };

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  };


  function mapStateToProps(state) {
    return {
      loggedIn: state.auth.loggedIn
    }
  }

  return connect(mapStateToProps)(Authenticate);
}