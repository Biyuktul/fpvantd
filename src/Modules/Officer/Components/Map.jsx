import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [position, setPosition] = useState([9.0222, 38.7468]);
  const markerPosition = [9.0222, 38.7468]; // Addis Ababa location
  
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <Marker position={markerPosition}>
        <Popup>
          Addis Ababa
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
