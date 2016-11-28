import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProductsList} from '../actions/infinia.js'


class ProductList extends Component{

    componentDidMount(){
        this.props.dispatch(getProductsList())
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
                            <img src="../../img/store/d.jpg" />
                        </div>
                        <div className="item-details">
                            <div className="item-name">{product.name}</div>
                            <div className="item-price">{product.price} {product.currency}</div>
                            <div className="item-description">SKU: 00AD<br/>Brand: Mukharjee<br/>COO: Dubai<br/>Stock: 200</div>
                            <div className="item-add-cart">

                                {/*<div className="box click" onClick={_=>this.remove()}>-</div>*/}
                                {/*<div className="count">{this.state.count}</div>*/}
                                {/*<div className="box click" onClick={_=>this.add()}>+</div>*/}
                            </div>
                        </div>

                    </div>
                ):<h1>There is no data</h1>}
            </div>
        );
    }
}

const mapStateToProps = ({ products }) => ({products})

export default connect(mapStateToProps)(ProductList);