import React, { useContext } from "react";
import { Context } from "../Context";
import MapTags from "../components/MapTags";

import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

export function Map() {
  const { freeVehicles, shareVehicles } = useContext(Context);

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 53.553841, lng: 9.99165 }}
    >
      {MapTags(shareVehicles, `/share_now.png`)}
      {MapTags(freeVehicles, `/free_now.png`)}
    </GoogleMap>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapPage() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC08usDLfvijxlK19gjMrywKRuFqX0fv0E`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
