'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
 
gulp.task('sass', function () {
  return gulp.src('./styles/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./styles/*.scss', ['sass']);
});

//gulp.task('browser-sync', function() {
 //   browserSync.init({
//        server: {
 //          baseDir: "./"
 //       }
 //   });
//}//);