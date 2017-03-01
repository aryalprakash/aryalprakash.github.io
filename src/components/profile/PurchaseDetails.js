import React from 'react';

import RatePurchase from './RatePurchase';
import LeaveFeedBack from './LeaveFeedBack';

const data = [
  {
    "status": "completed",
    "rating": {},
    "order_placed": "string",
    "courier": "string",
    "date_modified": "string",
    "deleted": true,
    "tracking_number": "123131",
    "courier_url": "string",
    "shipped_by": "string",
    "buyer": "string",
    "shipped_to": {},
    "order": {
      orderID: 102242434,
      orderDate: "10-22-2016",
      item: [
        {
          display_name: "Beef",
          imgPath: "../..../img/sub-category/Beef.png",
          price: 100,
          currency: "AED",
          quantity: 2,
          unit: "kg",
        },
        {
          display_name: "Chicken",
          imgPath: "../../../img/sub-category/Chicken.jpg",
          price: 10,
          currency: "AED",
          quantity: 2,
          unit: "kg",
        },
        {
          display_name: "Veal",
          imgPath: "../../../img/sub-category/Veal.jpg",
          price: 110,
          currency: "AED",
          quantity: 2,
          unit: "kg",
        },
        {
          display_name: "Fish",
          imgPath: "../../../img/sub-category/Fish.jpg",
          price: 150,
          currency: "AED",
          quantity: 2,
          unit: "kg",
        },
      ],
      subTotal: 380,
      currency: "AED",

    }

  }
];



class PurchaseDetails extends React.Component {

  state = {
    display: "none",
    text: "Show more Details"
  };

  showMore(){
    if(this.state.display == "none")
      this.setState({display: "block", text: "Show less Details"});
    else
      this.setState({display: "none", text: "Show more Details"});

  }

  render() {
    console.log("path",this.props.status);

    return (
       <div className="col-md-10" style={{paddingLeft: 5}}>
        {
          data.map((item,index) =>
          <div key={index} className="purchase-details" style={{padding: 10}}>
            <span><b>Order ID:</b> {item.order.orderID}</span>
            <span><b>Tracking No:</b> {item.tracking_number}</span>
            <span><b>Order Date:</b> {item.order.orderDate}</span>
            <div className="line"></div>

            <div className="row">
              {
                item.order.item.map((data,index) =>
                <div key={index} className="col-md-6" style={{padding: 5}}>
                  <div className="col-md-4" style={{paddingRight: 5}}>
                    <img className="img-thumbnail" src={require("../../../img/sub-category/Chicken.jpg")} />
                  </div>
                  <div className="col-md-8">
                    <h4 style={{marginTop: 5, marginBottom: 5, fontSize: "16px"}}><b> {data.display_name}</b></h4>
                    <h5 style={{marginTop: 0}}> {data.price} {data.currency} per {data.quantity} {data.unit}</h5>
                    <h5>Quantity: 1</h5>
                  </div>
                </div>
                )
              }
              <div className="col-md-12">
                <div className="line"></div>
                <h4><b>Subtotal:</b> {item.order.subTotal} {item.order.currency}</h4>
              </div>

              {
                this.props.status === "completed" ?
                  <div className="col-md-12">
                    <div className="line"></div>
                    <RatePurchase/>
                    <LeaveFeedBack/>
                  </div>
                  :
                  <div className="col-md-12">
                    <div className="line"></div>
                      <h4>Track your product</h4>
                  </div>
              }


              <div className="col-md-12">
                <div className="line"></div>

                <div className="row order-information" style={{display: this.state.display}}>
                  <div className="col-md-4">
                    <h4>Seller Information</h4>
                    <p>Name: Souq</p>
                    <p>Contact: </p>
                  </div>
                  <div className="col-md-4">
                    <h4>Delivery Information</h4>
                    <p>Shipping Method: InfiniaExpress</p>
                    <p>Delivery Charge: 5 AED</p>
                  </div>
                  <div className="col-md-4">
                    <h4>Payment Information</h4>
                    <p>Cash on delivery</p>
                    <p>Refund: </p>
                  </div>
                </div>


                <div className="show-more">
                  <span onClick={() => this.showMore()}> {this.state.text} >></span>
                </div>

              </div>

            </div>
          </div>
        )
        }

      </div>
    );
  }

}



export default PurchaseDetails;
