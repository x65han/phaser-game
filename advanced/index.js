var express = require('express');
var path    = require("path");
var app = express();
app.use(express.static(__dirname + ''));
app.set('views', __dirname + '');
app.set('view engine', 'html');

//RESTful API
app.get('/', function(request, response) {
  response.render('index');
});

//Port Setting
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


