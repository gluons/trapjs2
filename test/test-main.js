require.config({
	baseUrl: '/base',
	paths: {
		'trap': 'dist/trap'
	},
	shim: {
		'test/browser': {
			deps: ['trap'],
			exports: 'Trap'
		}
	},
	deps: ['trap', 'test/browser'],
	callback: window.__karma__.start
});
