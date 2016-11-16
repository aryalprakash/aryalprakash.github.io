import React, { Component } from "react";
import { Link } from 'react-router'

export default class SubCategoryList extends Component{
    render (){
        return(
            <div className="row sub-category">
                <div className="sub-category-list col-md-6">
                    <div className="row">
                        <div className="thumbnail col-md-5">
                            <img className="img-responsive" src="../../img/sub-category/dairy.jpg"/>
                        </div>
                        <div className="col-md-7">
                            <h3>Dairy, Frozen, Eggs</h3>
                            <p>Dairy: Milk, Yogurt, Cheese...</p>
                            <p>Frozen: Peas, Beans, Samosas...</p>
                            <p>Eggs: Chicken Eggs, Quail Eggs...</p>
                            <Link to="items"><button className="btn btn-sm btn-warning">View items, Enjoy Shopping</button></Link>

                        </div>
                    </div>
                </div>
                <div className="sub-category-list col-md-6">
                    <div className="row">
                        <div className="thumbnail col-md-5">
                            <img className="img-responsive" src="../../img/sub-category/beverage.jpg"/>
                        </div>
                        <div className="col-md-7">
                            <h3>Beverage</h3>
                            <p>Juices: Apple, Mango, Oranges...</p>
                            <p>Carbonated: Coca Cola, Pepsi...</p>
                            <p>Tea/Coffee: Lemon Tea, Peach Tea..</p>
                            <Link to="items"><button className="btn btn-sm btn-warning">View items, Enjoy Shopping</button></Link>
                        </div>
                    </div>
                </div>
                <div className="sub-category-list col-md-6">
                    <div className="row">
                        <div className="thumbnail col-md-5">
                            <img className="img-responsive" src="../../img/sub-category/staples.png"/>
                        </div>
                        <div className="col-md-7">
                            <h3>Staples</h3>
                            <p>Rice: Basmati, Sona, Thai...</p>
                            <p>Pulses: Chana Dal, Toor Dal ...</p>
                            <p>Spices, Flour, Oil and ghee..</p>
                            <Link to="items"><button className="btn btn-sm btn-warning">View items, Enjoy Shopping</button></Link>
                        </div>
                    </div>
                </div>
                <div className="sub-category-list col-md-6">
                    <div className="row">
                        <div className="thumbnail col-md-5">
                            <img className="img-responsive" src="../../img/sub-category/snacks.jpeg"/>
                        </div>
                        <div className="col-md-7">
                            <h3>Snacks</h3>
                            <p>Chocolates: Dairy Milk, KitKat...</p>
                            <p>Biscuits: Marie Gold, Good Day...</p>
                            <p>Chips, Noodles, Dry Fruits...</p>
                            <Link to="items"><button className="btn btn-sm btn-warning">View items, Enjoy Shopping</button></Link>
                        </div>
                    </div>
                </div>
                <div className="sub-category-list col-md-6">
                    <div className="row">
                        <div className="thumbnail col-md-5">
                            <img className="img-responsive" src="../../img/sub-category/homecare.png"/>
                        </div>
                        <div className="col-md-7">
                            <h3>Home Care</h3>
                            <p>Detergents: Apple, Mango...</p>
                            <p>Floor Cleaning: Coca Cola...</p>
                            <p>Utensils CLeaning: Lemon Tea...</p>
                            <button className="btn btn-sm btn-warning">View items, Enjoy Shopping</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}