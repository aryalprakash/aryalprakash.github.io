import React, { Component } from "react";
import { Link } from 'react-router'
import { connect } from 'react-redux';
import {getSubCategories} from '../actions/infiniaAction.js'

class SubCategoryList extends Component{

    initialize(props){
        this.state = {
            storeID: props.storeID,
            category: props.cat,

        };
    }

    constructor(props){
        super(props);
        this.initialize(props);
    }

    componentDidMount(){
        this.props.dispatch(getSubCategories(this.props.storeID, this.props.cat));
    }

    componentWillReceiveProps(nextProps){

        if (this.props.storeID !== nextProps.storeID) {
            nextProps.dispatch(getSubCategories(nextProps.storeID, nextProps.cat));
            this.initialize(nextProps);

        }

    }

    render (){
        let {subcategories} = this.props;

        return(
            <div className="row sub-category">
                {this.props.storeID ? subcategories?subcategories.map(subcategory =>
                    <div key={subcategory.cat_name} className=" col-md-6 sub-category-list">
                        <div className="row">
                            <div className="thumbnail col-md-5">
                                <img className="img-responsive" src={subcategory.image_url}/>
                            </div>
                            <div className="col-md-7">
                                <h3>{subcategory.category}</h3>
                                {
                                    Object.keys(JSON.parse(subcategory.products)).map(function(key,index){
                                        return <p key={index}> {key}: {(JSON.parse(subcategory.products))[key].map((o, i) =><span key={i}>{o}, </span>)} </p>;
                                        }
                                    )
                                }

                                <Link to={{ pathname: '/items', query: { catName: subcategory.cat_name, storeID: this.props.storeID } }}><button className="btn btn-sm btn-warning">View items, Enjoy Shopping</button></Link>

                            </div>
                        </div>

                    </div>

                ): <h2>There is no categories to show.</h2>: <h2>No stores</h2>}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        subcategories: state.InfiniaStores.subcategories
    }
}

export default connect(mapStateToProps)( SubCategoryList )
