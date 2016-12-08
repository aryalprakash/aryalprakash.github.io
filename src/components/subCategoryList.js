import React, { Component } from "react";
import { Link } from 'react-router'
import { connect } from 'react-redux';
import {getSubCategories} from '../actions/infinia.js'

class SubCategoryList extends Component{

    componentDidMount(){
        this.props.dispatch(getSubCategories(this.props.cat))
    }

    render (){
        let {subcategories} = this.props;
        return(
            <div className="row sub-category">
                {subcategories?subcategories.map(subcategory =>
                    <div key={subcategory.id} className="sub-category-list col-md-6">
                        <div className="row">
                            <div className="thumbnail col-md-5">
                                <img className="img-responsive" src={subcategory.imgPath}/>
                            </div>
                            <div className="col-md-7">
                                <h3>{subcategory.title}</h3>
                                {
                                    Object.keys(subcategory.product).map(function(key,index){
                                        return <p key={index}> {key}: {subcategory.product[key].map((o, i) =><span key={i}>{o}, </span>)} </p>;
                                        }
                                    )
                                }

                                <Link to={subcategory.linkTo}><button className="btn btn-sm btn-warning">View items, Enjoy Shopping</button></Link>

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
