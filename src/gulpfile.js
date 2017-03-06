var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
var task = require('shell-task');

//Construcción del libro en HTML a partir de los MarkDown
gulp.task('build', function() {
  return gulp.src('')
		.pipe(shell(['sudo gitbook build ../docs ../gh-pages']));
});

//Heroku
gulp.task('heroku', function() {
  return gulp.src('')
		.pipe(shell([
         'cd ..',
	 'sudo heroku login',
         'heroku create',
         'git push heroku master:master',
         'heroku open'
         //Falta añadir el link de la app
       ]));
});

gulp.task('deploygb', function() {
  return gulp.src('')
    .pipe(shell(['node ./scripts/deploy-gibook.js']));
});

//Despliegue del libro en GitHub Pages
gulp.task('deploy-gh-pages', function() {
  return gulp.src('')
		.pipe(shell(['node ../scripts/deploy-gh-pages.js']));
});

//Tarea que muestra como ejemplo el funcionamiento de Router
//Ejecutar y luego desde el navegador, acceder a localhost:8000/user/id
gulp.task('routing', function() {
  return gulp.src('')
    .pipe(shell(['node ../src/appRouter.js']));
});


//Tarea que prueba los funcionamientos estudiados en el capítulo 2
//Ejecutar y viendo los métodos de ruta (routingGuide.js o en el RoutingGuide.md), ir probando.
gulp.task('routing-guide', function() {
  return gulp.src('')
    .pipe(shell(['node ../src/routingGuide.js']));
})
