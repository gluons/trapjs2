const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
	entry: './src/trap.js',
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
		new BabiliPlugin({
			test: /\.js$/
		})
	]
};
