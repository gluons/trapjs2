var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');

var del = require('del');

gulp.task('clean', () => {
	return del(['dist/*']);
});

gulp.task('build', ['clean'], () => {
	return gulp.src('src/trap.js')
		.pipe(plumber())
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], () => {
	watch(['src/trap.js', '.babelrc'], () => {
		gulp.start('build');
	});
});

gulp.task('default', ['watch']);
