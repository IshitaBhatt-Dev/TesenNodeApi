// Load the module dependencies
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');

// Define the Express configuration method
module.exports = function() {
	// Create a new Express application instance
	const app = express();

	// Use the 'NDOE_ENV' variable to activate the 'morgan' logger or 'compress' middleware
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	// Use the 'body-parser' and 'method-override' middleware functions
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	// Load the routing files
	let apiRoutes = require('../app/routes/community.server.routes');
	app.use('/api', apiRoutes)
    
	// Return the Express application instance
	return app;
};