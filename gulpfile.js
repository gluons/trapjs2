const gulp = require('gulp');

const del = require('del');
const gutil = require('gulp-util');
const webpack = require('webpack');

gulp.task('clean', () => {
	return del(['dist/*']);
});

gulp.task('build:dist', ['clean'], (cb) => {
	webpack(require('./webpack.config'), (err, stats) => {
		if (err) {
			throw new gutil.PluginError("webpack", err);
		}
		gutil.log("[webpack]", stats.toString({
			colors: true
		}));
		cb();
	});
});

gulp.task('build:min', ['clean'], (cb) => {
	webpack(require('./webpack.prod.config'), (err, stats) => {
		if (err) {
			throw new gutil.PluginError("webpack", err);
		}
		gutil.log("[webpack]", stats.toString({
			colors: true
		}));
		cb();
	});
});

gulp.task('build', ['build:dist', 'build:min']);

gulp.task('watch:dist', ['build:dist'], () => {
	let compiler = webpack(require('./webpack.config'));
	compiler.watch(null, (err, stats) => {
		if (err) {
			throw new gutil.PluginError("webpack", err);
		}
		gutil.log("[webpack]", stats.toString({
			colors: true
		}));
	});
});

gulp.task('watch:min', ['build:min'], () => {
	let compiler = webpack(require('./webpack.prod.config'));
	compiler.watch(null, (err, stats) => {
		if (err) {
			throw new gutil.PluginError("webpack", err);
		}
		gutil.log("[webpack]", stats.toString({
			colors: true
		}));
	});
});

gulp.task('watch', ['watch:dist', 'watch:min']);

gulp.task('default', ['watch']);
