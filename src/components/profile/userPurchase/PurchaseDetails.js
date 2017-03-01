import React from 'react';

import RatePurchase from './RatePurchase';
import LeaveFeedBack from './LeaveFeedBack';
import ReturnItem from './ReturnItem';
import TrackPendingPurchase from './TrackPendingPurchase';

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
          id: 1,
          display_name: "Beef",
          imgPath: "../..../img/sub-category/Beef.png",
          price: 100,
          currency: "AED",
          quantity: 2,
          unit: "kg",
        },
        {
          id: 2,
          display_name: "Chicken",
          imgPath: "../../../img/sub-category/Chicken.jpg",
          price: 10,
          currency: "AED",
          quantity: 2,
          unit: "kg",
        },
        {
          id: 3,
          display_name: "Veal",
          imgPath: "../../../img/sub-category/Veal.jpg",
          price: 110,
          currency: "AED",
          quantity: 2,
          unit: "kg",
        },
        {
          id: 4,
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

const checkboxStyle = {
  marginTop: 10,
};

class PurchaseDetails extends React.Component {

  state = {
    display: "block",
    text: "Show less Details"
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
       <div className="col-md-12" style={{paddingLeft: 5}}>
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
                  <div className="col-md-3" style={{paddingRight: 5}}>
                    <img className="img-thumbnail" src={require("../../../../img/sub-category/Chicken.jpg")} />
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
                <h4 style={{marginBottom: 5}}><b>Subtotal:</b> {item.order.subTotal} {item.order.currency}</h4>
              </div>

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


              {
                this.props.status === "completed" ?
                  <div className="col-md-12">
                    <div className="line"></div>

                    <div className="row">
                      <RatePurchase/>
                      <LeaveFeedBack/>
                      <ReturnItem data={item.order.item} trackingNo={item.tracking_number}/>

                    </div>
                  </div>

                  :
                  <TrackPendingPurchase/>

              }

            </div>
          </div>
        )
        }

      </div>
    );
  }

}



export default PurchaseDetails;
