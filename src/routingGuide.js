var express = require('express');
var app = express();


//
// Métodos de ruta
//

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});

app.all('/private', function (req, res, next) {
  console.log('Accediendo a la zona privada ...');
  next(); // pass control to the next handler
});

//
// Vías de accesos, pruebas
//

// SERIE
app.get('/', function (req, res) {
  res.send('Página de inicio');
});
// Esta vía de acceso coincidirá con las solicitudes a la ruta raíz (/)


app.get('/about', function (req, res) {
  res.send('Página about');
});
// Esta vía de acceso coincidirá con las solicitudes a la ruta /about


app.get('/random.text', function (req, res) {
  res.send('random.text');
});
// Es similar a las anteriores, la vía de acceso coincidirá con las solicitudes a la ruta /random.text


//PATRONES DE SERIE

app.get('/PL?', function(req, res) {
  res.send('PL?');
});
// Esta vía de acceso coincidirá con las solicitudes PL o P


app.get('/Procesadores+', function(req, res) {
  res.send('Procesadores+');
});
// Esta vía de acceso coincidirá con las solicitudes "Procesadores", "Procesadoress", "Procesadoresss", ..., etc.


app.get('abo*ut', function(req, res) {
  res.send('abo*ut');
});
// Esta vía de acceso coincidirá con las solicitudes "about", "abotttttut", "abo652438ut", ..., etc.


app.get('/abb(ou)?t', function(req, res) {
 res.send('abb(ou)?t');
});
// Está vía de acceso coincidirá con las solicitudes "abbt" o "abbout".


// EXPRESIONES REGULARES

app.get(/z/, function(req, res) {
  res.send('/z/');
});
// Está vía de acceso coincidirá con cualquier valor que contenga una z

app.get(/.*ot$/, function(req, res) {
  res.send('/.*ot$/');
});
// Esta vía de acceso coincidirá con cualquier valor que termine por "*ot".


//
// Manejador de rutas
//
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

//
// Métodos de respuesta, algunos ejemplos
//

//Método send
app.get('/send', function (req, res) {
  console.log('send')
  res.send('GET request to the homepage');
});

//Método download
app.get('/download', function (req, res) {
  console.log('download fich.txt')
  res.download('fich.txt');
});

//Métodos end
app.get('/end', function (req, res) {
  console.log('end');
  res.end();
});

//Método sendStatus
app.get('/sendStatus', function (req, res) {
  console.log('sendStatus');
  res.sendStatus(200);
});



app.set('port', 3000);

app.listen(app.get('port'), function() {
  console.log('Escuchando la app por el puerto 3000');
})
