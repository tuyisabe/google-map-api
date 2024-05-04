import React, {useState} from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Marker, Polyline } from '@react-google-maps/api';

const MapComponent = ({ waypoints }) => {
    const mapStyles = {
        height: '72vh',
        width: '100%'
    };
    const [directions, setDirections] = useState(null);
    const markers = waypoints.map((waypoint, index) => (
        <Marker key={`marker-${index}`} position={waypoint} icon='https://png.pngtree.com/png-vector/20220517/ourmid/pngtree-blank-round-sticker-template-png-image_4684569.png'/>
    ));

    const path = waypoints.map(waypoint => ({ lat: waypoint.lat, lng: waypoint.lng }));
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
        <LoadScript googleMapsApiKey="AIzaSyBG6bUNBCd9TmMpvvYu7Ymj5iHQzo9Pkdk">
            <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={waypoints[0]} options={{streetViewControl:false,mapTypeControl:false,zoomControl:false,fullscreenControl:false}}>
                <DirectionsService options={directionsOptions} callback={handleDirections} />
                {directions && <DirectionsRenderer directions={directions} />}
                {markers}
                <Polyline path={path} options={{ strokeColor: 'blue' }} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
