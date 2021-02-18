var bodyParser = require('body-parser');
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001; // backend server runs from this port

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Parses the body for POST, PUT, DELETE, etc.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/mycallback', function(req, res, next){
    console.log("posted to my server")
    console.log(req.body); // req.body contains the parsed body of the request.
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
