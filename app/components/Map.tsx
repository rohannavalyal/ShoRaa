'use client';

import L from "leaflet"
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// @ts-expect-error - Leaflet's type definitions don't include _getIconUrl property
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,       
    iconRetinaUrl: markerIcon2x, 
    shadowUrl: markerShadow,
});

interface MapProps {
  center?: number[]; // Optional center coordinates [latitude, longitude]
}


const Map:React.FC<MapProps> =({
    center
}) =>{
    return (
        <MapContainer
        center={center as L.LatLngExpression || [51, -0.09]} 
        zoom={center ? 4 : 2}
        scrollWheelZoom={false}
        className="h-[35vh] rounded-lg"
        >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {center &&(
            <Marker position={center as L.LatLngExpression} 
        />
        )}
        </MapContainer>
    )
}


export default Map;