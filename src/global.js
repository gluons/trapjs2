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
	repeat(n, fn) {
		if (typeof fn === 'function') {
			for (let i = 0; i < n; i++) {
				fn();
			}
		}
	},
	sqrt(number) {
		return Math.sqrt(number);
	},
	sq(number) {
		return Math.pow(number, 2);
	},
	pow(number, n) {
		return Math.pow(number, n);
	}
};

module.exports = global;
