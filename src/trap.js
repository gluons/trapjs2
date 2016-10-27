'use strict';

require('./native');
const global = require('./global');

const Trap = {};

for (let methodName in global) {
	if (global.hasOwnProperty(methodName)) {
		Trap[methodName] = global[methodName];
	}
}

module.exports = Trap;
