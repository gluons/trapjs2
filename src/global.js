'use strict';

const global = {
	log(...text) {
		console.log(...text);
	},
	now() {
		return new Date();
	},
	today() {
		return Date.today();
	},
	repeat(numTimes, exec) {
		if (typeof exec === 'function') {
			for (let i = 0; i < numTimes; i++) {
				exec();
			}
		}
	},
	sqrt(number) {
		return Math.sqrt(number);
	}
};

module.exports = global;
