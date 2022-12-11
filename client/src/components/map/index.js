import React from 'react';

function Map(props) {

    // the first coordinate pair is park coords
    const parkLocation = props.coords[0];
    // the second coordinate pair is user location
    const userLocation = props.coords[1];
    console.log(parkLocation)
    console.log(userLocation)
    
    return (
        <div id="map"> 
            {/* This is going to be a little complicated I think, this is where the map goes */}
        </div>
    );
}

export default Map;