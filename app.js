var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/spot-pop');

var routes = require('./config/routes');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(routes);

app.listen(3000, function () {
  console.log('listening on port 3000...')
});