const gulp = require('gulp');

const del = require('del');

const build = require('./build/build');
const watch = require('./build/watch');

gulp.task('clean', () => {
	return del(['dist/*']);
});

gulp.task('build', ['clean'], () => {
	return Promise.all([
		build(require('./webpack.config')),
		build(require('./webpack.prod.config'))
	]);
});

gulp.task('watch', ['build'], () => {
	watch(require('./webpack.config'));
	watch(require('./webpack.prod.config'));
});

gulp.task('default', ['watch']);
