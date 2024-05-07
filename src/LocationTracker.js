import React, { useState, useEffect } from 'react';

const LocationTracker = ({ waypoints }) => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [eta, setEta] = useState(null);
    const [dist ,setDist] = useState(null);
    const [nextStopData,setNextStopData] =useState(null);
    const averageSpeedKMH = 30; 

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(
            position => {
                setCurrentLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
            },
            error => {
                console.error('Error getting geolocation:', error);
            },
            { enableHighAccuracy: true }
        );

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    useEffect(() => {
        if (!currentLocation) return;

        // Calculate distance between current location and next stop
        const nextStop = waypoints.find((waypoint, index) => index > 0 && index < waypoints.length );
        const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
            new window.google.maps.LatLng(currentLocation.lat, currentLocation.lng),
            new window.google.maps.LatLng(nextStop.lat, nextStop.lng),
            
        );
        setDist(distance);

        setNextStopData(nextStop.label);
        // Calculate ETA based on distance and average speed
        const etaSeconds = (distance / (averageSpeedKMH * 1000)) * 3600; // Distance (km) / Speed (km/h) * 3600 seconds
        const etaMinutes = Math.round(etaSeconds / 60);
        setEta(etaMinutes);
        
    }, [currentLocation, waypoints]);

    return (
        <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',gap:-10}}>
            <div ><p style={{fontWeight:'bold'}}>Nyabugogo - kimironko</p>
               <p style={{marginTop:'-18px'}}> Next Stop: {nextStopData} </p>
           {eta !== null && <p style={{marginTop:'-18px'}}> Distance: {Math.round(dist/1000)} km &nbsp;&nbsp;  Time: {eta} minutes</p>}</div> 
        </div>
    );
};

export default LocationTracker;
