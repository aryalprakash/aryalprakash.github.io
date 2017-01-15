import React, { Component } from "react";
import { Link } from 'react-router'
import { connect } from 'react-redux';
import {getSubCategories} from '../actions/infinia.js'

class SubCategoryList extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: "",
            storeID: props.storeID,
            category: props.cat,

        };
    }

    componentDidMount(){
        this.props.dispatch(getSubCategories(this.props.storeID, this.props.cat))

    }
    componentWillReceiveProps(props){

        this.setState({id: "sub"});

    }


    render (){
        let {subcategories} = this.props;

        return(
            <div className="row sub-category" id={this.state.id} >
                {subcategories?subcategories.map(subcategory =>
                    <div key={subcategory.id} className="sub-category-list col-md-6">
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

                ): <h2>There is no categories to show.</h2>}

            </div>
        );
    }
}

const mapStateToProps = ({ subcategories }) => ({subcategories})

export default connect(mapStateToProps)( SubCategoryList )
