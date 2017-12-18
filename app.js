const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const partials = require('express-partials')



const app = express();

//router
const sign = require('./routes/sign');
const login = require('./routes/login');
const self = require('./routes/self');
const homework = require('./routes/homework');
const notice = require('./routes/notice');
const announce = require('./routes/announce');
const announce_homework = require('./routes/announce_homework');
const announce_mes = require('./routes/announce_mes');
const modifiedData = require('./routes/modifiedData');
// const ejs 




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(partials());

app.use("/sign",sign);
app.use("/login",login);
app.use("/self",self);
app.use("/homework",homework);
app.use("/notice",notice);
app.use("/announce",announce);
app.use("/announce_mes",announce_mes);
app.use("/announce_homework",announce_homework);
app.use("/modifiedData",modifiedData);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
