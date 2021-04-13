var bodyParser = require('body-parser');
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001; // backend server runs from this port

// Serve up static assets (usually on heroku)
app.use(express.static("public"));

// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res, next) {
  console.log(__dirname)
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/mycallback', function (req, res, next) {
  res.send('Got a POST request')
  console.log("got a post request")
  console.log(req.body); // req.body contains the parsed body of the request.
});

app.post('/apitest', function (req, res, next) {
  res.send('Got a POST request from the api call')
  console.log("Got a POST request from the api call")
  console.log(req.body); // req.body contains the parsed body of the request.
});


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
