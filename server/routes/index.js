const express = require('express');
const nps = require('./nps');
const mapquestRouter = require('./mapquest');
const weatherRouter = require('./weather');

const app = express();

app.use('/nps', nps);
/* 
 * /api/nps/getActivities - WORKING
 * /api/nps/search - to do
 */
app.use('/mapquest', mapquestRouter);
/* 
 * /api/mapquest/geoLocation - to do
 */
app.use('/weather', weatherRouter);
/* 
 * /api/weather/ - to do 
 */

module.exports = app;