const gulp = require('gulp');
const minifyJS = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

const path = {
  js: 'app/js/*.js',
  css: 'app/css/main.css'
};

// JS main minified
gulp.task('minify-js', () => {
  return gulp.src(path.js)
    .pipe(minifyJS())
    .pipe(gulp.dest('src/js'));
});

// CSS main minified
gulp.task('minify-css', () => {
  return gulp.src(path.css)
    .pipe(cleanCSS())
    .pipe(rename('main.min.css')) 
    .pipe(gulp.dest('src/css'));
});

// Listening to changes
gulp.task('default', () => {
  gulp.watch(path.js, gulp.series('minify-js'));
  gulp.watch(path.css, gulp.series('minify-css'));
});
