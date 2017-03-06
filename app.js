var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./config/routes');
var ejs = require('ejs');
var morgan = require('morgan')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/spot-pop');

app.use(express.static(__dirname + '/public'));

app.set('view engine', ejs);

app.use(cors());
app.use(morgan('dev'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

app.get('/', function(req, res) {
	res.render('index.html.ejs')
});

app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port 3000...')
});