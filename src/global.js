'use strict';

const global = {
	log: (...text) => {
		console.log(...text);
	},
	today: () => {
		return new Date();
	},
	repeatUntil: (conditionFunc, exec) => {
		while (!conditionFunc()) {
			exec();
		}
	},
	repeat: (numTimes, exec) => {
		for (let i = 0; i < numTimes; i++) {
			exec();
		}
	},
	sqrt: (number) => {
		return Math.sqrt(number);
	},
	reverse: (str) => {
		let ret = '';
		for (let i = str.length - 1; i >= 0; i--) {
			ret += str.unicodeCharAt(i);
		}
		return ret;
	}
};
Object.freeze(global);

export default global;
