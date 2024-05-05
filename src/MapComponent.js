import React, {useState} from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Marker } from '@react-google-maps/api';

const MapComponent = ({ waypoints }) => {
    const mapStyles = {
        height: '71vh',
        width: '100%'
    };
    const [directions, setDirections] = useState(null);
    const markers = waypoints.map((waypoint, index) => (
        <Marker key={`marker-${index}`} position={waypoint} icon=''/>
    ));

    const directionsOptions = {
        origin: waypoints[0],
        destination: waypoints[waypoints.length - 1],
        waypoints: waypoints.slice(1, -1).map(waypoint => ({ location: waypoint })),
        travelMode: 'DRIVING',
    };

    const handleDirections = (result, status) => {
        if (status === 'OK') {
            setDirections(result);
        } else {
            console.error('Error fetching directions:', status);
        }
    };
    return (
        <div style={{height:'71vh'}}>
        <LoadScript googleMapsApiKey="AIzaSyBG6bUNBCd9TmMpvvYu7Ymj5iHQzo9Pkdk">
            <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={waypoints[0]} options={{streetViewControl:false,mapTypeControl:false,zoomControl:false,fullscreenControl:false}}>
                <DirectionsService options={directionsOptions} callback={handleDirections} />
                {directions && <DirectionsRenderer directions={directions} />}
                {markers}
            </GoogleMap>
        </LoadScript>
        </div>
    );
};

export default MapComponent;
