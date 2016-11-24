import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'
import {getMainCategories} from '../actions/infinia.js'
import Deals from './homeDeals';



let styles={
    h1:{
        fontFamily: 'Josefin sans',
        textShadow: '1px 1px 0 rgba(0,0,0,0.4)',
        fontSize:'25px',
        marginTop: "150px",
        color: '#fff',
        fontWeight: "600"
    },
    h2:{
        fontFamily: 'Josefin sans',
        textShadow: '1px 1px 0 rgba(0,0,0,0.4)',
        fontSize:'33px',
        marginTop: "0px",
        fontWeight: "600"
    },
    h3:{
        textShadow: '1px 1px 0 rgba(0,0,0,0.4)',
        fontSize:'25px',

    },
    link:{
        color: 'white',
        backgroundColor:"red"
    },
    input:{
        boxShadow:"1px 1px 0 rgba(0.4,0,0,0.3)",

        width: "400px",
    },
    input1:{
        boxShadow:"1px 1px 0 rgba(0.4,0,0,0.3)",

    },btn:{
        backgroundColor:'#000'
    }
};

class Home extends Component {
    constructor(){
        super();
        this.state={
            list: false,
            place: 'Dubai'
        }
    }

    componentDidMount(){
        this.props.dispatch(getMainCategories())
    }

    render() {
        let {categories} = this.props
        console.log(categories)

        return (
            <div>
                <div id="main">
                    <div className="overlay">

                        <div  className="container">
                            <h2 style={styles.h1}>Shop the best deals from Genuine & Branded Retail Stores</h2>
                        </div>
                        <div className="container">
                            <div id="searchbar" className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-8">

                                    <form action="" className="form-inline">
                                        <div className="form-group">
                                            <input style={styles.input1} type="text" className="form-control" placeholder="Search location..."/>
                                        </div>
                                        <div className="form-group">
                                            <input style={styles.input} type="text" className="form-control" placeholder="Search by Store, Brand, Product, Category..."/>
                                        </div>
                                        <button type="submit" className="btn btn-danger" >Search</button>
                                    </form>

                                </div>
                                <div className="col-md-2"></div>

                            </div>

                        </div>


                    </div>
                </div>

                <div className="category-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <h2> Select Shopping Category</h2><br/>
                                <div className="row">
                                {categories?categories.map(category=>
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={category.id}>
                                        <div className="hovereffect">
                                            <img className="img-responsive" src={category.image}/>
                                            <div className="overlay">
                                                <h2>{category.name}</h2>
                                                <Link to={`search/${category.slug}`} className="info">Shop now</Link>
                                            </div>
                                        </div>
                                    </div>
                                ):null}
                                </div>

                            </div>

                            <div className="col-md-3">
                                <Deals/>
                            </div>

                        </div>
                    </div>

                </div>


            </div>

        );
    }
}

// Home.contextTypes = {
//     router: React.PropTypes.object
// }

const mapStateToProps = ({ categories }) => ({categories})

export default connect(mapStateToProps)( Home )
