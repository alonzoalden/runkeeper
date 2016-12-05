var express = require('express');
var mongoose = require('mongoose');

var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

//connect the database
mongoose.connect('mongodb://localhost/runkeeper');

//middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

//routes
var runController = require('./runs/runController.js');
var userController = require('./users/userController.js');

var helpers = require('./config/helpers.js');

app.get('/:code', runController.navToLink);

app.post('/api/users/signin', userController.signin);
app.post('/api/users/signup', userController.signup);
app.get('/api/users/signedin', userController.checkAuth);

// authentication middleware used to decode token and made available on the request
// app.use('/api/links', helpers.decode);
app.get('/api/runs/', runsController.allRuns);
app.post('/api/runs/', runsController.newRun);

// If a request is sent somewhere other than the routes above,
// send it through our custom error handler
app.use(helpers.errorLogger);
app.use(helpers.errorHandler);

app.listen(4000);

module.exports = app;