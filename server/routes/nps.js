const nps = require('express').Router();
const axios = require('axios');
require('dotenv').config();

nps.get('/getActivities', async (req, res) => {
    console.log("---------------------------")
    try {
        const response = await axios.get('https://developer.nps.gov/api/v1/activities?&api_key=' + process.env.NPS_API);
        return res.send(response);
    } catch (err) {
        return "lol"
    }
});

nps.get('/search', (req, res) => {
    return res.send();
});

module.exports = nps;