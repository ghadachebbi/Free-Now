import React, { useState } from "react";
import { Marker, InfoWindow } from "react-google-maps";

export default function MapTags(data, img) {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <div data-testid="mapTags">
      {data.map((vehicle) => (
        <Marker
          key={vehicle.id}
          position={{
            lat: Array.isArray(vehicle.coordinates)
              ? vehicle.coordinates[1]
              : vehicle.coordinate.latitude,

            lng: Array.isArray(vehicle.coordinates)
              ? vehicle.coordinates[0]
              : vehicle.coordinate.longitude,
          }}
          onClick={() => {
            setSelectedVehicle(vehicle);
          }}
          icon={{
            url: img,
            scaledSize: new window.google.maps.Size(25, 25),
          }}
        />
      ))}
      {selectedVehicle && (
        <InfoWindow
          position={{
            lat: Array.isArray(selectedVehicle.coordinates)
              ? selectedVehicle.coordinates[1]
              : selectedVehicle.coordinate.latitude,
            lng: Array.isArray(selectedVehicle.coordinates)
              ? selectedVehicle.coordinates[0]
              : selectedVehicle.coordinate.longitude,
          }}
          onCloseClick={() => {
            setSelectedVehicle(null);
          }}
        >
          <div>
            {Object.keys(selectedVehicle)
              .filter(
                (key) => !["id", "coordinate", "coordinates"].includes(key)
              )
              .map((key, i) => (
                <p key={i}>
                  <span>{key}: </span>
                  <span>{selectedVehicle[key]}</span>
                </p>
              ))}
          </div>
        </InfoWindow>
      )}
    </div>
  );
}
