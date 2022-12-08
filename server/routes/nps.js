const nps = require('express').Router();
const axios = require('axios');
require('dotenv').config();

nps.get('/getActivities', async (req, res) => {
    // console.log("---------------------------")
    try {
        const response = await axios.get('https://developer.nps.gov/api/v1/activities?&api_key=' + process.env.NPS_API);
        const list = response.data.data.map((el) => el.name)
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
});

nps.get('/search', (req, res) => {
    return res.send();
});

module.exports = nps;