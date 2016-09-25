var express = require('express');
var path    = require("path");
var app = express();
var bodyParser = require('body-parser');

//RESTful API
app.get('/', function(request, response) {
  response.render('index.html');
});

//Port Setting
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


