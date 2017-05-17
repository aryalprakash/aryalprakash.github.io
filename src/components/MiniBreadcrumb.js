/**
 * Created by bikash on 3/16/17.
 */
import React, { Component } from 'react';

class MiniBreadcrumb extends Component {
  render() {
    let {routes} = this.props;
    console.log("routes", routes.routes);
    return(
      <div className="mini-breadcrumb">
        {
          routes.routes.map((item, index) =>
            routes.params[item.name] ? routes.params[item.name] + " > " : item.name + " > "
          )
        }
      </div>
    )
  }
}

export default MiniBreadcrumb;