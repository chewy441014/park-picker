import React, { useEffect } from 'react';
import API from '../../utils/API';
import './style.css';

function Map(props) {
  // the first coordinate pair is park coords
  const parkLocation = props.coords[0];
  // the second coordinate pair is user location
  const userLocation = props.coords[1];
  let myMap;

  async function initMap() {
    const data = await API.getMapquest();
    window.L.mapquest.key = data;
    myMap = window.L.mapquest.map('map', {
      center: [userLocation.lat, userLocation.lng],
      layers: window.L.mapquest.tileLayer('map'),
      zoom: 12
    });
  }

  // display the map and show the directions
  function displayMap(startPoint, endPoint) {
    console.log("map updated")
    let directions = window.L.mapquest.directions();
    directions.route({
      start: [startPoint.lat, startPoint.lng],
      end: [endPoint.lat, endPoint.lng]
    });
  }

  useEffect(async () => {
    const script = document.createElement('script');
    script.src = "https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js";
    const link = document.createElement('link');
    link.href ="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css"
    link.rel = "stylesheet"
    link.type = "text/css"
    document.head.appendChild(link)
    document.body.appendChild(script);
    await initMap();
    displayMap(userLocation, parkLocation);
  }, []);


  return (
    <div id="map">
      {/* This is going to be a little complicated I think, this is where the map goes */}
    </div>
  );
}

export default Map;