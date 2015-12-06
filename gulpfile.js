var gulp = require('gulp');

require('./gulp')([
  'browserify',
  'connect',
  'watchify'
])

gulp.task('default', ['connect', 'watch', 'watchify']);
