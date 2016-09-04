const webpack = require('webpack');
const print = require('./print');

let build = (config = {}) => {
	return new Promise(function(resolve, reject) {
		let compiler  = webpack(config);
		compiler.run((err, stats) => {
			let jsonStats = stats.toJson();
			if (err) {
				print.fail(config.output.filename);
				reject(err);
			} else if (jsonStats.errors.length > 0) {
				print.fail(config.output.filename);
				reject(jsonStats.errors);
			} else {
				print.complete(config.output.filename);
				resolve();
			}
		});
	});
};

module.exports = build;
