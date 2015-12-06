var gulp = require('gulp');

require('./gulp')([
  'browserify',
  'connect'
])

gulp.task('default', ['connect', 'watch']);
