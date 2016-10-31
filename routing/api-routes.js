
// We need to include the path package to get the correct file path for our html
var path = require('path');

var friendsData = require('../data/friends.js');

module.eports = function(app){


app.get('/public/survey.html', function (req, res) {
    console.log('root access requested');
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });


  app.get('/friendsArray', function(req, res) {
    console.log('friendsArray requested');
    res.json(friendsArray);
  });





















}