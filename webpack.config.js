module.exports = {
	entry: './src/trap.js',
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
	}
};
