import axios from 'axios';
import 'https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js'

// mapquest api requests

// mapquest maps functions

// initialize the map object
function initMap(coords) {
    L.mapquest.key = process.env.MAPQUEST_API;
    console.log("map initialized")
    console.log([coords.lat, coords.lng])
    // 'map' refers to a <div> element with the ID map
    let myMap = L.mapquest.map('map', {
        center: [coords.lat, coords.lng],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12
    });
}

// display the map and show the directions
// startPoint and endPoint are STRINGS: "City, State"
function displayMap(startPoint, endPoint) {
    console.log("map updated")
    var directions = L.mapquest.directions();
    directions.route({
        start: startPoint,
        end: endPoint
    });
}

// mapquest geolocation 

/*
function getLatLon(userLocation) {
  var searchTerm = userLocation;
  var requestUrl = 'https://www.mapquestapi.com/geocoding/v1/address?key=Q87JNminvctmB5QAimcXQlzSf33AmhqY&location=' + searchTerm;
  $.ajax({
    url: requestUrl,
    method: 'GET',
  }).then(function (response) {
    locationData = response.results[0].locations[0].latLng;
  })
}
*/

async function mapquestGetLatLon(query) {
    try {
        const response = await axios.get('https://www.mapquestapi.com/geocoding/v1/address?key=' + process.env.MAPQUEST_API + '&location=' + query);
        locationData = response.results[0].locations[0].latLng;
        console.log(locationData)
    } catch (err) {
        console.log(err)
    }
}

// national parks api requests

/*
function findParksRelatedTo(searchTerm) {
  var requestUrl = 'https://developer.nps.gov/api/v1/parks?q=' + searchTerm + '&api_key=VsW5K0iIIgUoBLJJejWXL1qmtDOOnKKy7fx22tfG';
  // get the parks related to the search term gives parkCode fairly limited
  $.ajax({
    url: requestUrl,
    method: 'GET',
  }).then(function (response) {
    parkData = response;
    sortParkData(response);
    displayResults();
  })
}
*/

async function npsSearch(query) {
    try {
        const response = await axios.get('https://developer.nps.gov/api/v1/parks?q=' + query + '&api_key=' + process.env.NPS_API);
        locationData = response.results[0].locations[0].latLng;
        console.log(locationData)
    } catch (err) {
        console.log(err)
    }
}

// weatherbit api requests

/* weatherbit template
function getForecast(userLocation) {
  var cityName = userLocation;
  var requestUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + cityName + '&key=9d63d6881d944cc0b56b419592045f7b'
  $.ajax({
    url: requestUrl,
    method: 'GET',
  }).then(function (response) {
    weatherData = response;
    updateWeather();
  })
}
*/

async function weather(query) {
    try {
        const response = await axios.get('https://api.weatherbit.io/v2.0/forecast/daily?city=' + query + '&key=' + process.env.WEATHER_API);
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

export default { weather, mapquestGetLatLon, npsSearch, initMap, displayMap };
