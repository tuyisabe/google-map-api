import React, { useState } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const MapComponent = ({ waypoints }) => {
    const mapStyles = {
        height: '71vh',
        width: '100%'
    };
    const [directions, setDirections] = useState(null);

    const directionsOptions = {
        origin: waypoints[0],
        destination: waypoints[waypoints.length - 1],
        waypoints: waypoints.slice(1, -1).map(waypoint => ({ location: waypoint })),
        travelMode: 'DRIVING',
    };

    const directionsRendererOptions = {
        polylineOptions: {
            strokeColor: '#035b99', // Specify your desired color here (e.g., red)
            strokeOpacity: 1,
            strokeWeight: 4,
        },
    };

    const handleDirections = (result, status) => {
        if (status === 'OK') {
            setDirections(result);
        } else {
            console.error('Error fetching directions:', status);
        }
    };

    return (
        <div style={{ height: '71vh' }}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={waypoints[0]}
                options={{ streetViewControl: false, mapTypeControl: false, fullscreenControl: false }}
            >
                <DirectionsService options={directionsOptions} callback={handleDirections} />
                {directions && <DirectionsRenderer directions={directions} options={directionsRendererOptions} />}
            </GoogleMap>
        </div>
    );
};

export default MapComponent;
