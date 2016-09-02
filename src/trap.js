'use strict';

import { version } from '../package.json';

import './native.js';
import global from './global.js';
import browser from './browser.js';

const Trap = {
	version: version
};

for (let methodName in global) {
	if (global.hasOwnProperty(methodName)) {
		Trap[methodName] = global[methodName];
	}
}

if (!(typeof module === 'object' && module.exports)) {
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

export default Trap;
