var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cors = require('cors');
var io = require('socket.io-client');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config.json');
//routes
var projets = require('./routes/projets');

global.atob = require("atob");
var app = express('express');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: 'http://localhost:4200' }));

//connecte mongodb
mongoose.connect(config.database,{ useUnifiedTopology: true ,useNewUrlParser: true} , function(err) {
  if (err) {
      console.log('Connection error to DB'.red, err);

  } else {
      console.log('Successfuly connected to DB'.green);
      console.log('new data base' + config.database)
  }
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/projets', projets);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(3001, function () {

  console.log('listening on port 3001!'.green);
    });

module.exports = app;





