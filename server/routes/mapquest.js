const mapquest = require('express').Router();

mapquest.get('/geoLocation', (req, res) => {
    return res.send();
});

module.exports = mapquest;