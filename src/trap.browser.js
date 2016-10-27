/* global VERSION */
'use strict';

const Trap = require('./trap');
const browser = require('./browser');

Trap.version = VERSION;

for (let methodName in global) {
	if (global.hasOwnProperty(methodName)) {
		Trap[methodName] = global[methodName];
	}
}
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

module.exports = Trap;
