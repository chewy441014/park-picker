import axios from 'axios';

// mapquest api requests

/*
function getLatLon(userLocation) {
  var searchTerm = userLocation;
  var requestUrl = 'https://www.mapquestapi.com/geocoding/v1/address?key=MAPQUESTKEY&location=' + searchTerm;
  $.ajax({
    url: requestUrl,
    method: 'GET',
  }).then(function (response) {
    locationData = response.results[0].locations[0].latLng;
  })
}
*/

async function mapquestGetLatLon(query) {
  // expects a string
  try {
    const params = {
      userLocation: query
    }
    const response = await axios.get('/api/mapquest/geoLocation', { params });
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

// national parks api requests

/*
function findParksRelatedTo(searchTerm) {
  var requestUrl = 'https://developer.nps.gov/api/v1/parks?q=' + searchTerm + '&api_key=NPSKEY';
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
    const params = {
      search: query,
    }
    const response = await axios.get('/api/nps/search', { params });
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function npsGetActivities() {
  try {
    const response = await axios.get('/api/nps/getActivities');
    return response.data;
  } catch (err) {
    console.log(err);
    return err; 
  }
}

// weatherbit api requests

/* weatherbit template
function getForecast(userLocation) {
  var cityName = userLocation;
  var requestUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?city=' + cityName + '&key=WEATHERKEY'
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
  // expects query to be {lat: 23.112, lng: 12313}
  // console.log(query)
  try {
    const params = {
      lat: query.lat,
      lng: query.lng
    }
    const response = await axios.get('/api/weather', { params });
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

const apicalls = { weather, mapquestGetLatLon, npsSearch, npsGetActivities };
export default apicalls;
