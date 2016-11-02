// console.log("html-routes is working!!");
 // We need to include the path package to get the correct file path for our html
var path = require('path');


 function htmlRoutes(app){

// HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // when user visits the home page.
  app.get('/',function (req, res) {
    console.log('Welcome to Home Page!');
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
  // when user visits the survey page.
  app.get('/survey', function (req, res) {
    console.log('form requested');
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

  // If no matching route is found default to home
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
    // console.log("test");
  });
  }
  // to be used in server.js
  module.exports = htmlRoutes;