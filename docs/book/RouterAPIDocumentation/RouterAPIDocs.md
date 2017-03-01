# DOCUMENTACIÓN - API ROUTER

#### Introducción

El módulo `router` proporciona un objeto enrutador con un funcionamiento similar al de un middleware. Es una especie de aplicación muy simple que es capaz únicamente de llevar a cabo funciones de enrutamiento y funciones que serían atribuidas habitualmente a un middlewere. Toda aplicación Express lleva implícita el uso de este tipo de objetos.

Un objeto router, como ya hemos mencionado, funciona de una forma similar a un middleware: puede utilizarse como un argumento de `app.use()` o como argumento del método `use()` de cualquier otro objeto `router`. Los objetos `express` tienen un método `Router` que permite crear un nuevo objeto de este tipo:

```
var router = express.Router([options]);
```

El parámetro es opcional y sirve para especificar el funcionamiento que queramos que tenga el objeto. Tenemos tres opciones:

* `caseSensitive`
* `mergeParams` es una opción que por defecto tiene valor _false_ y que preserva los valores de `req.params` del router "padre" del que estamos creando. Si existen conflictos en los nombres, los valores del router hijo predominan.
* `strict` establece un enrutado estricto. Viene desactivado por defecto.
