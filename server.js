// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server 

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener
// BodyParser makes it easy for our server to interpret data sent to it.
// This is the Standard code for body-parser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static(path.join(__dirname, '/public')));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
var apiRoutes = require('./routing/api-routes.js');
var htmlRoutes= require('./routing/html-routes.js');
// getting these functions from their respective files.
 apiRoutes(app);
 htmlRoutes(app);
// LISTENER
// The below code effectively "starts" our server 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});










