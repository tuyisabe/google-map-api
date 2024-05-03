import React from 'react';
import MapComponent from './MapComponent';
import LocationTracker from './LocationTracker';
import Header from './components/Header';
import BottomBar from './components/BottomBar';

const waypoints = [
    { lat: -1.939826787816454, lng: 30.0445426438232 ,lebel:'nyabugogo'},  // Nyabugogo
    { lat: -1.9355377074007851, lng: 30.060163829002217 ,label:'A'},  // Stop A
    { lat: -1.9358808342336546, lng: 30.08024820994666 ,label:'B'},  // Stop B
    { lat: -1.9489196023037583, lng: 30.092607828989397 ,label:'C'},  // Stop C
    { lat: -1.9592132952818164, lng: 30.106684061788073 ,label:'D'},  // Stop D
    { lat: -1.9487480402200394, lng: 30.126596781356923 ,label:'E'},  // Stop E
    { lat: -1.9365670876910166, lng: 30.13020167024439 ,label:'kimironko'}  // Kimironko
];

function App() {
    return (
        <div className="App">
            <Header/>
            <LocationTracker waypoints={waypoints} />
            <MapComponent waypoints={waypoints} />
            <BottomBar/>
        </div>
    );
}

export default App;

