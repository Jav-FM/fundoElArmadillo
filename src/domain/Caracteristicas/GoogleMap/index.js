import React from "react";
import GoogleMapReact from "google-map-react";


const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const GoogleMap = () => {
 

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div style={{ height: '400px', width: '500px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
};

export { GoogleMap };

