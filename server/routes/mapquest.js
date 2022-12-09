const mapquest = require('express').Router();
const axios = require('axios');
require('dotenv').config();

mapquest.get('/geoLocation', async (req, res) => {
    try {
        // req.query.city needs to be in form "city, state"
        const response = await axios.get('https://www.mapquestapi.com/geocoding/v1/address?key=' + process.env.MAPQUEST_API + '&location=' + req.query.userLocation);
        let locationData = response.data.results[0].locations[0].latLng;
        res.status(200).json(locationData);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = mapquest;