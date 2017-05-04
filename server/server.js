var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config.js');
var commonConfig = require('../app/configs/common');
var express = require('express'),
    app = express(),
    fs = require("fs"),
    path = require("path"),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    multer = require('multer'),
    upload = multer();

var port = process.env.PORT || commonConfig.port || 3200;
var appPath = path.join(__dirname, '..', '/app');
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: false, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler, { reload: true }));

// Allowing the cross origin
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

//serve static files (.js, .css)
app.use(express.static(appPath));
// for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});

// serve index.html
app.get('/*', function (req, res) {
    res.sendFile(path.join(appPath, '/index.html'));
});

// service for new user registration
app.get('/getName', function (req, res) {

});
