import React from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer,Marker } from '@react-google-maps/api';
import Box from '@mui/material/Box';
const MapComponent = ({ waypoints }) => {
    const mapStyles = {
        height: '65vh',
        width: '100%'
    };
console.log(waypoints);
    return (
        <Box>
            <GoogleMap mapContainerStyle={mapStyles} zoom={14} center={waypoints[0]}mapT >
                <DirectionsService options={{ waypoints, optimizeWaypoints: true }} />
                <DirectionsRenderer />
                 <Marker  position={waypoints[0]} />                                                                                    
            </GoogleMap>
            </Box>
    );
};

export default MapComponent;
