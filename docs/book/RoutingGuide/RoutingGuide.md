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
