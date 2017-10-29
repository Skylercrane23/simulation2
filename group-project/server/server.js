const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();


// CONTROLLERS
const apiController = require('./controllers/api.router.js');
const authController = require('./controllers/auth.router.js');


var app = express();
// Connect to database using massive.
massive('process.env.CONNECTION_STRING').then( dbInstance => {
    app.set('db' , dbInstance );
});

app.use(bodyParser.json() );
app.use( cors() );

// AUTH REQUESTS
app.post('/api/auth/login', authController.login);
app.post('/api/auth/register', authController.register);
app.post('/api/auth/logout', authController.logout);

//HOUSING LISTS REQUESTS
app.post('/api/properties', apiController.createListing);
app.get('/api/properties', apiController.getListings);
app.delete('/api/properties/:id', apiController.deleteListing);
app.delete('/api/properties/filter', apiController.filterListing);

// SERVER PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Chris's server is listening on ${port}.`);
});