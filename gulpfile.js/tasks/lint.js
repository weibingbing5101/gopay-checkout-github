/**
 * @file 静态代码检查
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');

var config = require('../config/lint');

console.log(config.lintrc)
var configObj = {
  useEslintrc: false,
  globals:{
      "jQuery": true,
      "$": true,
      "angular": true
  },
  rules: {
    'comma-dangle': 2,
    'no-cond-assign': 2,
    //'no-console': 2
    'no-fallthrough': 2,
    'no-unused-vars': 2
  }
}

gulp.task('lint', function() {
  return gulp.src(config.devSrc)
    .pipe(eslint(configObj))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:concat', function() {
  return gulp.src(config.devSrc)
    .pipe(concat('ffan-m.js'))
    .pipe(gulp.dest(config.dest))
    .pipe(eslint(configObj))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});