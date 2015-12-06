var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  var opt = {
    entries: ['source/scripts/app.js'],
    debug: true
  }

  browserify({opt})
    .transform('babelify', {'presets': ['es2015', 'react']})
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./assets/scripts'));
})
