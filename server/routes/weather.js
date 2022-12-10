const weather = require('express').Router();
const axios = require('axios');
require('dotenv').config();

weather.get('/', async (req, res) => {
    try {
        // req.query.city needs to be in form {lat: 38.123, lng: -78.543}
        const response = await axios.get('https://api.weatherbit.io/v2.0/forecast/daily?&lat=' + req.query.lat + '&lon=' + req.query.lng + '&key=' + process.env.WEATHER_API);
        res.status(200).json(response.data.data);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = weather;