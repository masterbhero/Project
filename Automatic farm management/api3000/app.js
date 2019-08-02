var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/farm', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
  }
  next();
});

// app.use((req,res,next) => {
// 	res.status(200).json({
// 		message:"It just works!"
// 	});
// });

const personRoutes = require('./api/routes/persons');
const sensorRoutes = require('./api/routes/sensors');
const userRoutes = require('./api/routes/users');
const controllerRoutes = require('./api/routes/controllers');
const sensordataRoutes = require('./api/routes/sensordatas');

app.use('/person',personRoutes);
app.use('/sensor',sensorRoutes);
app.use('/user',userRoutes);
app.use('/controller',controllerRoutes);
app.use('/sensordata',sensordataRoutes);

module.exports = app;
