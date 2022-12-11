import React, { useEffect } from 'react';

function Map(props) {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js";
        script.async = true;
        document.body.appendChild(script);
      return () => {
          document.body.removeChild(script);
        }
      }, []);

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