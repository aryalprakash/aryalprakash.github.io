import React, { Component } from 'react';
import { connect } from 'react-redux';


class ProductList extends Component{
    renderList(){
        return this.props.products.map((product) => {
           return(
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
           );
        });
    }

    render(){
        return(
            <div className="all-items-list">
                {this.renderList()}
            </div>
        );
    }
}

function mapStatetoProps(state) {
    // whatever is returned from here will show as props
    // inside of the ProductList
    return{
        products: state.products
    };
}

export default connect(mapStatetoProps)(ProductList);