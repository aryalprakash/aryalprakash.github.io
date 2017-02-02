/**
 * Created by bikash on 1/29/17.
 */
import React, {Component} from 'react';
import _ from 'lodash';
import  { Link } from 'react-router';
import { connect } from 'react-redux';
import Header from './Header'
import Deals from './Deals'

import { getCartItems, removeFromCart, setCartItem} from '../actions/infinia';


const title ={

  paddingTop: 10,
  paddingBottom: 10,
  marginBottom: 10,
  borderBottom: "1px solid #ddd"
};

const cartHeaderStyle ={
  paddingLeft: 10,
  paddingBottom: 5,
  marginBottom: 0,
  borderBottom: "1px solid #ddd",
};

const cartFooterStyle ={
  color: "#666",
  margin: "15px 0px",
  borderTop: "1px solid #ddd"
};

const remove ={
  padding: 5,
  marginTop: 12,
  color: 'red',
  cursor: 'pointer',
};

class CartPage extends Component{
  constructor(props){
    super(props);
    this.state ={

    }

  }

  componentDidMount(){
    this.props.getCartItems();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    this.setItem(parseInt(e.target.name),parseInt(e.target.value));
  };

  setItem(id, count ){
    this.props.setCartItem(id, count).then(
      (res)=> {
        console.log("response after setting the cart count:", res)
      },
      (err)=>{
        alert(err);
      }

    );
  }

  removeItem (id){
    this.props.removeFromCart(id).then(
      (res)=> {
        console.log("response after removing from cart:", res)
      },
      (err)=>{
        alert(err);
      }

    );
  };

  render(){

    let {cart} = this.props;

    return(
      <div className="mycontainer">
        <Header cart={this.state.cart} />
        <div className="bread-crumb">

        </div>
        <div className="main-content">

          <div className="card center-content">
            <h2 style={cartHeaderStyle}>Your Cart</h2>


            {cart &&
            cart.cart_info.length > 0 ?
              <div className="col-md-12" style={{fontSize: '1.15em'}}>
                <div className="row" style={title}>
                  <div className="col-md-4" style={{paddingLeft: 25}}>ITEM</div>
                  <div className="col-md-1" style={{}}>QTY</div>
                  <div className="col-md-4">DELIVERY DETAILS</div>
                  <div className="col-md-3">PRICE</div>
                </div>
                {cart.cart_info && cart.cart_info.map((data, index)=>
                  <div key={index} className="cart-content">
                    {data.stocked_items.map((item, index)=>
                      <div key={index} className="row">
                        <div className="col-md-4" style={{padding: 5}}>
                          <div className="col-sm-4" style={{paddingRight: 5}}>
                            <img className="img-thumbnail" src="../../img/infinia/cart1.png" />
                          </div>
                          <div className="col-sm-8" style={{padding: 10, overflow: "hidden"}}>
                            <h4 style={{marginTop: 0, marginBottom: 5}}>{item.itemline.stocked_item.item.display_name} </h4>
                            <h5 style={{marginTop: 0}}> {item.itemline.stocked_item.price} {item.itemline.stocked_item.currency} per {item.itemline.stocked_item.item.quantity} {item.itemline.stocked_item.item.unit}</h5>
                          </div>

                        </div>
                        <div className="col-md-1" style={{padding: 5}}>
                          <select className="form-control"
                                  name={item.itemline.stocked_item.id}
                                  style={{marginTop: 5,height: 30, width: 50}}
                                  onChange={this.handleChange}
                                  value={this.state[item.itemline.stocked_item.id]? this.state[item.itemline.stocked_item.id] :item.itemline.quantity}
                          >
                            {_.times(item.itemline.stocked_item.available, i =>
                              <option key={i}>{i+1}</option>
                            )}
                          </select>
                        </div>
                        <div className="col-md-4"><p style={{padding: 5, marginTop: 10}}>Free</p></div>
                        <div className="col-md-3">
                          <span className="col-sm-10" style={{padding: 5, marginTop: 10}}>
                            {item.net_price} {item.itemline.stocked_item.currency}
                            <br/>

                            {item.discount_amount != 0 && <span>Original Price: <span style={{textDecoration: "line-through"}}> {item.actual_price}</span></span> }
                          </span>
                          <span className="col-sm-2 fa fa-trash-o" style={remove} onClick={()=>this.removeItem(item.itemline.stocked_item.id)}></span>
                        </div>
                      </div>
                    )}

                  </div>
                )}
                <div className="col-md-12" style={cartFooterStyle}>
                  <h4>Grand Total: {cart.grand_total_without_vat}</h4>
                  <button className="btn btn-success">Proceed to Checkout</button>
                </div>

              </div>
              :
              <p style={{marginLeft: 10}}>Your Cart is empty</p>

            }


        </div>
          <Deals/>
       </div>
      </div>
    );
  }
}

const mapStateToProps = ({cart}) => ({cart});

export default connect(mapStateToProps, { getCartItems, removeFromCart, setCartItem })(CartPage);