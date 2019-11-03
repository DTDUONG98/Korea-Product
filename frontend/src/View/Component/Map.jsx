import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
// import bando from '../../../public/background/map.PNG'
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 9
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%' , background: 'url(./background/map.PNG)'}}>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: '1' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text="My Marker"
          />
        </GoogleMapReact> */}
      </div>
    );
  }
}
export default SimpleMap;