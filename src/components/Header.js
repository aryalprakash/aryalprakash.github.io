import React, { Component } from 'react';
import  { Route, Link, browserHistory } from 'react-router';
import Dialog from 'rc-dialog';
import { connect } from 'react-redux';
import _ from 'lodash';


import Register from './Register.js'
import Login from './Login.js'
import AddStore from './AddStore';
import ProfileSideBar from './profile/ProfileSideBar';
import 'rc-dialog/assets/index.css';
import SearchBox from './common/SearchBox';

import { userSignUp } from '../actions/authActions';
import { getCartItems, removeFromCart, setCartItem } from '../actions/cartActions';

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

// const username = {
//   width: 100,
//   whiteSpace: 'nowrap',
//   overflow: 'hidden',
//   textOverflow: 'ellipsis'
// };

const spanStyle1 = {
    color: 'blue',
};
const spanStyle2 = {
    color: 'green',
};
class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            class: '',
            visible: false,
            width: '60%',
            destroyOnClose: false,
            center: true,
            login: true,
            reg: false,
            addStore: false,
            path: location.pathname,
        }

        this.onClick = this.onClick.bind(this)
        this.Reg = this.Reg.bind(this)
        this.onClose = this.onClose.bind(this)
        this.addStore = this.addStore.bind(this)

    }

    onClick(e) {
      let width;
      if(screen.width < 480){
        width = '90%';
      }
      else {
        width = '60%'
      }
      console.log("screen width", screen.width);

      this.setState({
        visible: true,
        width: width,
        reg: false,
        login: true,
        addStore: false,
      });
    }

    Reg(e){
      let width;
      if(screen.width < 480){
        width = '90%';
      }
      else {
        width = '60%'
      }
      this.setState({
        visible: true,
        width: width,
        reg: true,
        login: false,
        addStore: false
      });
    }

    addStore(e){
      let width;
      if(screen.width < 480){
        width = '90%';
      }
      else {
        width = '60%'
      }
      this.setState({
        visible: true,
        width: width,
        reg: false,
        login: false,
        addStore: true
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
        let { loggedIn } = this.props;

        if (this.state.visible) {

            dialog = (
                <Dialog
                    visible={this.state.visible}
                    wrapClassName='center'
                    animation="zoom"
                    maskAnimation="fade"
                    onClose={this.onClose}
                    style={{width: this.state.width}}
                >
                {
                  this.state.login &&
                  <div>
                    <Login />
                  </div>
                }
                {
                  this.state.reg &&
                  <div>
                    <Register userSignUp={this.props.userSignUp}/>
                  </div>
                }
                {
                  this.state.addStore &&
                    <div>
                      <AddStore/>
                    </div>
                }
                </Dialog>
            );
        }
        return(

          <div className={`fheader blue head-border `+this.state.class}>
            <Link to="/" className="link"><div className="ilogo">
                <img src={require("../../img/infinia/logo.png")} />
                <div className="ilogo-text"><span style={spanStyle1}>Infinia</span><span style={spanStyle2}>Stores</span></div>
            </div></Link>
            {location.pathname != "/register" &&
            <div className="imenu">
              <SearchBox placeholder="Search store, product ..."/>
                {/*<div className="imenu-list search-box">*/}
                    {/*<input className="search-input" placeholder="What are you looking for?" type="text" />*/}
                {/*</div>*/}
                {/*<span className="fa fa-search imenu-list"/>*/}
                <button className="imenu-list btn btn-sm btn-success" onClick={this.addStore}>Add your Store</button>
              {
                !_.isEmpty(loggedIn) &&
                  loggedIn.status_code === 200 ?
                  <div className="imenu-profile">
                    <div className="myDropdown">
                      <div className="imenu-list username">{loggedIn.username}</div>
                      <div className="dropdown-content">
                        <ProfileSideBar/>
                      </div>

                    </div>
                  </div>:
                  <div className="imenu-profile">
                    <div className="imenu-list" onClick={this.onClick}>Login</div>
                    <div className="imenu-list" onClick={this.Reg}>Register</div>
                  </div>
              }

                <div className="myDropdown">
                  <div className="imenu-list menu-cart" style={{margin: 8}}>
                      <img src={require("../../img/infinia/cart1.png")}  width="22px"/>
                      {!_.isEmpty(cart) && !_.isEmpty(cart.cart_info) && cart.cart_info.length > 0 ? <span className="head-cart-count">{cart.cart_count}</span>:null}
                  </div>

                  <div className="dropdown-content cart-dropdown">
                    <p style={cartHeaderStyle}>Your Cart</p>
                    {!_.isEmpty(cart) && !_.isEmpty(cart.cart_info) &&
                      cart.cart_info.length > 0 ?
                      <div className="cart">
                        {cart.cart_info && cart.cart_info.map((data, index)=>
                          <div key={index} className="cart-content">
                            {data.itemline_data.map((item, index)=>
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
                                    <span className="col-sm-2 fa fa-trash-o" style={remove} onClick={()=>this.removeItem(item.itemline.stocked_item.id)}/>
                                </div>
                              </div>
                            )}

                          </div>
                        )}
                        <div className="col-md-12" style={cartFooterStyle}>
                          <h4>Grand Total: {cart.grand_total_without_vat}</h4>
                          <Link to="/user/Bikash/cart"><button className="btn btn-warning">View Cart</button></Link>
                          <button className="btn btn-success col-lg-offset-1">Checkout</button>
                        </div>

                      </div>
                      :
                      <p style={{marginLeft: 10}}>Your Cart is empty</p>

                    }


                  </div>
                </div>

            {dialog}
            </div>}
        </div>)
    }


}

Header.propTypes = {
  loggedIn: React.PropTypes.object.isRequired
};

Header.contextTypes = {
  router: React.PropTypes.object.isRequired
};

Header.defaultProps = {
  cart: {}
};

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    loggedIn: state.auth.loggedIn,
  }
}
// const mapStateToProps = ({cart}) => ({cart});

export default connect(mapStateToProps, { getCartItems, removeFromCart, setCartItem, userSignUp })(Header);
