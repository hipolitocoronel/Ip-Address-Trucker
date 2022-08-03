import React, {useEffect } from 'react';

import { 
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap
} from 'react-leaflet';

export default function Map({ locat }) {
    const center = {
        lat: locat.location.lat,
        lng: locat.location.lng
    }

    return (
        <MapContainer
            center={center}
            zoom={16}
            scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker position={center} />
        </MapContainer>
    )

}


function LocationMarker({position}) {
    const map = useMap();

    useEffect(()=>{
        map.flyTo(position, map.getZoom());
    }, [position])
    

    return (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}