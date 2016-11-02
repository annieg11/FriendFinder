
// console.log("api-routes is working!!");
// We are loadind data from the friends.js ad storing into the variable.
var friendsData =require('../data/friends.js');

// Routing
function apiRoutes(app){
  // API GET Requests
  // Below code handles when users "visit" a page.
  // A get request to show the json of all the friends in the friends.js.
  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
  });
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate Javascript array
  // This means that when user fills out the survey form,this data is then sent to the server.
  // Then the server saves the data to the friendsData Array.
   app.post('/api/friends', function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
      var newFriendsData =req.body;
      console.log(newFriendsData);
      // We then add the json the user sent to the friendsData array 
      friendsData.push(newFriendsData);
      // We then display the JSON to the users
      res.json(newFriendsData);
});

app.post('/api/clear', function () {
    // Empty out the arrays of data
    friendsData = [];
    console.log(friendsData);
  });
}
// to be used in server.js
module.exports = apiRoutes;
  
  




















