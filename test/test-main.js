require.config({
	baseUrl: '/base/dist',
	paths: {
		'trap': 'trap.min',
		'browser-test': '../test/browser'
	},
	shim: {
		'browser-test': {
			deps: ['trap']
		}
	},
	deps: ['trap', 'browser-test'],
	callback: window.__karma__.start
});
