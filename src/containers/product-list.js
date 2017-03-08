import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProductsList} from '../actions/productActions';
import {addToCart} from '../actions/cartActions';


class ProductList extends Component{

    constructor(props){
        super(props);
        this.state = {
            count: 1,
            cart: 0,
        }
    }

    componentDidMount(){
        this.props.getProductsList(this.props.storeID, this.props.catName)
    }

    add(id){
        let current = document.getElementById(id);
        let currentValue = parseInt(current.value);
        let temp = {};
        if(currentValue < parseInt(current.max)){
            current.value = currentValue + 1;
        }

        temp[id] = current.value;
        this.setState(temp)
    }

    remove(id){
        let current = document.getElementById(id);
        let temp = {};
        if(current.value > 1){
            current.value = current.value - 1;
        }
        temp[id] = current.value;

        this.setState(temp)
    }

    addToCart(id){
        let count = document.getElementById(id).value;
        this.props.addToCart(id, parseInt(count)).then(
            (res)=> {
                this.props.callback(res.cart_count);
            },
            (err)=>{
                alert(err);
            }

        );
    }

    validateNumber(evt) {

        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        var regex = /[0-9]|\./;
        if( !regex.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
        }

    };


    render(){
        let {products} = this.props;
        console.log(products);

        return(
            <div className="all-items-list">
                {products.length > 0 ?products.map(product=>
                    <div key={product.id} className="item-hover-card">
                        <div className="item-hover-card-thumb">
                            <div className="cart-counter">
                                <img src="../../img/infinia/cart1.png" />
                                {this.state[product.id] ? this.state[product.id] : 1}
                            </div>
                            <img src={product.image} />
                        </div>
                        <div className="item-details">
                            <div className="item-name">{product.item.display_name}</div>
                            <div className="item-price">{product.price} {product.currency} <span style={{fontWeight: 500}}>per {product.item.quantity} {product.item.unit}</span></div>
                            <div className="item-description">SKU: {product.sku}<br/>Brand: {product.item.brand}<br/>COO: {product.item.country}<br/>Stock: {product.available}</div>
                            <div className="item-add-cart">
                                <div className="box click" onClick={_=>this.remove(product.id)}>-</div>
                                <input type="text" id={product.id}
                                       onKeyPress={(e)=> this.validateNumber(e)}
                                       className="form-control" defaultValue="1"
                                       min="1" max={product.available}
                                       style={{width: 50, height: 30}}/>
                                <div className="box click" onClick={_=>this.add(product.id)}>+</div>
                                <div className="box click" style={{marginLeft: 5}} onClick={()=> this.addToCart(product.id)}><span className="fa fa-shopping-cart"></span></div>
                            </div>
                        </div>

                    </div>
                ):<h2>Oops!!! Something is wrong.<br/>There is no data</h2>}
            </div>
        );
    }
}

const mapStateToProps = ({ products }) => ({products});

export default connect(mapStateToProps, { addToCart, getProductsList })(ProductList);