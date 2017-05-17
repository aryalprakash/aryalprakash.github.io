/**
 * Created by bikash on 4/27/17.
 */
import React, { Component } from 'react';

import StoreNavBar from './StoreNavBar';
import ImageGallery from '../common/ImageGallery';

class StoreMedia extends Component {

  render() {
    return(
      <div>
        <StoreNavBar active="storeMedia" storeId={this.props.location.query.storeId} storeName={this.props.params.store}/>
        <div className="col-md-10">
          <h4>Store Photos</h4>
          <div className="line"></div>
          <ImageGallery/>

        </div>

        <div className="col-md-10" style={{marginTop: 15}}>
          <h4>Store Video</h4>
          <div className="line"></div>
          <div className="store-media store-video">
            <div className="col col-md-12 col-sm-12 col-xs-12">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/q4TavxC2eVI" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default StoreMedia;