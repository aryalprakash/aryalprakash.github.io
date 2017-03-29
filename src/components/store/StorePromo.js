/**
 * Created by bikash on 3/9/17.
 */
import React, { Component } from 'react';
import Dialog from 'rc-dialog';
import { connect } from 'react-redux';

import StoreNavBar from './StoreNavBar';
import { getStoreDetails } from '../../actions/storeActions';

const style = {
  width: 600,
  height: "auto"
};

const data = [
  {
    flier: 'https://issuu.com/almaya/docs/merged_edcc962fa3786b/1',
    thumbnail: '../../img/offers/4.jpg'
  },
  {
    flier: 'http://static.fliphtml5.com/web/demo/hobbit/index.html',
    thumbnail: '../../img/offers/2.jpg'
  },
  {
    flier: 'http://static.fliphtml5.com/web/demo/Mac/Mac.html#p=1',
    thumbnail: '../../img/offers/4.jpg'
  },
  {
    flier: 'http://static.fliphtml5.com/web/demo/VACHERON%20CONSTANTIN/VACHERON%20CONSTANTIN.html#p=1',
    thumbnail: '../../img/offers/2.jpg'
  },
  {
    flier: 'http://static.fliphtml5.com/web/demo/Estee%20Lauder/Estee%20Lauder.html#p=1',
    thumbnail: '../../img/offers/4.jpg'
  },
  {
    flier: 'http://static.fliphtml5.com/web/demo/DOLCE%20&%20GABBANA/DOLCE%20&%20GABBANA.html#p=1',
    thumbnail: '../../img/offers/2.jpg'
  },
  {
    flier: '../../img/RFQ.pdf',
    thumbnail: '../../img/offers/4.jpg'
  },



];
class StorePromo extends Component {
  constructor(props){
    super(props);
    this.state ={
      visible: false,
      destroyOnClose: false,
      link: '',
    };

  }

  onClick(src) {
    console.log("flier path", src);
    this.setState({
      visible: true,
      link: src
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
      link: ''
    });
  };

  onDestroyOnCloseChange(e) {
    this.setState({
      destroyOnClose: e.target.checked,
    });
  }

  render() {
    let dialog;
    let {storeDetails} = this.props;
    let offers;
    {storeDetails.length == 0 ? this.props.getStoreDetails(this.props.location.query.storeId): offers = storeDetails[0].offers}
    console.log('offers in storePromo page',offers);

    if (this.state.visible || !this.state.destroyOnClose) {
      dialog = (
        <Dialog
          visible={this.state.visible}
          animation="zoom"
          maskAnimation="fade"
          onClose={this.onClose}
          style={{ width: 840 }}
          title={<div style={{marginTop: 15, fontSize: 17}}> Store Promotions</div>}
        >
            {/*<iframe*/}
            {/*frameBorder='0'*/}
            {/*width='800'*/}
            {/*height='600'*/}
            {/*title='fresh'*/}
            {/*src={this.state.link}*/}
            {/*type='text/html'*/}
            {/*allowFullScreen='true'*/}
            {/*scrolling='no'*/}
            {/*marginWidth='0'*/}
            {/*marginHeight='0'*/}
            {/*sandbox="allow-scripts"/>*/}
          <object width='800' height='auto' data={this.state.link}/>

        </Dialog>
      );
    }

    return(
      <div>
        <StoreNavBar active="storePromo" storeId={this.props.location.query.storeId} storeName={this.props.params.store}/>
        <div className="card center-content">
          <div className="row col-md-12">
            <h4>Store Promotions/Offers</h4>
            {
              offers.map((item,index) =>
                <div key={index} className="col-md-12 offers-section">
                  <h4 className="order-header">{(item.offer_name).toUpperCase()}</h4>
                  <div className="line"></div>
                  <div className="col-md-12 offers">
                    {
                      item.catalog.map((catalog, index)=>
                        <div key={index} className="col-md-2" style={{cursor: 'pointer'}}>
                          <div className="thumbnail" onClick={() => this.onClick(catalog.flier)}>
                            <img src={catalog.thumbnail}/>
                          </div>
                        </div>
                      )
                    }
                  </div>

                </div>
              )
            }

          </div>
        </div>
        {dialog}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return{
    storeDetails: state.stores.storeDetails
  }
}
export default connect(mapStateToProps, { getStoreDetails })(StorePromo);