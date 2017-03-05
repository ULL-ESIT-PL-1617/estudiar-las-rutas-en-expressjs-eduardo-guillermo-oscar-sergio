var express = require('express');
var app = express();

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.all('/private', function (req, res, next) {
  console.log('Accediendo a la zona privada ...');
  next(); // pass control to the next handler
});

app.set('port', 3000);

app.listen(app.get('port'), function() {
  console.log('Escuchando la app por el puerto 3000');
})
