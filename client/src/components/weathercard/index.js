import React from 'react';

function WeatherCard(props) {
    console.log(props)
    
    return (
        <div>
            <p>Temperature: <span id="temp"></span></p>
            <p>Wind: <span id="wind"></span></p>
            <p>Humidity: <span id="humidity"></span></p>
            <p>Chance of Rain: <span id="rain"></span></p>
            <p><span id="weatherIcon"></span></p>
            <p>Description: <span id="desc"></span></p>
            <p>Visibility: <span id="vis"></span></p>
        </div>
    );
}

export default WeatherCard