var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
var task = require('shell-task');

//Construcción del libro en HTML a partir de los MarkDown
gulp.task('build', function() {
  return gulp.src('')
		.pipe(shell(['sudo gitbook build ./docs ./gh-pages']));
});

//Despliegue del libro en GitHub Pages
gulp.task('deploy-gh-pages', function() {
  return gulp.src('')
		.pipe(shell(['node ./scripts/deploy-gh-pages.js']));
});
