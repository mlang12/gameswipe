var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var dbConfig = require('./app/config/database.js');
var LocalStrategy = require('passport-local').Strategy;

var PORT = process.env.PORT || 3100;

// require('./app/config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('express-session')({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: false
}));

// Configure passport middleware
app.use(passport.initialize());
app.use(flash());
app.use(passport.session()); 

// required for passport
const User = require('./app/model/User.js');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect(dbConfig.url); // connect to database

require('./app/controller/apiRoutes.js')(app, passport);

app.listen(PORT, function(){
  console.log("Listening on port: " + PORT);
});
