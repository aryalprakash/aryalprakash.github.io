/**
 * Created by bikash on 4/28/17.
 */
import React, { Component } from 'react';

let slideIndex = 1;

class ImageGallery extends Component {
  openModal = () => {
    document.getElementById('myModal').style.display = "block";
  };

  closeModal = ()=> {
    document.getElementById('myModal').style.display = "none";
  };

  plusSlides = (n) => {
    this.showSlides(slideIndex += n);
  };

  currentSlide = (n) => {
    this.showSlides(slideIndex = n);
  };

  showSlides = (n) => {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  };

  render() {
    return(
      <div>
        <div className="store-media store-photo">
          <div className="col col-md-2 col-sm-3 col-xs-4">
            <img className="img-thumbnail" onClick={() => {this.openModal(); this.currentSlide(1);}} src={require('../../../img/01.jpg')}/>
          </div>
          <div className="col col-md-2 col-sm-3 col-xs-4">
            <img className="img-thumbnail" onClick={() => {this.openModal(); this.currentSlide(2);}} src={require('../../../img/02.jpg')}/>
          </div>
          <div className="col col-md-2 col-sm-3 col-xs-4">
            <img className="img-thumbnail" onClick={() => {this.openModal(); this.currentSlide(3);}} src={require('../../../img/spinneys.jpg')}/>
          </div>
        </div>

        <div id="myModal" className="gallery-modal">
          <span className="close-modal" onClick={this.closeModal}>&times;</span>
          <div className="modal-content">

            <div className="mySlides">
              <div className="numbertext">1 / 3</div>
              <img src={require('../../../img/01.jpg')} style={{width:"100%"}}/>
            </div>

            <div className="mySlides">
              <div className="numbertext">2 / 3</div>
              <img src={require('../../../img/02.jpg')} style={{width:"100%"}}/>
            </div>

            <div className="mySlides">
              <div className="numbertext">3 / 3</div>
              <img src={require('../../../img/spinneys.jpg')} style={{width:"100%"}}/>
            </div>

            <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>

            <div className="caption-container">
              <p id="caption"></p>
            </div>

            <div className="column">
              <img className="demo img-responsive" src={require('../../../img/01.jpg')} onClick={() => this.currentSlide(1)} alt="Nature"/>
            </div>

            <div className="column">
              <img className="demo img-responsive" src={require('../../../img/02.jpg')} onClick={() => this.currentSlide(2)} alt="Trolltunga"/>
            </div>

            <div className="column">
              <img className="demo img-responsive" src={require('../../../img/spinneys.jpg')} onClick={() => this.currentSlide(3)} alt="Mountains"/>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default ImageGallery;