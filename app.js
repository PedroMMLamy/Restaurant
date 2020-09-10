require('dotenv').config();
require('express-async-errors')
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser')
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')

const usersRouter = require('./routes/users.routes');
const indexRouter = require('./routes/index.routes');

// We have to tell AdminBro that we will manage mongoose resources with it

AdminBro.registerAdapter(require('admin-bro-mongoose'));

// express server definition
const app = express();

// Resource definitions
const User = require('./models/User.model')
const Table = require('./models/table')



// settings adminbro
const adminBro = new AdminBro({
  resources: [User, Table],
  rootPath: '/admin',
  branding: {
    companyName: 'Restaurant TreBien',
  },
})

// Build and use a router wich will handle all AdminBro routes

const router = AdminBroExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

// database configuration
require('./configs/db.config')
require('./configs/session.config')(app);

// view engine setup 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware Setup
app.use(bodyParser.json())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());



// Routes middleware


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', require('./routes/signup.routes'));
app.use('/', require('./routes/login.routes'));
app.use('/', require("./routes/availabilityRoute"));
app.use('/', require("./routes/reservationRoute"));
app.use('/', require('./routes/table.routes'));
app.use('/', require('./routes/about.routes'));
 
  
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
