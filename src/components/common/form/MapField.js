import React from 'react';
import uuidV1 from 'uuid/v1';

import TextField from './TextField';

const styles = {
  map: {
    height: 300,
    width: 500,
    margin: 10
  }
};

class MapField extends React.Component {
  state = {
    address: '',
    mapContainer: `map${uuidV1()}`
  };

  componentDidMount(){
    if (!this.props.value.id) {
      this.getLocation();
    }
    this.initMap();
  }

  getLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.updateLatLngChanged(position.coords.latitude,position.coords.longitude);
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  updateLatLngChanged = (latitude, longitude) => {
    let geocoder = new google.maps.Geocoder;
    this.geocodeLatLng(geocoder, latitude, longitude)
  };

  initMap = () => {
    const location = {lat: parseFloat(this.props.value.latitude), lng: parseFloat(this.props.value.longitude)};
    let map = new google.maps.Map(document.getElementById(`${this.state.mapContainer}`), {
      zoom: 16,
      center: location
    });

    let marker = new google.maps.Marker({
      position: location,
      map: map,
      draggable: true
    });

    map.addListener('click', pos => {
      marker.setPosition(pos.latLng);
      this.updateLatLngChanged(pos.latLng.lat(), pos.latLng.lng());
    });

    marker.addListener('dragend', mouseEvent => {
      this.updateLatLngChanged(mouseEvent.latLng.lat(), mouseEvent.latLng.lng());
    });

  };

  autoComplete = (e) => {
    let autocomplete = new google.maps.places.Autocomplete(document.getElementById('location_search'), {types:['geocode']});

    autocomplete.addListener('place_changed', e => {
      let place = autocomplete.getPlace();
      this.updateLatLngChanged(place.geometry.location.lat(), place.geometry.location.lng());
      this.initMap(place.geometry.location);
    });
  };

  geocodeLatLng = (geocoder, lat, lng) => {
    let latlng = {lat: lat, lng: lng};
    geocoder.geocode({'location': latlng}, (results, status) => {
      if (status === 'OK') {
        if (results[1]) {
          this.setState({address: results[1].formatted_address});
          let newAddress = {
            latitude: lat,
            longitude: lng,
            street: "",
            area: "",
            city: "",
            country: ""
          };
          results[0].address_components.map((a)=> {
            a.types[0] === "route" && (newAddress.street = a.long_name);
            a.types[1] === "sublocality" && (newAddress.area = a.long_name);
            a.types[0] === "locality" && (newAddress.city = a.long_name);
            a.types[0] === "country" && (newAddress.country = a.long_name);
          });
          this.props.setAddress(newAddress);
        } else {
          alert('No results found');
        }
      } else {
        alert('Geocoder failed due to: ' + status);
      }
    });
  };

  updateField = (name, value) => {
    if (name==="address") {
      this.setState({
        [name]: value
      });
      this.autoComplete();
    } else {
      if (this.props.updateField) {
        this.props.updateField(name, value)
      } else {
        this.props.setAddress({
          [name]: value
        });
      }
    }
  };

  render() {

    return (
      <div>
        <TextField
          field="address"
          value={this.state.address}
          label="Search your address"
          updateField={this.updateField}
          id="location_search"
          required={0}
        />

        <div className="form-group">
          <div className="col-md-12" id={this.state.mapContainer} style={styles.map}></div>
        </div>

        <TextField
          field="country"
          value={this.props.value.country}
          label="Country"
          updateField={this.updateField}
          error={this.props.errors.country}
        />

        <TextField
          field="city"
          value={this.props.value.city}
          label="City"
          updateField={this.updateField}
          error={this.props.errors.city}
        />

        <TextField
          field="area"
          value={this.props.value.area}
          label="Area"
          updateField={this.updateField}
          error={this.props.errors.area}
        />

        <TextField
          field="street"
          value={this.props.value.street}
          label="Street Name"
          updateField={this.updateField}
          error={this.props.errors.street}
        />

        <TextField
          id="latitude"
          field="latitude"
          value={`${this.props.value.latitude}`}
          label="Latitude"
          updateField={this.updateField}
          error={this.props.errors.latitude}
        />

        <TextField
          id="longitude"
          field="longitude"
          value={`${this.props.value.longitude}`}
          label="Longitude"
          updateField={this.updateField}
          error={this.props.errors.longitude}
        />

      </div>
    )
  }
}

MapField.propTypes = {
  updateField: React.PropTypes.func,
  value: React.PropTypes.object.isRequired,
  errors: React.PropTypes.object.isRequired
};

export default MapField;