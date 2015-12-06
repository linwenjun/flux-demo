var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

gulp.task('watchify', function() {
  var opt = {
    entries: ['source/scripts/app.js'],
    debug: true,
    plugin: [watchify]
  }

  var w = browserify(opt).transform('babelify', {'presets': ['es2015', 'react']});

  w.on('update', function() {
    console.log('Start fast build...');
    var startTime = new Date().getTime();
    w.bundle()
      .pipe(source('app.js'))
      .pipe(gulp.dest('./assets/scripts'))
      .on('end', function() {
        var usedTime = new Date().getTime() - startTime;
        console.log('Complete fast build after ' + usedTime + 'ms ...');
      });
  })

  return w.bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./assets/scripts'));
})
