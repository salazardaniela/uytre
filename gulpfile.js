var gulp = require('gulp'),
	sass = require('gulp-sass'),
	tpl = require('gulp-tpl'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	connect = require('gulp-connect'),
	buildPath = '';

gulp.task('sass', function () {
  gulp.src('page/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('deploy/'));
});

gulp.task('scripts', function () {
	gulp.src('page/scripts/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(uglify())
	.pipe(gulp.dest('deploy/'));
});

gulp.task('hbs', function() {
  return gulp.src('page/html/*.hbs')
        .pipe(tpl.html())
        .pipe(gulp.dest('deploy/'));
});

gulp.task('webserver', function() {
	connect.server({
	    root: 'deploy/'
 	});
});
 
gulp.task('dev', ['hbs','scripts','sass','webserver'], function () {
	gulp.watch('page/html/*.hbs', ['hbs']);
	gulp.watch('page/html/*.json', ['hbs']);
	gulp.watch('page/scripts/*.js', ['scripts']);
	gulp.watch('page/scss/*.scss', ['sass']);
});