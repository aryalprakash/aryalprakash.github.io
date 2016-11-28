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
            id: 'not-img-selected'
        }
    }

    componentDidMount(){
        this.props.dispatch(getProductDetails());
    }

    changeImage(path,i){
        this.setState({image: path.path});
    }

    render(){
        let {productDetails} = this.props;
        let setting;
            productDetails.length>0? setting = {
                width: 380,
                height: 350,
                zoomWidth: 600,
                scale: 1.3,
                zoomStyle: (
                'z-index: 1;' +
                'border: 1px solid #c0c0c0;' +
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
                                      <div className="col-md-3">
                                          {detail.img.map((path,index)=>
                                              <img key={index} id={this.state.id} onMouseEnter={() => this.changeImage({path},{index})} src={path} className="img-thumbnail"/>
                                              )}
                                      </div>
                                      <div className="col-md-9">
                                          <ReactImageZoom {...setting}/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-7 detail-sec">

                              There is the GC guy in our office who is the swaggy dude. !!! df
                              There is the GC guy in our office who is the swaggy dude. !!!
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