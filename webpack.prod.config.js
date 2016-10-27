const webpack = require('webpack');
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
	entry: './src/trap.browser.js',
	output: {
		path: './dist',
		filename: 'trap.min.js',
		library: 'Trap',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			VERSION: JSON.stringify(require('./package.json').version)
		}),
		new BabiliPlugin({
			test: /\.js$/,
			babel: require('babel-core'),
			babili: require('babel-preset-babili')
		})
	]
};
