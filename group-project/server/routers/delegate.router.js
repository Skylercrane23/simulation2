const express = require('express');

const AuthRouter = require('./auth.router');
const ApiController = require('../controllers/api.controller');

function delegateRoutes(app) {
    app.use(express.static(__dirname + '/../public'));
    
    app.use('/auth', AuthRouter);
    app.use('/api', (req, res, next) => {
        if (req.isAuthenticated())
            return next();
        
        res.status(403).send({ message: 'Can\'t do this unless you are logged in!' });
    });

    app.post('/api/properties', ApiController.createListing);
    app.get('/api/properties/:id', ApiController.getListing);
    app.get('/api/properties', ApiController.getAllListings);
    app.delete('/api/properties/:id', ApiController.deleteListing);
    app.get('/api/properties/filter/:id', ApiController.filterListing);
    
    return app;
}

module.exports = delegateRoutes;