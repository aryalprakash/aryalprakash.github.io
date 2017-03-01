import React from 'react';
import { Link } from 'react-router';


const userOrderData = [
  {
    tracking_number: 123421,
    order_date: "10-02-2017",
    store_name: "blah blah",
    status: "Enroute",
  },
  {
    tracking_number: 123441,
    order_date: "10-02-2017",
    store_name: "dubai blah",
    status: "Item dispatched",
  },
];

class PurchasedItems extends React.Component {
  state = {
    path:  this.props.status,
    data: []
  };

  filter = () => {

  };

 render() {
   console.log("path",this.props.status);
   return(
     <div className="col-md-11 item-purchased">
       <h4 className="order-header">Order ID: 13214141 </h4>
       <div className="line"></div>
       <div className="row invoice-list">
         {
           userOrderData.map((item,index)=>
             <div key={index} className="col-md-3">
               <Link to={`/user/:user/profile/purchase/${this.state.path}/${item.tracking_number}`}>
                 <div className="thumbnail">
                   <img src={require("../../../../img/store.png")} alt="" />
                   <div className="caption">
                     <h5>Store: {item.store_name}</h5>
                     <h5>Tracking No: {item.tracking_number}</h5>
                     <h5>Order Date: {item.order_date}</h5>
                     {this.state.path == "pending" && <h5>Status: {item.status}</h5>}
                   </div>
                 </div>
               </Link>
             </div>
           )
         }
       </div>
     </div>
   );
 }
}

export default PurchasedItems;
