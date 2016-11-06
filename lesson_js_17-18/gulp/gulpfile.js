var gulp = require('gulp');
// подключаем gulp-sass
var sass = require('gulp-sass');



gulp.task('sass', function(){
  return gulp.src('scss/styles.scss')
    .pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
    .pipe(gulp.dest('css'))
});

var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/'));
});




gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('default', function() {
	 console.log('default');
  // place code for your default task here
});