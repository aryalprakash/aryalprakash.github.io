import React from 'react';
import HorizontalNavBar from '../HorizontalNavBar';

class PendingPurchase extends React.Component {

  render() {
    return (
      <div className="row">
        <HorizontalNavBar active="pending"/>
        {this.props.children}
      </div>
    );
  }

}

export default PendingPurchase;
