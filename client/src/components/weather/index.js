import React, { useEffect, useState } from "react";
import WeatherCard from "../weathercard";
import API from '../../utils/API.js';

function Weather(props) {

  const wObj = () => {
    return {
      high_temp: '21',
      wind_spd: '3',
      rh: '89',
      pop: '25',
      weather: {
        icon: 'c02d',
        description: 'Its hot'
      },
      vis: '21',
      ts: Math.random() * 100
    }
  }

  const dWeather = [wObj(), wObj(), wObj(), wObj(), wObj()]

  // console.log(props)
  const [weather, setWeather] = useState(dWeather);

  useEffect(() => {
    getWeather(props.coord);
  }, [props]);

  const getWeather = async (gpsCoords) => {
    // expects gpsCoords = {lat: 12.123131, lng: 234242}
    // const response = await API.weather(gpsCoords);
    const response = dWeather;
    setWeather(response.slice(0, 5));
  }

  return (
    <div>
      {/* {(() => {
        if (weather) {
          weather.map((day) => {
            console.log('iterating the correct way');
            return<WeatherCard weather={day} key={day} />
          })
        } else {
          // fill with default data
          console.log('------entering for loop--------------')
          for (let i = 0; i < 5; i++) {
            console.log('show weather card');
            <WeatherCard key={i}/>
          }
        }
      })()} */}
      {weather &&
        weather.map((day) => (
          <WeatherCard weather={day} key={day.ts} />
        ))
      }


    </div>
  );
}

export default Weather;
