var express = require('express');
var app = express();

app.get('/about/sergio', function (req, res) {
  res.send('Hola de parte de sergio!');
});


app.get('/about/sergio2', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hola de parte de sergio2!');
});


var a1 = function (req, res, next) {
  console.log('a1');
  next();
}

var a2 = function (req, res, next) {
  console.log('a2');
  next();
}

var a3 = function (req, res) {
  res.send('Hola de parte de sergio3!');
}

app.get('/about/sergio3', [a1, a2, a3]);
// Se busca en el orden de la matriz de funciones


var b1 = function (req, res, next) {
  console.log('b1');
  next();
}

var b2 = function (req, res, next) {
  console.log('b2');
  next();
}

app.get('/about/sergio4', [b1, b2], function (req, res, next) {
  console.log('La respuesta no estaba en la matriz, sino en la función siguiente ...');
  next();
}, function (req, res) {
  res.send('Hola de parte de sergio4!');
});


app.set('port', 3000);

app.listen(app.get('port'), function() {
  console.log('Escuchando la app por el puerto 3000');
})
