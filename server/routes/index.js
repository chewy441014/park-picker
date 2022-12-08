const express = require('express');
const nps = require('./nps');
const mapquestRouter = require('./mapquest');
const weatherRouter = require('./weather');

const app = express();

app.use('/nps', nps);
/* 
 * /api/nps/getActivities
 * /api/nps/search
 */
app.use('/mapquest', mapquestRouter);
/* 
 * /api/mapquest/geoLocation
 */
app.use('/weather', weatherRouter);
/* 
 * /api/weather/
 */

module.exports = app;