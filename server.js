'use strict';

/***********
 
 NONTON-ARC
 ARC 2016
 
 ***********/

console.log(':: nonton-arc ::');
console.log('NODE_ENV: %s\n', process.env.NODE_ENV);

// Load components
var	fs		= require('fs'),
	path 	= require('path'),
	express = require('express'),
	app     = express(),
	http    = require('http'),
	server  = http.createServer(app),
	config  = require('config'),

	// Load configured app components
	winston = require('./app/components/winston.js'),
	knex	= require('./app/components/knex.js'),

	// Set constants
	routeDirectory 	= path.join(__dirname, 'app/routes'),
	viewDirectory	= path.join(__dirname, 'app/views');

// Apply global Express settings
app.set('views', viewDirectory);
app.set('view engine', 'pug');

// Apply global Express middleware
winston.log('verbose', 'Using Express static middleware...');
app.use('/static', express.static('public'));

// Load and apply routes
winston.log('verbose', 'Loading and applying routes...');
fs.readdirSync(routeDirectory).forEach(function(file){
	var routerPath = path.join(routeDirectory, file);
	if(path.extname(routerPath) === '.js'){
		winston.log('verbose', routerPath);
		var router = require(routerPath);
		var routerName = path.basename(routerPath, path.extname(routerPath));
		if(!router.baseRoute) router.baseRoute = '/' + routerName;
		var completeRoute = config.get('routePrefix') + router.baseRoute;
		winston.log('verbose', 'Using route %s...', completeRoute);
		app.use(completeRoute, router);
	}
});

// Apply Express error and 404 handler
// TODO:
winston.log('warn', 'Still using default Express error handler, please implement custom error handlers');

// Start the server
winston.log('verbose', 'Starting the HTTP server...');
server.listen(config.get('port'), config.get('ip'), function() {
	var address = server.address();
	winston.log('info', 'nonton-arc listening at http://%s:%s', address.host, address.port);
});