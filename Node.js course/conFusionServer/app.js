//mongod --dbpath="C:\Users\sudondie\Documents\GitHub\Learning\Node.js course\mongodb\data" --bind_ip 127.0.0.1
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let dishRouter = require('./routes/dishRouter');
let promoRouter = require('./routes/promoRouter');
let leaderRouter = require('./routes/leaderRouter');

let mongoose = require('mongoose');
const e = require('express');
//let Dishes = require('./models/dishes');
const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);
connect.then(() => {
  console.log('correctly connected to the server!');
}, (err) => {
  console.log(err);
});

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

function auth(req, res, next) {
  console.log(req.headers);
  let authHeader = req.headers.authorization;
  if (!authHeader) {
    let err = new Error("you are not logged in!");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }
  let auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
  let username = auth[0];
  let password = auth[1];
  if (username == 'admin' && password == 'password') {
    next();
  } else {
    let err = new Error("you are not logged in!");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }
}
app.use(auth);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dishes', dishRouter);
app.use('/romotions', promoRouter);
app.use('/leaders', leaderRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;