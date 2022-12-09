const weather = require('express').Router();
const axios = require('axios');
require('dotenv').config();

weather.get('/', async (req, res) => {
    try {
        // req.query.city needs to be in form "city, state"
        const response = await axios.get('https://api.weatherbit.io/v2.0/forecast/daily?city=' + req.query.city + '&key=' + process.env.WEATHER_API);
        res.status(200).json(response.data.data);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = weather;