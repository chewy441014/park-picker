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

nps.get('/search', async (req, res) => {
    try {
        const response = await axios.get('https://developer.nps.gov/api/v1/parks?q=' + req.query.search + '&api_key=' + process.env.NPS_API);
        res.status(200).json(response.data)
      } catch (err) {
        console.log(err);
        res.status(666).json(err)
      }
});

module.exports = nps;