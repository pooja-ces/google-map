import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const Maps = ({ locations = [], height, zoom, fullscreenControl, apiKey }) => {
    const handleMapLoad = (map) => {
        if (locations?.length > 1) {
            const bounds = new window.google.maps.LatLngBounds();
            locations.forEach((location) => {
                bounds.extend(new window.google.maps.LatLng(location.lat, location.lng));
            });
            map.fitBounds(bounds);
        } else {
            map.setCenter(new window.google.maps.LatLng(locations[0].lat, locations[0].lng));
        }
    };

    return (
        <APIProvider apiKey={apiKey}>
            <Map
                zoom={zoom}
                style={{ height: height, width: '100%' }}  // Inline styles for container size
                options={{
                    fullscreenControl: fullscreenControl,
                    zoomControl: true,
                }}
                onLoad={handleMapLoad}
            >
                {locations.map((location) => (
                    <Marker position={location} key={crypto.randomUUID()} />
                ))}
            </Map>
        </APIProvider >
    );
};

export default Maps;
