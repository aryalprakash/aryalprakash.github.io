/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';
import HorizontalNavBar from './HorizontalNavBar';
import PurchasedItems from './PurchasedItems';

class CompletedPurchase extends Component{

  render(){
    return(
      <div className="row">
        <HorizontalNavBar active="completed"/>
        {this.props.children}
      </div>
    );
  }
}

export default CompletedPurchase;
