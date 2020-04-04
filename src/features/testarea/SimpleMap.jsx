import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "semantic-ui-react";

const AnyReactComponent = () => <Icon name="marker" size="big" color="red" />;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 29.7249,
      lng: -95.5599
    },
    zoom: 5
  };

  render() {
    const { latlng } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "350px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBbHotqLrTYF8Gr61DAuptaX-KH_Y1jbYk" }}
          defaultCenter={latlng}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={29.7249} lng={-95.5599} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
