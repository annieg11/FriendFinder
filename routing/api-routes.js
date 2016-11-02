
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
    //holds the best match and will update as it loops through the options
    var bestMatch = {
    name: "",
    photo: "",
    friendDifference: 1000
  };
    // req.body hosts is equal to the JSON post sent from the user
      var newFriendsData =req.body;
      var newFriendsDataName =newFriendsData.name;
      var newFriendsDataPhoto =newFriendsData.photo;
      var newFriendsDataAnswers =newFriendsData.answers;

      // calculates the difference between the newFriendsData's answers and the answers of each friends Array in the database.
      var totalDiff =0;
      //loops through the friends possibilities in the database
for  (var i=0; i<friendsData.length; i++){
  console.log(friendsData[i].name);

   totalDiff = 0;

  //loops through all of the answers for each friend
  for (var j=0; j< friendsData[i].answers[j]; j++){
    //calculate the total difference between the answers and sums into the totalDiff

    totalDiff += Math.abs(
      parseInt(newFriendsDataAnswers[j])-
      parseInt(friendsData[i].answers[j]))
      ;

      //if sum of diff is less then the differences of the current 'best match'
      if(totalDiff <=bestMatch.friendDifference){

        //resets the best match to the new friend

        bestMatch.name = friendsData[i].name;
        bestMatch.photo = friendsData[i].photo;
        bestMatch.friendDifference = totalDiff;
      }
  }
}
      // We then add the json the user sent to the friendsData array 
      friendsData.push(newFriendsData);
      // We then display the JSON to the users
      res.json(bestMatch);
});

app.post('/api/clear', function () {
    // Empty out the arrays of data
    friendsData = [];
    console.log(friendsData);
  });
}
// to be used in server.js
module.exports = apiRoutes;
  
  




















