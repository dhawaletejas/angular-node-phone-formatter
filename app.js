var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance()
        , PNF = require('google-libphonenumber').PhoneNumberFormat
        , PNT = require('google-libphonenumber').PhoneNumberType;

var app = express();

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES---------------------------------------------------------
app.post('/formatPhone', function(req, res) {
  var reqPhone = req.body.text;
  if(reqPhone.charAt(0)!='+') {
      var phoneParsed = phoneUtil.parse(reqPhone,'US'); //Default Country Code: US
  }
  else {
    var phoneParsed = phoneUtil.parse(reqPhone);
  }
  var phoneFormatted1 = phoneUtil.format(phoneParsed, PNF.INTERNATIONAL);
  var phoneFormatted2 = phoneUtil.format(phoneParsed, PNF.NATIONAL);
  var phoneFormatted3 = phoneUtil.isValidNumber(phoneParsed)
  var phoneData = {
    phoneIntl: phoneFormatted1,
    phoneNational: phoneFormatted2,
    phoneValid: phoneFormatted3
  };
  res.send(phoneData);
});

// FRONT-END APPLICATION ROUTES ----------------------------------
app.get('*', function(req, res) {
  res.sendfile('./public/order.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(8080);
console.log("App listening on port 8080");

module.exports = app;
