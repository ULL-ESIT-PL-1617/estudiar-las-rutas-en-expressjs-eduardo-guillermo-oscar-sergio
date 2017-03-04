# DOCUMENTACIÓN - API ROUTER

#### Introducción

El módulo `router` proporciona un objeto enrutador con un funcionamiento similar al de un middleware. Es una especie de aplicación muy simple que es capaz únicamente de llevar a cabo funciones de direccionamiento y funciones que serían atribuidas habitualmente a un middleware. Toda aplicación Express lleva implícita el uso de este tipo de objetos.

Un objeto router, como ya hemos mencionado, funciona de una forma similar a un middleware: puede utilizarse como un argumento de `app.use()` o como argumento del método `use()` de cualquier otro objeto `router`. Los objetos `express` tienen un método `Router` que permite crear un nuevo objeto de este tipo:

```
var router = express.Router([options]);
```

El parámetro es opcional y sirve para especificar el funcionamiento que queramos que tenga el objeto. Tenemos tres opciones:

* `caseSensitive` hace que se tengan en cuenta las mayúsculas y minúsculas en las peticiones realizadas. Viene desactivada por defecto, y por lo tanto una petición dirigida a `/Foo` será recibida indiferentemente por `/foo`.
* `mergeParams` es una opción que por defecto tiene valor _false_ y que preserva los valores de `req.params` del router "padre" del que estamos creando. Si existen conflictos en los nombres, los valores del router hijo predominan.
* `strict` establece un direccionamiento estricto. Viene desactivado por defecto.

Una vez se ha instanciado un objeto router, podemos añadirle middlewares y métodos HTTP como en cualquier aplicación. Por ejemplo:

```
//este método responderá a cualquier petición destinada a /
router.use('/', function(req, res, next) {
  //procedimientos como en cualquier otro middleware
  next();
});
```

Este tipo de procedimientos pueden aislarse en un fichero independiente o incluso en pequeñas aplicaciones independientes, que son utilizadas desde el programa principal según convenga. Si por ejemplo queremos que el router responda a las peticiones recibidas en el directorio `/requests`, añadimos en la aplicación principal:

```
//siendo miRouter.js un fichero con el router dentro del directorio routers
var router = require('./routers/miRouter');
app.use('/requests', router);
```
---
### Procedimientos

Los procedimientos que los objetos router ponen a nuestra disposición son muy similares a las de los objetos express.

###### router.METHOD(path, [callback, ...] callback)

Este tipo de métodos provee la función de direccionamiento de Express, donde METHOD es uno de los métodos del protocolo HTTP, como GET, PUT o POST. Estos se escriben en letras minúsculas, siendo `router.get()`, `router.put()` y `router.post()` los métodos a nuestra disposición, entre otros. Nótese que su nombre es el mismo que el método original del protocolo HTTP, pero en minúsculas.

Estos métodos soportan múltiples _callbacks_, que son tratadas por igual y que se comportan a modo de middleware, con la diferencia de que pueden invocar al método `next('route')` para ceder el control a otras _callbacks_. Este mecanismo se utiliza para pasar el control a otras funciones cuando ya no hay razón para continuar con la ejecución de la función actual.

###### router.all(path, [callback, ...] callback)

Este método se comporta de forma similar a los anteriores, pero responde a todos los métodos HTTP. Es especialmente útil para aplicar una lógica "global" a las peticiones a las que responde nuestro router.

###### router.param(name, callback)

Añade disparadores que se asocian a los parámetros especificados por el parámetro _name_. Al accederse al parámetro, se dispara la función _callback_. Los parámetros de esta función son:

* `req`, el objeto de la petición.
* `res`, el objeto de respuesta.
* `next`, siguiente función middleware que tomará el control.
* El valor del parámetro _name_.
* El nombre del parámetro.

###### router.route(path)

Este método devuelve una instancia de una ruta que puede utilizarse para manejar diversas funciones HTTP. Básicamente devuelve una ruta completa que puede utilizar los métodos del tipo `router.METHOD()`. Veamos un ejemplo:

```
var router = express.Router();

//función simple de manejo de parámetros del router
router.param('userID', function(req, res, next, id) {
  req.user = {
    id: id,
    name: 'default'
  };
  next();
});

//establecemos un manejador para las peticiones a la ruta del usuario anterior
router.route('/home/:userID')
.get(function (req, res, next) {

})
.put(function (req, res, next) {

})
.post(function (req, res, next) {

});
```






















End
