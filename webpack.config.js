const webpack = require('webpack');

module.exports = {
	entry: './src/trap.browser.js',
	output: {
		path: './dist',
		filename: 'trap.js',
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
		})
	]
};
