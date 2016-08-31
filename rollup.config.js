import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

export default {
	entry: 'src/trap.js',
	format: 'umd',
	moduleId: 'trapjs',
	moduleName: 'Trap',
	indent: '\t',
	plugins: [
		babel({
			exclude: [
				'node_modules/**',
				'*.json'
			]
		}),
		json()
	],
	dest: 'dist/trap.js'
};
