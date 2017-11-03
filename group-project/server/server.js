const express = require('express');
require('dotenv').config();

const decorate = require('./middleware/decorate.middleware');
const delegate = require('./routers/delegate.router');

var app = express();

decorate(app);

delegate(app);



// SERVER PORT
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});