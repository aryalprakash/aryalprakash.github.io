/**
 * Created by bikash on 2/22/17.
 */
import React, {Component} from 'react';

const data = [
  {
    orderID: 102242434,
    orderDate: "10-22-2016",
    display_name: "Mutton",
    price: 100,
    currency: "AED",
    quantity: 2,
    unit: "kg",
  }
];

class CompletedPurchase extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-md-6" style={{paddingLeft: 5, marginTop: 15}}>
          <div className="item-purchased">
            <h5>Order ID: 102242434</h5>
            <h5>Order Date: 10-22-2016</h5>
            <div className="line"></div>

            <div className="row">
              <div className="col-md-10" style={{padding: 5}}>
                <div className="col-md-4" style={{paddingRight: 5}}>
                  <img className="img-thumbnail" src="../../img/infinia/cart1.png" />
                </div>
                <div className="col-md-8">
                  <h4 style={{marginTop: 5, marginBottom: 5}}><b> Mutton Lamb</b></h4>
                  <h5 style={{marginTop: 0}}> 100 AED per 2 kg</h5>
                  <h5>Quantity: 1</h5>
                </div>
              </div>

              <div className="col-md-10">
                <h4>Seller Information</h4>
                <div className="line"></div>
                <h5>Name: Souq</h5>
                <h5>Contact: </h5>
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default CompletedPurchase;