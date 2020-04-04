import React from 'react'
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapReact from "google-map-react";

const Marker = () => <Icon name="marker" size="big" color="red" />;

const EventDetailedMap = ({ lat, lng }) => {
    const zoom = 14;
    return (
        <Segment attached='bottom'>
            <div style={{ height: "350px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBbHotqLrTYF8Gr61DAuptaX-KH_Y1jbYk" }}
          defaultCenter={{lat, lng}}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
</Segment>
    )
}

export default EventDetailedMap
