'use strict';

/***********
 
 NONTON-ARC
 ARC 2016
 
 ***********/

console.log(':: nonton-arc ::');
console.log('NODE_ENV: %s\n', process.env.NODE_ENV);

// Load components
var express = require('express'),
	app     = express(),
	http    = require('http'),
	server  = http.createServer(app),
	config  = require('config'),

	winston = require('./app/components/winston.js'),
	knex	= require('./app/components/knex.js');

// Load application parts
winston.log('verbose', 'Loading application parts...');
/*var	models       = loader.loadDirectory('models', { bookshelf: bookshelf }),
	controllers  = loader.loadDirectory('controllers', { models: models, validators: validators, helpers: helpers }),
	routes       = loader.loadDirectory('routes', { controllers: controllers, sessions: sessions });*/

// Apply global Express middleware
winston.log('verbose', 'Using Express static middleware...');
app.use('/static', express.static('public'));

// Apply routes
winston.log('verbose', 'Applying routes...');
/*for (var routerName in routes) {
	if (routes.hasOwnProperty(routerName)) {
		var router = routes[routerName];
		if(!router.baseRoute) router.baseRoute = '/' + routerName;
		var completeRoute = config.get('routePrefix') + router.baseRoute;
		winston.log('verbose', 'Using %s for %s', routerName, completeRoute);
		app.use(completeRoute, router);
	}
}*/

// Apply Express error and 404 handler
// TODO:
winston.log('warn', 'Still using default Express error handler, please implement custom error handlers');

// Start the server
winston.log('verbose', 'Starting the HTTP server...');
server.listen(config.get('port'), config.get('ip'), function() {
	var address = server.address();
	winston.log('info', 'nonton-arc listening at http://%s:%s', address.host, address.port);
});