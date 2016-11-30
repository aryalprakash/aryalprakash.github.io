/**
 * Created by bikash on 11/25/16.
 */

import React, { Component } from 'react';

import ReactImageZoom from 'react-image-zoom';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import {getProductDetails} from '../actions/infinia.js'

class Details extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }

    componentDidMount(){
        this.props.dispatch(getProductDetails());
    }

    changeImage(path,i){
        this.setState({image: path, selectedIndex: i});
    }

    render(){
        let {productDetails} = this.props;
        let setting;
            productDetails.length>0? setting = {
                width: 400,
                height: 450,
                zoomWidth: 600,
                scale: 1.3,
                zoomStyle: (
                'z-index: 1;' +
                'width: 700px;'
                ),
                img: this.state.image ? this.state.image : productDetails[0].img[0]
            }:null;


        return(
          <div className="mycontainer">
              <Header/>
              <div className="bread-crumb">
                  <div className="select-location">Dubai > Supermarket > Walmart >
                  </div>
                  <div className="select-cat">Chicken > Item-Details
                  </div>
              </div>
              <div className="main-content ">
                  {productDetails.length>0?productDetails.map(detail=>
                      <div key={detail.id} className="container row">
                          <div className="col-md-5">
                              <div className="item-images">
                                  <div className="row">
                                      <div className="col-md-2">
                                          {detail.img.map((path, index)=>
                                              <img key={index} id={index == this.state.selectedIndex? "img-selected" : "not-img-selected"}
                                                   onMouseEnter={() => this.changeImage(path,index)} src={path} className="img-thumbnail"/>
                                          )}
                                      </div>
                                      <div className="col-md-10">
                                          <ReactImageZoom {...setting}/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-7 detail-sec">
                              <h3>{detail.title}</h3>
                              <h4>Price: <span className="new-price">{detail.currency} {detail.price}</span>
                                  <span className="old-price"> NPR 4000</span>
                              </h4>

                              <div className="line"></div>
                              <div className="row">
                                  <div className="col-md-4">
                                      <div className="style-select">Size:
                                          <select>
                                              {detail.size.map((size,index)=><option key={index}>{size}</option>)}
                                          </select>

                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="style-select">Color:
                                          <select>
                                              {detail.color.map((color,index)=><option key={index}>{color}</option>)}
                                          </select>

                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="style-select">Quantity:
                                          <select>
                                              {detail.number.map((number,index)=><option key={index}>{number}</option>)}
                                          </select>

                                      </div>
                                  </div>

                              </div>
                              <div className="line"></div>
                              <div>
                                  <h4>Description:</h4>
                                  {detail.description}
                              </div>
                              <div className="line"></div>
                              <div className="buying-sec">
                                  <div><a className="btn btn-primary" role="button"><span className="fa fa-shopping-cart"/> ADD TO CART</a></div>
                                  <div><a href="#"><span className="fa fa-heart-o"/></a> Add to Whishlist</div>
                              </div>
                              <div className="line"></div>
                              <div className="specs">
                                  <h4>Specifications:</h4>
                                  <p>SKU: {detail.specs.SKU}</p>
                                  <p>Brand: {detail.specs.Brand}</p>
                                  <p>Fabric Type: {detail.specs.Fabric}</p>
                                  <p>Country Of Origin: {detail.specs.COO}</p>
                                  <p>Dress Code: {detail.specs.DressCode}</p>

                              </div>

                          </div>

                      </div>
                  ):<h1>There is no data</h1>}

              </div>

              <Footer/>
          </div>
        );
    }
}

const mapStateToProps = ({ productDetails }) => ({productDetails})

export default connect(mapStateToProps)(Details);