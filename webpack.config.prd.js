const clone = require('clone');
const BabiliPlugin = require("babili-webpack-plugin");

const devConfig = require('./webpack.config');

let prdConfig = clone(devConfig);

prdConfig.output.filename = 'trap.min.js';
prdConfig.plugins = [
	new BabiliPlugin({
		test: /\.js$/
	})
];

module.exports = prdConfig;
