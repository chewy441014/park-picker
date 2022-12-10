import React from "react";
import WeatherCard from "../weathercard";
import API from '../../utils/API.js';

const getWeather = async (gpsCoords) => {
  // expects gpsCoords = {lat: 12.123131, lng: 234242}
  const response = await API.weather(gpsCoords);
  return response;
}

function Weather() {
  return (
    <div>
      {/* Using something similar to
       * const numbers = [1, 2, 3, 4, 5];
       * const listItems = numbers.map((number) =>
       *   <li>{number}</li>
       * );
       * display five weather cards
       * temporarily display five blank weather cards */}
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </div>
  );
}

export default Weather;
