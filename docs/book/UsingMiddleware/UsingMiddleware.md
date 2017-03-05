#Using middleware
---

Una aplicación Express es fundamentalmente una serie de llamadas a funciones de middleware.

###¿Qué es middleware?

Middleware son funciones que tienen acceso al objeto de solicitud __req__, al objeto de respuesta __res__ y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación, la cual se suele denotar por la variable __next__. Si la función middleware actual no finaliza el ciclo de solicitud/respuestas, debe invocar __next()__ para pasar el control a la siguiente función de middleware o la solicitud quedará colgada.

Una aplicación Express puede utilizar diferentes tipos de middleware. A con
tinuación se verán todos estos tipos con algunos ejemplos.

###Middleware de nivel de aplicación

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

###Middleware de nivel de direccionador

El middleware de nivel de direccionador funciona de la misma manera que el middleware de nivel de aplicación, con la diferencia de que se enlaza a una instancia de __express.Router()__.

```js
var router = express.Router();
```
Para usar el middleware de nivel de direccionador, se utilizan las funciones __router.use()__ y __router.METHOD()__. A continuación, se muestra un ejemplo de la utilización de router con el mismo ejemplo que se mostró anteriormente, utilizando ahora el middleware de nivel de direccionador:

```js
var app = express();
var router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id == 0) next('route');
  // otherwise pass control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('regular');
});

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id);
  res.render('special');
});

// mount the router on the app
app.use('/', router);
```

