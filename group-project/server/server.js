const express = require('express');
const chalk = require('chalk');

const addMiddlewareTo = require('./middleware/decorate.middleware');
const delegateRoutesFor = require('./routers/delegate.router');

const app = express();

// REQUEST ENTRY POINT

addMiddlewareTo(app);

delegateRoutesFor(app);

app.listen(3000, () => {
    console.log(`${ chalk.green('App running and listening at') } ${ chalk.cyan('localhost:3000') }`);
});