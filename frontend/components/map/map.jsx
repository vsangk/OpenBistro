import React from 'react';
import { withRouter } from 'react-router';

class DetailsMap extends React.Component {
  constructor(props) {
    super(props);

    this.geocoder = new google.maps.Geocoder();
    this.codeAddress = this.codeAddress.bind(this);
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    let latlng = this.codeAddress();

    const mapOptions = {
      center: latlng,
      zoom: 16
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  codeAddress() {
    // let address = this.props.address;
    let address = '160 Spear Street #14, San Francisco, CA 94105';
    this.geocoder.geocode( { 'address': address}, (results, status) => {
      if (status === 'OK') {
        this.map.setCenter(results[0].geometry.location);
        let marker = new google.maps.Marker({
            map: this.map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  render() {
    return <div className="map" ref="map">Map</div>;
  }
}

export default withRouter(DetailsMap);
