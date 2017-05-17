/**
 * Created by bikash on 3/30/17.
 */
import React, { Component } from 'react';

class PlaceAutoComplete extends Component {

  state = {
    place: ''
  };

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
    this.autoComplete();
  };

  autoComplete = (e) => {
    var autocomplete = new google.maps.places.Autocomplete(document.getElementById('location_search'), {types:[ 'address'],componentRestrictions: {country: "AE"}});

    autocomplete.addListener('place_changed', e => {
      var place = autocomplete.getPlace();

      this.props.updatePlace(place);
      this.setState({place: place.formatted_address});
    });
  };

  render() {
    return(
      <div className="form-group place-auto-complete">
        <input style={this.props.style}
               type="text"
               id="location_search"
               className="form-control"
               onChange={this.handleChange}
               value={this.state.place}
               name='place'
               placeholder="Search location..."
        />
      </div>
    )
  }
}

PlaceAutoComplete.propTypes = {
  updatePlace: React.PropTypes.func.isRequired
};

PlaceAutoComplete.defaultProps = {
  style: {},
  width: 'auto',
};

export default PlaceAutoComplete;