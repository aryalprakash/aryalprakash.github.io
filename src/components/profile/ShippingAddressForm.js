/**
 * Created by bikash on 2/19/17.
 */
import React, {Component} from 'react';

let userLocation = {lat: 27.6524867, lng: 85.4555674};

class ShippingAddressForm extends Component{
  state ={
    name: '',
    mobile_number: '',
    address: '',
    type: '',
    country: '',
    city: '',
    area: '',
    street: '',
    building: '',
    nearest_landmark: '',
    floor: '',
    apartment: '',
    company: '',
    room: '',
    latitude: '',
    longitude: '',
  };

  componentDidMount(){
    this.getLocation();
    this.initMap();
  }

  getLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        userLocation.lat = position.coords.latitude;
        userLocation.lng = position.coords.longitude;
        this.updateLatLngChanged(position.coords.latitude,position.coords.longitude);
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  updateLatLngChanged = (latitude, longitude) => {
    let geocoder = new google.maps.Geocoder;
    this.setState({
      latitude: latitude,
      longitude: longitude
    });
    this.geocodeLatLng(geocoder, latitude, longitude)
  };

  initMap = (location = userLocation) => {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: location
    });

    var marker = new google.maps.Marker({
      position: location,
      map: map,
      draggable: true
    });

    map.addListener('click', pos => {
      marker.setPosition(pos.latLng);
      this.updateLatLngChanged(pos.latLng.lat(), pos.latLng.lng())
    });

    marker.addListener('dragend', mouseEvent => {
      this.updateLatLngChanged(mouseEvent.latLng.lat(), mouseEvent.latLng.lng())
    });

  };

  autoComplete = (e) => {
    var autocomplete = new google.maps.places.Autocomplete(document.getElementById('location_search'), {types:[ 'address']});

    autocomplete.addListener('place_changed', e => {
      var place = autocomplete.getPlace();
      console.log(place);
      this.updateLatLngChanged(place.geometry.location.lat(), place.geometry.location.lng());

      this.initMap(place.geometry.location);
    });
  };

  geocodeLatLng = (geocoder, lat, lng) => {
    var latlng = {lat: lat, lng: lng};
    geocoder.geocode({'location': latlng}, (results, status) => {
      if (status === 'OK') {
        if (results[1]) {
          var x = results[0].address_components.filter((a)=> {
            return a.types[0] === "route" || a.types[1] === "sublocality" || a.types[0] === "locality" || a.types[0] === "country"
          });

          console.log('address',x);

          this.setState({
            address: results[1].formatted_address,
            street: x[0].long_name,
            area: x[1].long_name,
            city: x[2].long_name,
            country: x[3].long_name
          })
        } else {
          alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
    });
  };

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
    this.autoComplete();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);

    this.props.addShippingAddress(this.state).then(
      (success) => {
        console.log('Added Successfully');
        this.context.router.push('/user/:user/profile');
      },
      (error) => {
        // alert('error');
      }
    );
  };

  render(){
    return(
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-md-2 control-label">Full Name</label>
            <div className="col-md-4">
              <input className="form-control" name="name" type="text" value={this.state.name} placeholder="Enter Full Name" onChange={this.handleChange} required/>
            </div>
            <label className="col-md-2 control-label">Phone No.</label>
            <div className="col-md-4">
              <input className="form-control" name="mobile_number" type="text" value={this.state.mobile_number} placeholder="Enter Your Phone Number" onChange={this.handleChange} required/>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">Address</label>
            <div className="col-md-4">
              <input id="location_search" className="form-control" name="address" type="text" value={this.state.address} placeholder="Enter Your Address" onChange={this.handleChange} required/>
            </div>
            <label className="col-md-2 control-label">Address Type</label>
            <div className="col-md-4">
              <select className="form-control" name="type" value={this.state.type} onChange={this.handleChange}>
                <option>Choose Address Type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="work">Work Place</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12" id="map"></div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">Country</label>
            <div className="col-md-4">
              <input className="form-control" name="country" type="text" value={this.state.country} placeholder="Enter Your Country" onChange={this.handleChange} required/>
            </div>
            <label className="col-md-2 control-label">City</label>
            <div className="col-md-4">
              <input className="form-control" name="city" type="text" value={this.state.city} placeholder="Enter Your City" onChange={this.handleChange} required/>
            </div>

          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">Latitude</label>
            <div className="col-md-4">
              <input id="latitude" className="form-control" type="text" value={this.state.latitude} disabled="true" placeholder="Latitude" required/>
            </div>
            <label className="col-md-2 control-label">Longitude</label>
            <div className="col-md-4">
              <input id="longitude" className="form-control" type="text" value={this.state.longitude} disabled="true" placeholder="Longitude" required/>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">Area</label>
            <div className="col-md-4">
              <input className="form-control" name="area" type="text" value={this.state.area} placeholder="Enter Area" onChange={this.handleChange} required/>
            </div>

            <label className="col-md-2 control-label">Street</label>
            <div className="col-md-4">
              <input className="form-control" name="street" type="text" value={this.state.street} placeholder="Enter Street Name" onChange={this.handleChange}/>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-2 control-label">Landmark</label>
            <div className="col-md-4">
              <input className="form-control" name="nearest_landmark" type="text" value={this.state.nearest_landmark} placeholder="Enter Nearest Landmark" onChange={this.handleChange} required/>
            </div>
            <label className="col-md-2 control-label">Building</label>
            <div className="col-md-4">
              <input className="form-control" name="building" type="text" value={this.state.building} placeholder="Enter Building Name/No." onChange={this.handleChange}/>
            </div>
          </div>

          {
            this.state.type === "apartment" &&
            <div className="form-group">
              <label className="col-md-2 control-label">Apartment No.</label>
              <div className="col-md-4">
                <input className="form-control" name="apartment" type="text" value={this.state.apartment} placeholder="Enter Apartment No." onChange={this.handleChange}/>
              </div>
              <label className="col-md-2 control-label">Floor No.</label>
              <div className="col-md-4">
                <input className="form-control" name="floor" type="text" value={this.state.floor} placeholder="Enter Floor No." onChange={this.handleChange}/>
              </div>
            </div>
          }

          {
            this.state.type === "work" &&
            <div className="form-group">
              <label className="col-md-2 control-label">Company</label>
              <div className="col-md-4">
                <input className="form-control" name="company" type="text" value={this.state.company} placeholder="Enter Company Name" onChange={this.handleChange}/>
              </div>
              <label className="col-md-2 control-label">Room No.</label>
              <div className="col-md-4">
                <input className="form-control" name="room" type="text" value={this.state.room} placeholder="Enter Room No." onChange={this.handleChange}/>
              </div>
            </div>
          }


          <div className="form-group">
            <div className="col-md-3 col-md-offset-9">
              <button className="submit-button" type="submit"> Save</button>
            </div>
          </div>

        </form>
      </div>
    );

  }
}

ShippingAddressForm.propTypes = {
  addShippingAddress: React.PropTypes.func.isRequired
};

ShippingAddressForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ShippingAddressForm;