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
      width: '70%',
    };

  }

  onClick(src, type) {
    console.log("flier path", src);
    let width;
    if(screen.width < 480){
      width = '95%';
    }
    else {
      width = '60%'
    }

    this.setState({
      visible: true,
      width: width,
      link: 'http://192.168.10.7:8000'+src,
      file_type: type
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
      link: '',
      file_type: '',
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
          style={{ width: this.state.width, marginLeft: 'auto', marginRight: 'auto' }}
          title={<div style={{marginTop: 15}}> <h4>Store Promotions</h4></div>}
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
          {
            this.state.file_type === 'pdf' &&
              <object width='100%' height='100%' data={this.state.link} type="application/pdf">
                {/*Sorry your browser does not support the content*/}
              </object>
          }
          {
            this.state.file_type === 'image' &&
             <img width='100%' height='100%' src={this.state.link}/>

          }


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
                <div key={index} className="col-md-12 col-sm-12 col-xs-12 offers-section">
                  <h4 className="order-header">{(item.offer_name).toUpperCase()} <span className="align-right">Ends in: {item.end_date}</span></h4>

                  <div className="line"></div>
                  <div className="offer-sec offers">
                    {
                      item.catalog.map((catalog, index)=>
                        <div key={index} className="col-md-3 col-sm-6 col-xs-6" style={{cursor: 'pointer'}}>
                          <div className="thumbnail" onClick={() => this.onClick(catalog.flier, catalog.file_type)}>
                            <img src={'http://192.168.10.7:8000'+catalog.thumbnail}/>

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