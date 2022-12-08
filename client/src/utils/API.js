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
    try {
        const response = await axios.get('https://www.mapquestapi.com/geocoding/v1/address?key=' + process.env.MAPQUEST_API + '&location=' + query);
        let locationData = response.results[0].locations[0].latLng;
        console.log(locationData);
        return locationData;
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
        const response = await axios.get('https://developer.nps.gov/api/v1/parks?q=' + query + '&api_key=' + process.env.NPS_API);
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}

async function npsGetActivities() {
  try {
      const response = await axios.get('https://developer.nps.gov/api/v1/activities?api_key=VsW5K0iIIgUoBLJJejWXL1qmtDOOnKKy7fx22tfG');
      console.log(process.env.NPS_API)
      console.log(response.data);
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
    try {
        const response = await axios.get('https://api.weatherbit.io/v2.0/forecast/daily?city=' + query + '&key=' + process.env.WEATHER_API);
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export default { weather, mapquestGetLatLon, npsSearch, npsGetActivities };
