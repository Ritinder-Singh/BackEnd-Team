import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{
          width: "100%",
          height: "100%"
        }}
        zoom={10}
        center={{
          lat: 28.704060,
          lng: 77.102493
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBrPKkM7tGSy4siiz3ODALNl7vxfBmbwiU"
})(MapContainer);
