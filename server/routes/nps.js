const nps = require('express').Router();
const axios = require('axios');
require('dotenv').config();

nps.get('/getActivities', (req, res) => {
    console.log("---------------------------")
    console.log(process.env.NPS_API)
    try {
        const response = axios.get('https://developer.nps.gov/api/v1/activities?&api_key=' + process.env.NPS_API);
        return res.send(response);
    } catch (err) {
        // console.log(err)
        return err
    }
});

nps.get('/search', (req, res) => {
    return res.send();
});

module.exports = nps;