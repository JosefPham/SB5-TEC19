// express-generator create standard express template //
var createError = require('http-errors');             //
var express = require('express');                     //
var path = require('path');                           //
var cookieParser = require('cookie-parser');          //
var logger = require('morgan');                       //

var indexRouter = require('./routes/index');          //
var usersRouter = require('./routes/users');          //
var cors = require('cors');                           //
var app = express();                                  //
// -------------------------------------------------- //
app.use(cors({
  origin:['http://localhost:4200','http://127.0.0.1:4200'],
  credentials: true
}));
//db connection
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:Password123@cluster0-nbaoc.mongodb.net/test?retryWrites=true&w=majority');

//passport
var passport = require('passport');
var session = require('express-session');
//store session
const MongoStore = require('connect-mongo')(session);
app.use(session({
  name: 'cookie.sid',
  resave: false,
  saveUninitialized: false,
  secret: 'secret',
  cookie: {
    maxAge: 300000,
    httpOnly: false,
    secure: false
  },
  store: new MongoStore( {mongooseConnection: mongoose.connection} )
}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
