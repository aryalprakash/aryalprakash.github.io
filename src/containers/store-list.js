import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router';
import { sortBy, orderBy } from 'lodash';

//******* This file is not in use *********//

class StoreList extends Component{
    renderStoreList(){
        return this.props.stores.map((store) => {
            return(
                <div key={store.storeName} className="col-md-4 col-sm-6">
                     <Link to={store.linkto}>
                         <div className="thumbnail">
                             <div className="ribbon"><span className="fa fa-circle opn"> </span></div>
                             <img src={store.imgPath} />
                             <div className="caption">
                                <h4>{store.storeName}</h4>
                                <p>Location: {store.location}</p>
                                <p>Min-Order: {store.minOrder}</p>
                                <p>Category: {store.category}</p>

                            </div>
                        </div>
                    </Link>
                </div>
            );

        });
    }
    render(){
        return(
            <div>
                {this.renderStoreList()}
            </div>

        );
    }
}

function mapStatetoProps(state) {
    console.log(state.sorted);

    // whatever is returned from here will show as props
    // inside of the ProductList
    if(state.sorted.sortby == 'atoz'){
        var newStore = state.stores;
        newStore = _.sortBy(newStore, [function(o) { return o.storeName.toLowerCase(); }]);
        return{
            stores: newStore
        };

    }
    if(state.sorted.sortby == 'ztoa'){
        var newStore = state.stores;
        newStore = _.sortBy(newStore, [function(o) { return o.storeName.toLowerCase(); }]).reverse();
        return{
            stores: newStore
        };
    }

}

export default connect(mapStatetoProps)(StoreList);