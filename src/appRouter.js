var express = require('express');
var app = express();

var router = require('./myRouter');
app.use('/', router);

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});
