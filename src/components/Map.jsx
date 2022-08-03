import React, {useEffect, useState } from 'react';

import { 
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from 'react-leaflet';

export default function Map({ locat }) {
    const center = {
        lat: locat.location.lat,
        lng: locat.location.lng
    }

    const [map, setMap] = useState(null);

    return (
        <MapContainer
            center={center}
            zoom={16}
            scrollWheelZoom={false}
            ref={setMap}
            >
            
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker position={center}  map={map}/>
        </MapContainer>
    )

}


function LocationMarker({position, map}) {
    useEffect(()=>{
        if(map!==null){
            map.flyTo(position, map.getZoom())
        }
        
    }, [position, map]);
    
      return (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}