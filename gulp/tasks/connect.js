var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  })
})

gulp.task('html', function() {
  gulp.src('index.html')
    .pipe(connect.reload());
})

gulp.task('watch', function() {
  gulp.watch(['assets/scripts/*.js'], ['html']);
})
