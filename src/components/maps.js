import React, { Component } from 'react'

export default  class GMap extends Component {
    state = { zoom: 11 };

    static propTypes() {
        initialCenter: React.PropTypes.objectOf(React.PropTypes.number).isRequired
    }

    render() {
        return <div className="GMap">
            {/*<div className='UpdatedText'>*/}
                {/*<p>Current Zoom: { this.state.zoom }</p>*/}
            {/*</div>*/}
            <div className='GMap-canvas' ref="mapCanvas">
            </div>
        </div>
    }

    componentDidMount() {
        // create the map, marker and infoWindow after the component has
        // been rendered because we need to manipulate the DOM for Google =(
        this.map = this.createMap()
        this.marker = this.createMarker()
        this.infoWindow = this.createInfoWindow()

        // have to define google maps event listeners here too
        // because we can't add listeners on the map until its created
        google.maps.event.addListener(this.map, 'zoom_changed', ()=> this.handleZoomChange())
    }

    // clean up event listeners when component unmounts
    componentDidUnMount() {
        google.maps.event.clearListeners(map, 'zoom_changed')
    }

    createMap() {
        let mapOptions = {
            zoom: this.state.zoom,
            center: this.mapCenter()
        }
        return new google.maps.Map(this.refs.mapCanvas, mapOptions)
    }

    mapCenter() {
        return new google.maps.LatLng(
            this.props.initialCenter.lat,
            this.props.initialCenter.lng
        )
    }

    createMarker() {
        return new google.maps.Marker({
            position: this.mapCenter(),
            map: this.map
        })
    }

    createInfoWindow() {
        // let contentString = "<div class='InfoWindow'>"{this.props.placeProp}"</div>"
        return new google.maps.InfoWindow({
            map: this.map,
            anchor: this.marker,
            content: this.props.placeProp
        })
    }

    handleZoomChange() {
        this.setState({
            zoom: this.map.getZoom()
        })
    }
}
