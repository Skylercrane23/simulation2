const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const { passport } = require('../auth');

function decorate(app) {
    
    app.use(cors());
    app.use(bodyParser.json());
    app.use(session({
        saveUninitialized: true,
        resave: false,
        secret: 'Best secret ever',
        name: 'Houser',
    }));

    app.use(passport.initialize());
    app.use(passport.session());
    
    return app;
}

module.exports = decorate;
// export default decorate