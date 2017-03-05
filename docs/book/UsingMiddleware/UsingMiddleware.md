#Using middleware
---

Una aplicación Express es fundamentalmente una serie de llamadas a funciones de middleware.

###¿Qué es middleware?

Middleware son funciones que tienen acceso al objeto de solicitud __req__, al objeto de respuesta __res__ y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación, la cual se suele denotar por la variable __next__. Si la función middleware actual no finaliza el ciclo de solicitud/respuestas, debe invocar __next()__ para pasar el control a la siguiente función de middleware o la solicitud quedará colgada.

Una aplicación Express puede utilizar diferentes tipos de middleware. A con
tinuación se verán todos estos tipos con algunos ejemplos.

#####Middleware de nivel de aplicación

Los middlware de nivel de aplicación, se enlazan a una instancia del objeto de aplicación utilizando las funciones __app.use()__ y __app.METHOD()__, donde METHOD es el método HTTP de la solicitud que maneja la función de middleware.

A continuación, se muestra un ejemplo de una función middleware montada en /user/:id.

```js
 app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});
```

Ejemplo que muestra una ruta y su manejo por parte del middleware para las solicitudes GET en /user/:id

```js
app.get('/user/:id', function (req, res, next) {
  res.send('USER');
});
```

Los manejadores de rutas permiten definir varias rutas para una vía de acceso.Para omitir el resto de las funciones middleware de una pila de middlware, se invoca __next('route')__ para pasar el control a la siguiente ruta.

```js
app.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id == 0) next('route');
  // otherwise pass the control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('regular');
});
```
