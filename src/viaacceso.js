var express = require('express');
var app = express();

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


app.set('port', 3000);

app.listen(app.get('port'), function() {
  console.log('Escuchando la app por el puerto 3000');
})
