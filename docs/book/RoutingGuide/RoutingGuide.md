# Routing Guide

## Direccionamiento

Hace referencia a la definición de puntos finales de aplicación (URI) y cómo se tiene que responder a las peticiones de los clientes. Si quiere ver lo básico de Direccionamiento vaya a [aquí](../BasicRouting/BasicRouting.md).  
~~~
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

//En caso de que se haga una petición GET a la página de inicio se responderá con un 'hello world'
~~~
---
## Métodos de ruta

Los métodos de ruta de Express derivan de los métodos HTTP, los que Express puede controlar son: *get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify,  subscribe, unsubscribe, patch, search y connect*.

Aparte de estos, existe un tipo de direccionamiento especial, *app.all()*, que no deriva de ningún método HTTP sino que se utiliza para cargar funciones de [Middleware](../UsingMiddleware/UsingMiddleware.md) en una vía de acceso para todos métodos de solicitud. A continuación se pone un ejemplo.

~~~
app.all('/private', function (req, res, next) {
  console.log('Accediendo a la zona privada...');
  next();
});

//El next() realiza una operación de pasarle el control al siguiente controlador
~~~
