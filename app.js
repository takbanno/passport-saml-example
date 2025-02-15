const express = require('express');
const path = require('path');
const passport = require('passport');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

var env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

console.log('Using configuration', config);

const strategy = require('./config/strategy')(config);
require('./config/passport')(passport, strategy);

var app = express();

app.set('port', config.app.port);
app.set('views', __dirname + '/app/views');
app.set('view engine', 'pug');
app.use(morgan('combined'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session(
  {
    resave: true,
    saveUninitialized: true,
    secret: 'this shit hits'
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

require('./config/routes')(app, config, strategy, passport);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
