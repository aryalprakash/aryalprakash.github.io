import React, { Component } from 'react';
import  { Link } from 'react-router';
import Dialog from 'rc-dialog';
import { connect } from 'react-redux';
import _ from 'lodash';


import Register from './Register.js'
import Login from './Login.js'
import 'rc-dialog/assets/index.css';

import { getCartItems, removeFromCart, setCartItem, userSignUp } from '../actions/infinia';

let style={
    zIndex: '111111'
};

const cartHeaderStyle ={
  fontWeight: 600,
  color: "#666",
  paddingLeft: 10,
  paddingBottom: 5,
  borderBottom: "1px solid #ddd"
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

// let cart = {
//      "code": 200,
//      "cart_info": [
//          {
//              "stocked_items": [
//                  {
//                      "itemline": {
//                          "stocked_item": {
//                              "id": 1,
//                              "item": {
//                                  "id": 20,
//                                  "display_name": "1+1 and Dolby Earphone",
//                                  "unit": "units",
//                                  "quantity": 1,
//                                  "search_fields": "{\"type1\": [\"supermarket\", \"supermarket\"], \"type2\": [\"6-supermarket\", \"1-supermarket\"], \"type3\": [\"msc\", \"1-grocery\"], \"cat1_name\": [\"Supermarket\", \"Supermarket\"], \"cat2_name\": [\"electronics\", \"grocery\"], \"cat3_name\": [\"msc\", \"Dairy, Frozen and Eggs\"]}"
//                              },
//                              "type": "combo",
//                              "sku": "4045",
//                              "available": 5,
//                              "total": 10,
//                              "minimum_quantity": 1,
//                              "maximum_quantity": 2,
//                              "price": 100,
//                              "currency": "AED",
//                              "description": "ok",
//                              "image": null,
//                              "extra": "{\"discount\": 0.9019607843137255, \"old_total\": 1020.0, \"old_prices\": [{\"sku\": \"123123\", \"name\": \"EarPhone\", \"price\": 20.0}, {\"sku\": \"129\", \"name\": \"1+1\", \"price\": 1000.0}]}",
//                              "store": "Test Name (UAE)"
//                          },
//                          "quantity": 5,
//                          "is_deliverable": false
//                      },
//                      "deal": null,
//                      "actual_price": 500,
//                      "discount_amount": 0,
//                      "net_price": 500
//                  },
//                  {
//                      "itemline": {
//                          "stocked_item": {
//                              "id": 10,
//                              "item": {
//                                  "id": 15,
//                                  "display_name": "1+1",
//                                  "unit": "units",
//                                  "quantity": 1,
//                                  "search_fields": "{\"type1\": \"supermarket\", \"type2\": \"1-supermarket\", \"type3\": \"1-grocery\", \"cat1_name\": \"Supermarket\", \"cat2_name\": \"grocery\", \"cat3_name\": \"Dairy, Frozen and Eggs\"}",
//                                  "brand": "1+",
//                                  "country": "UAE"
//                              },
//                              "type": "single",
//                              "sku": "129",
//                              "available": 10,
//                              "total": 50,
//                              "minimum_quantity": 0,
//                              "maximum_quantity": null,
//                              "price": 1000,
//                              "currency": "AED",
//                              "description": "None",
//                              "image": "photos/Lamb_6dcVH3e.jpg",
//                              "extra": "\"\\\"\\\"\"",
//                              "store": "Test Name (UAE)"
//                          },
//                          "quantity": 7,
//                          "is_deliverable": false
//                      },
//                      "deal": null,
//                      "actual_price": 7000,
//                      "discount_amount": 0,
//                      "net_price": 7000
//                  },
//                  {
//                      "itemline": {
//                          "stocked_item": {
//                              "id": 3,
//                              "item": {
//                                  "id": 3,
//                                  "display_name": "Mutton",
//                                  "unit": "kg",
//                                  "quantity": 1.5,
//                                  "search_fields": "{\"type1\": \"supermarket\", \"type2\": \"1-supermarket\", \"type3\": \"1-grocery\", \"cat1_name\": \"Supermarket\", \"cat2_name\": \"grocery\", \"cat3_name\": \"Dairy, Frozen and Eggs\"}",
//                                  "brand": "Generic",
//                                  "country": "UAE"
//                              },
//                              "type": "single",
//                              "sku": "125",
//                              "available": 200,
//                              "total": 1500,
//                              "minimum_quantity": 0,
//                              "maximum_quantity": 1,
//                              "price": 1,
//                              "currency": "AED",
//                              "description": "None",
//                              "image": "photos/Lamb_6dcVH3e.jpg",
//                              "extra": "\"\\\"\\\"\"",
//                              "store": "Test Name (UAE)"
//                          },
//                          "quantity": 11,
//                          "is_deliverable": false
//                      },
//                      "deal": null,
//                      "actual_price": 11,
//                      "discount_amount": 0,
//                      "net_price": 11
//                  },
//                  {
//                      "itemline": {
//                          "stocked_item": {
//                              "id": 7,
//                              "item": {
//                                  "id": 3,
//                                  "display_name": "Mutton",
//                                  "unit": "kg",
//                                  "quantity": 1.5,
//                                  "search_fields": "{\"type1\": \"supermarket\", \"type2\": \"1-supermarket\", \"type3\": \"1-grocery\", \"cat1_name\": \"Supermarket\", \"cat2_name\": \"grocery\", \"cat3_name\": \"Dairy, Frozen and Eggs\"}",
//                                  "brand": "Generic",
//                                  "country": "UAE"
//                              },
//                              "type": "single",
//                              "sku": "129",
//                              "available": 10,
//                              "total": 50,
//                              "minimum_quantity": 0,
//                              "maximum_quantity": 1,
//                              "price": 1,
//                              "currency": "AED",
//                              "description": "None",
//                              "image": "photos/Lamb_6dcVH3e.jpg",
//                              "extra": null,
//                              "store": "Test Name (UAE)"
//                          },
//                          "quantity": 3,
//                          "is_deliverable": false
//                      },
//                      "deal": null,
//                      "actual_price": 3,
//                      "discount_amount": 0,
//                      "net_price": 3
//                  },
//                  {
//                      "itemline": {
//                          "stocked_item": {
//                              "id": 5,
//                              "item": {
//                                  "id": 6,
//                                  "display_name": "Beef",
//                                  "unit": "kg",
//                                  "quantity": 2,
//                                  "search_fields": "{\"type1\": \"supermarket\", \"type2\": \"1-supermarket\", \"type3\": \"1-grocery\", \"cat1_name\": \"Supermarket\", \"cat2_name\": \"grocery\", \"cat3_name\": \"Dairy, Frozen and Eggs\"}",
//                                  "brand": "Generic",
//                                  "country": "Pakistan"
//                              },
//                              "type": "single",
//                              "sku": "127",
//                              "available": 6,
//                              "total": 50,
//                              "minimum_quantity": 0,
//                              "maximum_quantity": 1,
//                              "price": 1,
//                              "currency": "AED",
//                              "description": "None",
//                              "image": "photos/Lamb_K5IZilG.jpg",
//                              "extra": "\"\\\"\\\"\"",
//                              "store": "Test Name (UAE)"
//                          },
//                          "quantity": 3,
//                          "is_deliverable": false
//                      },
//                      "deal": null,
//                      "actual_price": 3,
//                      "discount_amount": 0,
//                      "net_price": 3
//                  }
//              ],
//              "shipping": null,
//              "subtotal": 7517,
//              "additional_discount": 0,
//              "vat": 0.13,
//              "grand_total": 8494.21,
//              "associated_cart": 1,
//              "associated_store": 1
//          },
//          {
//              "stocked_items": [
//                  {
//                      "itemline": {
//                          "stocked_item": {
//                              "id": 19,
//                              "item": {
//                                  "id": 14,
//                                  "display_name": "Nokia16",
//                                  "unit": "units",
//                                  "quantity": 1,
//                                  "search_fields": "{\"type1\": \"supermarket\", \"type2\": \"6-supermarket\", \"type3\": \"3-phones-tablets\", \"cat1_name\": \"Supermarket\", \"cat2_name\": \"electronics\", \"cat3_name\": \"smartphones\"}",
//                                  "brand": "Nokia",
//                                  "country": "UAE"
//                              },
//                              "type": "single",
//                              "sku": "120",
//                              "available": 10,
//                              "total": 20,
//                              "minimum_quantity": 1,
//                              "maximum_quantity": null,
//                              "price": 20,
//                              "currency": "AED",
//                              "description": "",
//                              "image": null,
//                              "extra": "\"{\\\"discount\\\": 0.05}\"",
//                              "store": "Sherpa Mall (Nepal)"
//                          },
//                          "quantity": 2,
//                          "is_deliverable": false
//                      },
//                      "deal": {
//                          "id": 1,
//                          "deleted": false,
//                          "start_date": "2017-01-24",
//                          "end_date": "2017-02-25",
//                          "deal_name": "discount(0.1)",
//                          "filter_params": {
//                              "sku": [
//                                  "120"
//                              ]
//                          },
//                          "store": 3
//                      },
//                      "actual_price": 40,
//                      "discount_amount": 4,
//                      "net_price": 36
//                  },
//                  {
//                      "itemline": {
//                          "stocked_item": {
//                              "id": 20,
//                              "item": {
//                                  "id": 1,
//                                  "display_name": "EarPhone",
//                                  "unit": "units",
//                                  "quantity": 1,
//                                  "search_fields": "{\"type1\": \"supermarket\", \"type2\": \"6-supermarket\", \"type3\": \"msc\", \"cat1_name\": \"Supermarket\", \"cat2_name\": \"electronics\", \"cat3_name\": \"msc\"}",
//                                  "brand": "Generic",
//                                  "country": "UAE"
//                              },
//                              "type": "single",
//                              "sku": "121",
//                              "available": 10,
//                              "total": 20,
//                              "minimum_quantity": 1,
//                              "maximum_quantity": null,
//                              "price": 5,
//                              "currency": "AED",
//                              "description": "",
//                              "image": null,
//                              "extra": "\"\\\"\\\"\"",
//                              "store": "Sherpa Mall (Nepal)"
//                          },
//                          "quantity": 1,
//                          "is_deliverable": false
//                      },
//                      "deal": null,
//                      "actual_price": 5,
//                      "discount_amount": 0,
//                      "net_price": 5
//                  },
//                  {
//                      "itemline": {
//                          "stocked_item": {
//                              "id": 21,
//                              "item": {
//                                  "id": 23,
//                                  "display_name": "Nokia and 2 earphones",
//                                  "unit": "units",
//                                  "quantity": 1,
//                                  "search_fields": "{\"type1\": [\"supermarket\", \"supermarket\"], \"type2\": [\"6-supermarket\", \"6-supermarket\"], \"type3\": [\"3-phones-tablets\", \"msc\"], \"cat1_name\": [\"Supermarket\", \"Supermarket\"], \"cat2_name\": [\"electronics\", \"electronics\"], \"cat3_name\": [\"smartphones\", \"msc\"]}"
//                              },
//                              "type": "combo",
//                              "sku": "124",
//                              "available": 1,
//                              "total": 5,
//                              "minimum_quantity": 1,
//                              "maximum_quantity": null,
//                              "price": 21,
//                              "currency": "AED",
//                              "description": "",
//                              "image": null,
//                              "extra": "{\"discount\": 0.16, \"old_total\": 25.0, \"old_prices\": [{\"sku\": \"120\", \"name\": \"Nokia16\", \"price\": 20.0}, {\"sku\": \"121\", \"name\": \"EarPhone\", \"price\": 5.0}]}",
//                              "store": "Sherpa Mall (Nepal)"
//                          },
//                          "quantity": 1,
//                          "is_deliverable": false
//                      },
//                      "deal": null,
//                      "actual_price": 21,
//                      "discount_amount": 0,
//                      "net_price": 21
//                  }
//              ],
//              "shipping": null,
//              "subtotal": 62,
//              "additional_discount": 0,
//              "vat": 0.13,
//              "grand_total": 70.05999999999999,
//              "associated_cart": 1,
//              "associated_store": 3
//          }
//      ],
//      "success": "Cart data obtained",
//      "cart_count": 8,
//      "final_amount": 8564.269999999999
//  };

const spanStyle1 = {
    color: 'blue',
};
const spanStyle2 = {
    color: 'green',
};
class Header extends Component{

    constructor() {
        super();
        this.state = {
            class: '',
            visible: false,
            width: 500,
            destroyOnClose: false,
            center: true,
            login: true
        }

        this.onClick = this.onClick.bind(this)
        this.Reg = this.Reg.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    onClick(e) {
        this.setState({
            visible: true
        });
    }

    Reg(e){
        this.setState({
            visible: true,
            login: false
        });
    }

    onClose(e) {
        this.setState({
            visible: false,
            login: true
        });
    }

    center(e) {
        this.setState({
            center: e.target.checked,
        });
    }

    onDestroyOnCloseChange(e) {
        this.setState({
            destroyOnClose: e.target.checked,
        });
    }

    handleChange = (e) =>{
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

    componentDidMount() {
        this.props.getCartItems();

        window.addEventListener('scroll', function (e) {
            let distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 10,
                header = document.querySelector("iheader");
            if (distanceY > shrinkOn) {
                this.setState({
                    class: 'smaller'
                })
            } else {
                this.setState({
                    class: ''
                })
            }
        }.bind(this));

    }



    render(){
        let dialog;
        let {cart} = this.props;
        // console.log("cart recieved",cart);

        if (this.state.visible) {
            const style = {
                width: this.state.width
            };
            let wrapClassName = '';
            if (this.state.center) {
                wrapClassName = 'center';
            }
            dialog = (
                <Dialog
                    visible={this.state.visible}
                    wrapClassName={wrapClassName}
                    animation="zoom"
                    maskAnimation="fade"
                    onClose={this.onClose}
                    style={style}
                >
                {this.state.login?
                  <div>
                    <Login />
                  </div>
                  :
                  <div>
                    <Register userSignUp={this.props.userSignUp}/>
                  </div>
                }
                </Dialog>
            );
        }
        return(

          <div className={`fheader blue head-border `+this.state.class}>
            <Link to="/" className="link"><div className="ilogo">
                <img src="./img/infinia/logo.png" />
                <div className="ilogo-text"><span style={spanStyle1}>Infinia</span><span style={spanStyle2}>Stores</span></div>
            </div></Link>
            <div className="imenu">
                <div className="imenu-list search-box">
                    <input className="search-input" placeholder="What are you looking for?" type="text" />
                </div>
                <div className="imenu-list menu-button">Add your Store</div>
                <div className="imenu-list" onClick={this.onClick}>Login</div>
                <div className="imenu-list" onClick={this.Reg}>Register</div>
                <div className="myDropdown">
                  <div className="imenu-list" style={{margin: 8}}>
                      <img src="../img/infinia/cart1.png" width="30px" />
                      {cart && cart.cart_info.length > 0 ? <span className="head-cart-count">{cart.cart_count}</span>:null}
                  </div>

                  <div className="dropdown-content">
                    <p style={cartHeaderStyle}>Your Cart</p>
                    {cart &&
                      cart.cart_info.length > 0 ?
                      <div className="cart">
                        {cart.cart_info && cart.cart_info.map((data, index)=>
                          <div key={index} className="cart-content">
                            {data.stocked_items.map((item, index)=>
                              <div key={index} className="row">
                                <div className="col-md-6" style={{padding: 5}}>

                                  <div className="col-sm-4" style={{paddingRight: 5}}>
                                    <img className="img-thumbnail" src="../../img/infinia/cart1.png" />
                                  </div>
                                  <div className="col-sm-8" style={{padding: 5, overflow: "hidden"}}>
                                    <h5 style={{marginTop: 0, marginBottom: 5}}>{item.itemline.stocked_item.item.display_name} </h5>
                                    <h6 style={{marginTop: 0}}> {item.itemline.stocked_item.price} {item.itemline.stocked_item.currency} per {item.itemline.stocked_item.item.quantity} {item.itemline.stocked_item.item.unit}</h6>
                                  </div>

                                </div>
                                <div className="col-md-2" style={{padding: 5}}>
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
                                <div className="col-md-4">
                                    <span className="col-sm-10" style={{padding: 5, marginTop: 10}}>{item.net_price} {item.itemline.stocked_item.currency} </span>
                                    <span className="col-sm-2 fa fa-trash-o" style={remove} onClick={()=>this.removeItem(item.itemline.stocked_item.id)}></span>
                                </div>
                              </div>
                            )}

                          </div>
                        )}
                        <div className="col-md-12" style={cartFooterStyle}>
                          <h4>Grand Total: {cart.grand_total_without_vat}</h4>
                          <Link to="/cart"><button className="btn btn-warning">View Cart</button></Link>
                          <button className="btn btn-success col-lg-offset-1">Checkout</button>
                        </div>

                      </div>
                      :
                      <p style={{marginLeft: 10}}>Your Cart is empty</p>

                    }


                  </div>
                </div>

            {dialog}
            </div>
        </div>)
    }


}

Header.propTypes = {
  userSignUp: React.PropTypes.func.isRequired
}


const mapStateToProps = ({cart}) => ({cart});

export default connect(mapStateToProps, { getCartItems, removeFromCart, setCartItem, userSignUp })(Header);
