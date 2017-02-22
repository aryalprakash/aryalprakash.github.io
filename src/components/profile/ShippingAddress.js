/**
 * Created by bikash on 2/19/17.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dialog from 'rc-dialog';

import ProfileSideBar from './ProfileSideBar';
import ShippingAddressForm from './ShippingAddressForm';
import { addShippingAddress, getShippingAddress, deleteShippingAddress } from '../../actions/shippingActions';

const shippingAddress =[
  {
    name: "Bikash Shrestha",
    country: "Nepal",
    city: "Kathmandu",
    type: "work",
    area: "Sankhamul",
    street: "Subekshya Marg",
    buildingName: "Ravibhawan",
    landmark: "Sankhamul Bridge",
    floorNo: 3,
    apartmentNo: 123
  },
  {
    name: "Bikash Shrestha",
    country: "Nepal",
    city: "Kathmandu",
    type: "villa",
    area: "Sankhamul",
    street: "Subekshya Marg",
    buildingName: "Ravibhawan",
    landmark: "Sankhamul Bridge",
    floorNo: 3,
    apartmentNo: 123
  },

];

class ShippingAddress extends Component{
  constructor(props){
    super(props);
    this.state ={
      visible: false,
      destroyOnClose: false,

    };

    this.onClick = this.onClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentDidMount(){
    this.props.getShippingAddress().then(
      (success) => {
        console.log("shipping addresses got successfully");
      },
      (err) => {
        // alert('error');
      }
    )
  }

  onClick() {
    this.setState({
      visible: true,
    });
  }

  onClose() {
    this.setState({
      visible: false,
    });
  }

  onDestroyOnCloseChange(e) {
    this.setState({
      destroyOnClose: e.target.checked,
    });
  }

  deleteShippingAddress = (id) => {
    console.log('shipping id',id);
    this.props.deleteShippingAddress(id).then(
      (success) => {
        console.log('successfully deleted',success);
      },
      (err) => {
        alert('error');
      }
    )
  };

  render(){
    let dialog;
    // let {shippingAddress} = this.props;
    // console.log('shipping Addresses', shippingAddress);

    if (this.state.visible || !this.state.destroyOnClose) {
      dialog = (
        <Dialog
          visible={this.state.visible}
          animation="zoom"
          maskAnimation="fade"
          onClose={this.onClose}
          style={{ width: 840 }}
          title={<div style={{marginTop: 20, fontSize: 17}}> Add Shipping Address</div>}
        >
          <ShippingAddressForm addShippingAddress={this.props.addShippingAddress}/>
        </Dialog>
      );
    }

    return(
          <div className="main-content">
            <ProfileSideBar active="shipping"/>
            <div className="card center-content">
              <div className="row">
                { shippingAddress &&
                shippingAddress.map((item, index)=>
                  <div key={index} className="col-md-5">
                    <div className="thumbnail shipping-address">
                      <h4>Shipping Address</h4>
                      <div className="crud">
                        <span className="fa fa-edit" style={{color: "#0074D9"}}/>
                        <span className="fa fa-remove" onClick={()=> this.deleteShippingAddress(item.id)} style={{color: "#c9302c"}} />
                      </div>
                      <div className="line"></div>

                      <p>Name: {item.name} </p>
                      <p>Phone No: {item.mobile_number} </p>
                      <p>Country: {item.country} </p>
                      <p>Address Type: {(item.type).toUpperCase()}</p>
                      <p>City: {item.city} </p>
                      <p>Area: {item.area} </p>
                      {item.company && <p>Company: {item.company}</p>}
                      <p>Street Name/No: {item.street} </p>
                      <p>Building Name/No: {item.building} </p>
                      <p>Nearest Landmark: {item.nearest_landmark} </p>
                      {item.floor && <p>Floor No: {item.floor} </p>}
                      {item.apartment && <p>Apartment No: {item.apartment} </p>}
                      {item.room && <p>Room No: {item.room} </p>}
                    </div>
                  </div>
                )
                }
                {shippingAddress && shippingAddress.length == 4 ?
                  <div className="col-md-10">
                    <h4 className="alert alert-danger"><i>You can only Add 4 Shipping Addresses</i></h4>
                  </div>:
                  <div className="col-md-3" style={{marginTop: 15}}>
                    <div className="thumbnail add-address" onClick={this.onClick}>
                      <span className="fa fa-plus-square-o"></span>
                      <p>Add Address</p>
                    </div>
                  </div>
                }

              </div>

            </div>
            {dialog}

          </div>
    );
  }
}

ShippingAddress.propTypes = {
  addShippingAddress: React.PropTypes.func.isRequired
};

function mapStateToProps(state){
  return {
    shippingAddress: state.shippingAddress
  }
}

export default connect(mapStateToProps, { addShippingAddress, getShippingAddress, deleteShippingAddress })(ShippingAddress);