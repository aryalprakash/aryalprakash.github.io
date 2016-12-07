/**
 * Created by bikash on 11/25/16.
 */

import React, { Component } from 'react';

import ReactImageZoom from 'react-image-zoom';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import {getProductDetails} from '../actions/infinia.js'
import {getNewImage} from '../actions/filter'

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

    scroll(scrollDuration,from, to){
        let source = document.getElementsByClassName(from);
        let target = document.getElementsByClassName(to);
        let position = target[0].offsetTop-source[0].offsetTop-15;

        var scrollStep = 500 / (scrollDuration / 15);
        var limit = 200; /* for stopping the infinite loop when the offset is small*/
        var scrollInterval = setInterval(function(){

                if ( window.scrollY <= position ) {

                    window.scrollBy( 0, scrollStep );
                    limit -= 1;
                    if (limit == 0){
                        clearInterval(scrollInterval);
                    }
                }
                else {
                    clearInterval(scrollInterval);
                }
            },1);

    }
    selectSize(){

    }
    selectColor(){
        let val = document.getElementsByClassName('selectColor');

        this.setState({color: val[0].value, image: this.props.productDetails[0].img[val[0].value][0], selectedIndex: 0});
    }

    render(){
        let {productDetails} = this.props;

        let color = [];
        if(productDetails.length > 0){
            for (var key in productDetails[0].img){
                if (productDetails[0].img.hasOwnProperty(key)) {
                    color.push(key);
                }
            }
        }

        let selectedColor = this.state.color? this.state.color: color[0];

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
                img: this.state.image ? this.state.image : productDetails[0].img[selectedColor][0]
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
                  <div key={detail.id} className="container">
                      <div className="row">
                          <div className="col-md-5">
                              <div className="item-images">
                                  <div className="row">
                                      <div className="col-md-2">
                                          {detail.img[selectedColor].map((path, index)=>
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
                              <div className="detail-heading">
                                  <h3>{detail.title}</h3>
                                  <div className="rating-sec">
                                      <span className={detail.rating>0.5?"fa fa-star":"fa fa-star-o"}/>
                                      <span className={detail.rating>1.5?"fa fa-star":"fa fa-star-o"}/>
                                      <span className={detail.rating>2.5?"fa fa-star":"fa fa-star-o"}/>
                                      <span className={detail.rating>3.5?"fa fa-star":"fa fa-star-o"}/>
                                      <span className={detail.rating>=4.5?"fa fa-star":"fa fa-star-o"}/>

                                      <span className="rating"> ({detail.rating}) </span>
                                      <span className="ratingNo">21 rating </span>
                                      <a className="review" onClick={()=> this.scroll(1000,'review','review-sec')}><span > &nbsp; 2 reviews &nbsp;</span></a>
                                      <a className="review" onClick={()=> this.scroll(1000,'review','QandA')}><span > View QA</span></a>

                                  </div>
                              </div>

                              <div className="line"></div>
                              <h4>Price: <span className="new-price">{detail.currency} {detail.price}</span>
                                  <span className="old-price"> NPR 4000</span>
                              </h4>
                              <div className="row">
                                  <div className="col-md-4">
                                      <div className="style-select">Size:
                                          <select className="selectSize" onChange={()=> this.selectSize()}>
                                              {detail.size.map((size,index)=><option value={size} key={index}>{size}</option>)}
                                          </select>

                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="style-select">Color:
                                          <select className="selectColor" onChange={()=> this.selectColor()}>
                                              {color.map((color,index)=><option value={color} key={index}>{color}</option>)}
                                          </select>

                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                      <div className="style-select">Quantity:
                                          <select>
                                              {detail.number.map((number,index)=><option value={number} key={index}>{number}</option>)}
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
                                  <div><a href="#details"><span className="fa fa-heart-o"/></a> Add to Whishlist</div>
                              </div>
                              <div className="line"></div>
                              <div className="specs">
                                  <h4>Specifications:</h4>
                                  <p>SKU: {detail.specs.SKU}</p>
                                  <p>Brand: {detail.specs.Brand}</p>
                                  <p>Fabric Type: {detail.specs.Fabric}</p>
                                  <p>Country Of Origin: {detail.specs.COO}</p>
                                  <p>Type: {detail.specs.Type}</p>

                              </div>

                          </div>

                      </div>
                      <div className="row">
                          <div className="policy col-md-12">
                              <h4>Return Policy:</h4>
                              <hr/>
                              <p>{detail.policy}</p>
                          </div>
                          <div className="review-sec col-md-12">
                              <h4>Customer Reviews:</h4>
                              <hr/>
                              <div className="review-list">
                                  <div className="row">
                                      <div className="col-md-1">
                                          {/*<img className="profile-pic img-rounded" src="" />*/}
                                          <span className="reviewer">A</span>
                                      </div>
                                      <div className="col-md-11">
                                          <div className="rating-sec">
                                              <span className={detail.rating>0.5?"fa fa-star":"fa fa-star-o"}/>
                                              <span className={detail.rating>1.5?"fa fa-star":"fa fa-star-o"}/>
                                              <span className={detail.rating>2.5?"fa fa-star":"fa fa-star-o"}/>
                                              <span className={detail.rating>3.5?"fa fa-star":"fa fa-star-o"}/>
                                              <span className={detail.rating>=4.5?"fa fa-star":"fa fa-star-o"}/>
                                          </div>
                                          <div className="">
                                              <p className="username">posted by: Anish(GC) on November 29, 2016 </p>
                                              <p>This one is the best jacket in the market right now. The price could have been a bit lesser.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="review-list">
                                  <div className="row">
                                      <div className="col-md-1">
                                          {/*<img className="profile-pic img-rounded" src="" />*/}
                                          <span className="reviewer">M</span>
                                      </div>
                                      <div className="col-md-11">
                                          <div className="rating-sec">
                                              <span className={detail.rating>0.5?"fa fa-star":"fa fa-star-o"}/>
                                              <span className={detail.rating>1.5?"fa fa-star":"fa fa-star-o"}/>
                                              <span className={detail.rating>2.5?"fa fa-star":"fa fa-star-o"}/>
                                              <span className={detail.rating>3.5?"fa fa-star":"fa fa-star-o"}/>
                                              <span className={detail.rating>=4.5?"fa fa-star":"fa fa-star-o"}/>
                                          </div>
                                          <div className="">
                                              <p className="username">posted by: Mehang on November 23, 2016 </p>
                                              <p>
                                                  It is a nice product to be used for hiking and in cold areas.
                                                  It would really make you sweat but it comes with ventilation zip that would help your body get air too.
                                                  If you want to buy this product, it is a thumbs up. Service you can choose based on aftersale support.
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>




                          </div>
                          <div className="QandA col-md-12">
                              <h4>Question and Answer:</h4>
                              <hr/>
                              <form>
                                  <input type="text" className="form-control" placeholder="Do you have any questions ?"/>
                              </form>
                              <div className="QA-sec">
                                  <div className="row question">
                                      <div className="col-md-1"><span className="fa fa-question-circle"/></div>
                                      <div className="col-md-11">
                                          <p>What is the quality of the cotton?</p>
                                      </div>
                                  </div>
                                  <div className="row reply">
                                      <div className="col-md-1"><span className="fa fa-reply"/></div>
                                      <div className="col-md-11">
                                          <p>Its 100% geniune.</p>
                                          <span className="username">by Pravesh D. koirala, on November 23, 2016</span>
                                      </div>
                                  </div>

                              </div>
                              <div className="QA-sec">
                                  <div className="row question">
                                      <div className="col-md-1"><span className="fa fa-question-circle"/></div>
                                      <div className="col-md-11">
                                          <p>what should i do for fast delivery.?</p>
                                      </div>
                                  </div>
                                  <div className="row reply">
                                      <div className="col-md-1"><span className="fa fa-reply"/></div>
                                      <div className="col-md-11">
                                          <p>
                                              "For choosing Next Day Delivery Option, kindly follow the steps given below:
                                              1. Enter your Pin Code on the product page to check if Next Day Delivery is available for your area.
                                              2. If yes, selected the ""Next Day Delivery"" option during payment checkout on the final payment page."
                                          </p>
                                          <span className="username">by Anjan Rai, on November 11, 2016</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="QA-sec">
                                  <div className="row question">
                                      <div className="col-md-1"><span className="fa fa-question-circle"/></div>
                                      <div className="col-md-11">
                                          <p>what should i do for fast delivery.?</p>
                                      </div>
                                  </div>
                                  <div className="row reply">
                                      <div className="col-md-1"><span className="fa fa-reply"/></div>
                                      <div className="col-md-11">
                                          <p>
                                              "For choosing Next Day Delivery Option, kindly follow the steps given below:
                                              1. Enter your Pin Code on the product page to check if Next Day Delivery is available for your area.
                                              2. If yes, selected the ""Next Day Delivery"" option during payment checkout on the final payment page."
                                          </p>
                                          <span className="username">by Anjan Rai, on November 11, 2016</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="QA-sec">
                                  <div className="row question">
                                      <div className="col-md-1"><span className="fa fa-question-circle"/></div>
                                      <div className="col-md-11">
                                          <p>what should i do for fast delivery.?</p>
                                      </div>
                                  </div>
                                  <div className="row reply">
                                      <div className="col-md-1"><span className="fa fa-reply"/></div>
                                      <div className="col-md-11">
                                          <p>
                                              "For choosing Next Day Delivery Option, kindly follow the steps given below:
                                              1. Enter your Pin Code on the product page to check if Next Day Delivery is available for your area.
                                              2. If yes, selected the ""Next Day Delivery"" option during payment checkout on the final payment page."
                                          </p>
                                          <span className="username">by Anjan Rai, on November 11, 2016</span>
                                      </div>
                                  </div>
                              </div>

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