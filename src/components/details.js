/**
 * Created by bikash on 11/25/16.
 */

import React, { Component } from 'react';

import ReactImageZoom from 'react-image-zoom';
import { connect } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import {getProductDetails} from '../actions/infinia.js'


// var prop = {
//         width: 380,
//         height: 350,
//         zoomWidth: 600,
//         scale:1.3,
//         zoomStyle:(
//             'z-index: 1;' +
//             'border: 1px solid #c0c0c0;' +
//             'width: 700px;'
//         )
// }
// var newprop = Object.assign({}, prop, { img: "../../img/02.jpg" })

class Details extends Component{

    constructor(props){
        super(props);
        this.state = {
            setting : {
                    width: 380,
                    height: 350,
                    zoomWidth: 600,
                    scale:1.3,
                    zoomStyle:(
                        'z-index: 1;' +
                        'border: 1px solid #c0c0c0;' +
                        'width: 700px;'
                    ),
                    img: " "//yesma first image rakhnu parne cha or surumai set garnu parcha
                },
            id: 'not-img-selected'
        }
    }

    componentDidMount(){
        this.props.dispatch(getProductDetails());
        setTimeout(
            () => this.settingImage(),
            100
        );
    }
    // componentWillMount(){
    //     if(this.props.productDetails[0] != undefined){
    //         this.settingImage();
    //     }
    // }
    settingImage(){
        console.log('set the image here');
        let setting = this.state.setting;
        setting.img = this.props.productDetails[0].img[0];
        this.setState(setting);
    }

    changeImage(path,i){
        console.log(this.props.productDetails);
        let setting = this.state.setting;
        setting.img = path.path;
        // this.setState({id: 'img-selected'});

        this.setState(setting);
    }

    render(){
        let {productDetails} = this.props;
        console.log('data', productDetails);


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
                  {productDetails?productDetails.map(detail=>
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
                                          <ReactImageZoom {...this.state.setting}/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-7 detail-sec">

                              There is the GC guy in our office who is the swaggy dude. !!!
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