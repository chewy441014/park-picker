import React, { useEffect, useState } from 'react';
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
    L.mapquest.key = data;

    myMap = L.mapquest.map('map', {
      center: [userLocation.lat, userLocation.lng],
      layers: L.mapquest.tileLayer('map'),
      zoom: 12
    });

  }

  // display the map and show the directions
  function displayMap(startPoint, endPoint) {
    console.log("map updated")
    let directions = L.mapquest.directions();
    directions.route({
      start: [startPoint.lat, startPoint.lng],
      end: [endPoint.lat, endPoint.lng]
    });
  }

  useEffect(async () => {

    await initMap();
    displayMap(userLocation, parkLocation);
  }, []);


  return (
    <div id="map">
      {/* This is going to be a little complicated I think, this is where the map goes */}

    </div>
  );
}

/*
function initMap() {
  L.mapquest.key = 'Q87JNminvctmB5QAimcXQlzSf33AmhqY';
  console.log("map initialized")
  console.log([locationData.lat, locationData.lng])
  // 'map' refers to a <div> element with the ID map
  myMap = L.mapquest.map('map', {
    center: [locationData.lat, locationData.lng],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });
}

// display the map and show the directions
function displayMap(startPoint, endPoint) {
  console.log("map updated")
  var directions = L.mapquest.directions();
  directions.route({
    start: startPoint,
    end: endPoint
  });
}

// Function to display Park Details
function displayParkDetails(findIndexOf) {
  if (myMap) {
    myMap.remove();
  }
  initMap();
  var indexOfData = parseInt(findIndexOf);
  displayMap(userLocation, parkData.data[indexOfData].addresses[0].city + ", " + parkData.data[indexOfData].addresses[0].stateCode);

*/

export default Map;