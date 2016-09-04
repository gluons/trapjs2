const webpack = require('webpack');
const print = require('./print');

let watch = (config = {}) => {
	let compiler  = webpack(config);
	compiler.watch(null, (err, stats) => {
		let jsonStats = stats.toJson();
		if (err) {
			print.fail(config.output.filename);
			console.error(err);
		} else if (jsonStats.errors.length > 0) {
			print.fail(config.output.filename);
			jsonStats.errors.forEach((err) => {
				console.error(err);
			});
		} else {
			print.complete(config.output.filename);
		}
	});
};

module.exports = watch;
