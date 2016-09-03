'use strict';

const version = require('../package.json').version;

require('./native');
const global = require('./global');

const Trap = {
	version: version
};

const isOnBrowser = () => typeof window !== 'undefined';

for (let methodName in global) {
	if (global.hasOwnProperty(methodName)) {
		Trap[methodName] = global[methodName];
	}
}

if (isOnBrowser()) {
	const browser = require('./browser');
	for (let methodName in browser) {
		if (browser.hasOwnProperty(methodName)) {
			Trap[methodName] = browser[methodName];
		}
	}
	Trap.noConflict = () => {
		for (let methodName in global) {
			if (global.hasOwnProperty(methodName)) {
				delete window[methodName];
			}
		}
		for (let methodName in browser) {
			if (browser.hasOwnProperty(methodName)) {
				delete window[methodName];
			}
		}
	};
	Trap.distribute = () => {
		for (let methodName in global) {
			if (global.hasOwnProperty(methodName)) {
				window[methodName] = global[methodName];
			}
		}
		for (let methodName in browser) {
			if (browser.hasOwnProperty(methodName)) {
				window[methodName] = browser[methodName];
			}
		}
	};
}
Object.freeze(Trap);

module.exports = Trap;
