const gulp = require('gulp');
const minifyJS = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

// JS main minified
gulp.task('minify-js', () => {
  return gulp.src('app/js/*.js')
    .pipe(minifyJS())
    .pipe(gulp.dest('src/js'));
});

// CSS main minified
gulp.task('minify-css', () => {
  return gulp.src('app/css/main.css')
    .pipe(cleanCSS())
    .pipe(rename('main.min.css')) 
    .pipe(gulp.dest('src/css'));
});

// Listening to changes
gulp.task('default', () => {
  gulp.watch('app/js/*.js', gulp.series('minify-js'));
  gulp.watch('app/css/main.css', gulp.series('minify-css'));
});
