const gulp = require('gulp');
const minify = require('gulp-minify');
const babel = require('gulp-babel');

gulp.task('build', () => {

  return gulp.src('dev/js/*.js')
    .pipe(babel())
    .pipe(minify({
      ext: {
        src: '.source.js',
        min: '.min.js'
      }
    }))
    .pipe(gulp.dest('dist/js'));

});
