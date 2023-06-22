import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, LatLngBounds, LayerGroup } from "leaflet";
import { Button } from "primereact/button";

function Widget7(props) {
  const [center, setcenter] = useState({
    lat: "26.8057227",
    long: "81.0202426",
  });
  //   useEffect(() => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((position) => {
  //         const latitude = position.coords.latitude;
  //         const longitude = position.coords.longitude;
  //         setcenter({ lat: latitude, long: longitude });
  //         console.log(latitude, longitude);
  //       });
  //     } else {
  //       alert("Geolocation is not supported by this browser.");
  //     }
  //   }, []);

  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapContainer
        center={[center.lat, center.long]}
        zoom={14}
        scrollWheelZoom={false}
        style={{ height: "240px", width: "100%", borderRadius: "30px" }}
      >
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />

        <Marker
          position={[center.lat, center.long]}
          icon={
            new Icon({
              iconUrl: "../../images/placeholder.png",
              iconSize: [45, 41],
              iconAnchor: [8, 11],
            })
          }
        ></Marker>
      </MapContainer>
    </div>
  );
}

Map.propTypes = {};

export default Widget7;
