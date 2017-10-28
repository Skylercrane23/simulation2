const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();
const controller = require('./controller');

var server = express();

// Connect to database using massive.
massive('databaseplaceholder').then( dbInstance => {
    server.set('db' , dbInstance );
});

server.use(bodyParser.json());
server.use( cors());


// Sever port
const port = 3000;

server.listen(port, () => {
    console.log(`Chris's server is listening on ${port}.`);
});