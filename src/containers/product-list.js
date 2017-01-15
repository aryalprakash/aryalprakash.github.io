import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProductsList} from '../actions/infinia.js'


class ProductList extends Component{

    componentDidMount(){
        this.props.dispatch(getProductsList(this.props.storeID, this.props.catName))
    }

    render(){
        let {products} = this.props;
        console.log(products);

        return(
            <div className="all-items-list">
                {products?products.map(product=>
                    <div key={product.id} className="item-hover-card">
                        <div className="item-hover-card-thumb">
                            <div className="cart-counter">
                                <img src="../../img/infinia/cart1.png" />
                                {/*{this.state.count}*/}
                            </div>
                            <img src={product.image} />
                        </div>
                        <div className="item-details">
                            <div className="item-name">{product.item.display_name}</div>
                            <div className="item-price">{product.item.price} {product.item.currency}</div>
                            <div className="item-description">SKU: {product.sku}<br/>Brand: {product.item.brand}<br/>COO: {product.item.country}<br/>Stock: {product.available}</div>
                            <div className="item-add-cart">

                                {/*<div className="box click" onClick={_=>this.remove()}>-</div>*/}
                                {/*<div className="count">{this.state.count}</div>*/}
                                {/*<div className="box click" onClick={_=>this.add()}>+</div>*/}
                            </div>
                        </div>

                    </div>
                ):<h1>Oops!!! Something is wrong.<br/>There is no data</h1>}
            </div>
        );
    }
}

const mapStateToProps = ({ products }) => ({products})

export default connect(mapStateToProps)(ProductList);