// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})

// Routes
// =============================================================

//A GET Route to /survey which should display the survey page.
app.get('/survey', function(req, res){
  res.sendFile(path.join(__dirname, 'app/public/survey.html'));
})

//A default USE route that leads to home.html which displays the home page.

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'app/public/home.html'));
})

