import React, { Component } from 'react';
import { connect } from 'react-redux';


class ProductList extends Component{
    renderList(){
        return this.props.products.map((product) => {
           return(
              <div key={product.name} className="item-hover-card">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>

              </div>
           );
        });
    }

    render(){
        return(
            <div>
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