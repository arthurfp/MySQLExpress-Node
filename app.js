const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const User = require('./api/User');
const UserData = require('./api/UserData');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false,
}));
app.use(cookieParser());

// set the user interface api
app.use('/user', User);
app.use('/userData', UserData);

// catch 404 and forward to error handler
app.use((_req, _res, next) => {
  next();
});

// eslint-disable-next-line no-unused-expressions
((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.send({
    success: false,
    data: {},
    msg: 'The requested address does not exist',
  });
});

module.exports = app;
