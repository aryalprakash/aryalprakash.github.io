import React, { Component } from 'react';

var Slider = require('react-slick');
export default class Deals extends Component {

    render() {
        var settings = {
            dots: false,
            infinite: true,
            arrows: false,
            vertical: true,
            // speed: 100,
            // infinite: true,
            autoplay: true,
            // autoplaySpeed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1

        };

        return (
            <div>
                <div className="infiniadeals">
                    <h2> <span className="fa fa-bolt"/> Infinia Deals</h2>
                    <div>
                        <Slider {...settings}>
                            <a href="#">
                                <div style={{display: 'flex'}}>
                                    <img src='../../img/01.jpg' />
                                    <div className="deals-overlay">
                                        <h3>kids's zone</h3>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div  style={{display: 'flex'}}>
                                    <img src='../../img/02.jpg' />
                                    <div className="deals-overlay">
                                        <h3>Supermarket</h3>

                                    </div>
                                </div>
                            </a>

                        </Slider>

                    </div>


                </div>
            </div>
        );
    }
}
