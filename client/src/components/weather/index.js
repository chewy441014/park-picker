import React from 'react';
import WeatherCard from '';

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

export default Weather