const weather = require('express').Router();

weather.get('/', (req, res) => {
    return res.send();
});

module.exports = weather;