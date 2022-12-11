import React from 'react';
import "./style.css"

function WeatherCard(props) {
    const weather = props.weather;

    return (
        <div className='detialcard'>
            <div className=''>
                <p><span id="weatherIcon"><img className='weatherIcon' src={"https://www.weatherbit.io/static/img/icons/" + weather.weather.icon + ".png"} alt={weather.weather.description} /></span></p>
                <p>Temperature: <span id="temp">{weather.high_temp}</span></p>
                <p>Wind: <span id="wind">{weather.wind_spd}</span></p>
                <p>Humidity: <span id="humidity">{weather.rh}</span></p>
                <p>Chance of Rain: <span id="rain">{weather.pop}</span></p>
                <p>Description: <span id="desc">{weather.weather.description}</span></p>
                <p>Visibility: <span id="vis">{weather.vis}</span></p>
            </div>
        </div>
    );
}

export default WeatherCard