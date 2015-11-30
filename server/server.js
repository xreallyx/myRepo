var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var path = require('path');

// Setup server
var app = express();
// app.use(require('connect-livereload')({port: 7777}));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/:url(api|bower_components|assets)/*', function (req, res) {
  res.send(404, 'Resource not found');
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

// Define server
var server = require('http').createServer(app);
// Start server
server.listen(8080, function () {
  console.log('Express server listening on %d', 3000);
});