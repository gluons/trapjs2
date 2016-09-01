const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');

let cache;

const build = function () {
	rollup.rollup({
		entry: 'src/trap.js',
		cache: cache,
		plugins: [
			babel({
				exclude: [
					'node_modules/**',
					'*.json'
				]
			}),
			json()
		]
	})
	.then((bundle) => {
		let options = {
			format: 'umd',
			moduleId: 'trapjs',
			moduleName: 'Trap',
			indent: '\t',
		};
		let result = bundle.generate(options);

		// Cache
		cache = result;

		bundle.write(Object.assign(
			{
				dest: 'dist/trap.js'
			},
			options
		));
	})
	.catch((ex) => {
		console.error(ex);
	});
};

build();

module.exports = build;
