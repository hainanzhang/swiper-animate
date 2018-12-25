var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var watch = require('gulp-watch');//监听
gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});
gulp.task('watchscss', function () { //监听
    gulp.watch('scss/*.scss', ['sass'])
})
