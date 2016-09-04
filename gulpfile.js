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
		build(require('./webpack.config.prd'))
	]);
});

gulp.task('watch', ['build'], () => {
	watch(require('./webpack.config'));
	watch(require('./webpack.config.prd'));
});

gulp.task('default', ['watch']);
