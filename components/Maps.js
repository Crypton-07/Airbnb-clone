import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import { Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
function Maps({ searchResults }) {
  //Transform searchResults onject into the {latitude : 52.5785, longitude : 11.258}

  const cordinates = searchResults.map((res) => ({
    latitude: res.lat,
    longitude: res.long,
  }));

  const center = getCenter(cordinates);
  const [viewPort, setViewPort] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
  });

  const [selectedLocation, setSelectedLocation] = useState({});
  // console.log(selectedLocation);

  return (
    <Map
      mapStyle="mapbox://styles/crypton07/clfwpgf9w019x01pek5pliqdp"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewPort}
      onMove={(nextViewPort) => setViewPort(nextViewPort.viewPort)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {/* This is the popup should show if i click the selected location */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={false}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}

export default Maps;
