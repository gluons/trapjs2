'use strict';
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], () => {
			let trap = factory();
			let trapReturn = {};
			for (let f in trap.global) {
				if (trap.global.hasOwnProperty(f)) {
					trapReturn[f] = trap.global[f];
				}
			}
			for (let f in trap.browser) {
				if (trap.browser.hasOwnProperty(f)) {
					trapReturn[f] = trap.browser[f];
				}
			}
			return trapReturn;
		});
	} else if (typeof module === 'object' && module.exports) {
		let trap = factory();
		let trapReturn = trap.global;
		trapReturn.version = trap.version;
		module.exports = trapReturn;
	} else {
		let trap = factory();
		root.Trap = trap;
		for (let f in trap.global) {
			if (trap.global.hasOwnProperty(f)) {
				root[f] = trap.global[f];
			}
		}
		for (let f in trap.browser) {
			if (trap.browser.hasOwnProperty(f)) {
				root[f] = trap.browser[f];
			}
		}
	}
}(this, function () {
	let trap = {
		version: '1.0.0',
		noConflict: () => {
			if (window) {
				for (let f in trap.global) {
					if (trap.global.hasOwnProperty(f)) {
						delete window[f];
					}
				}
				for (let f in trap.browser) {
					if (trap.browser.hasOwnProperty(f)) {
						delete window[f];
					}
				}
			}
		},
		float: () => {
			if (window) {
				for (let f in trap.global) {
					if (trap.global.hasOwnProperty(f)) {
						window[f] = trap.global[f];
					}
				}
				for (let f in trap.browser) {
					if (trap.browser.hasOwnProperty(f)) {
						window[f] = trap.browser[f];
					}
				}
			}
		}
	};
	/*
	 * Extended methods
	 */
	Date.prototype.dateEquals = function (targetDate) {
		let sourceDate = this;
		if (targetDate instanceof Date) {
			return (sourceDate.getDate() == targetDate.getDate()) && (sourceDate.getMonth() == targetDate.getMonth()) && (sourceDate.getFullYear() == targetDate.getFullYear());
		} else {
			return false;
		}
	};
	String.prototype.unicodeCharAt = function (index) {
		// Support non-BMP characters. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt#Fixing_charAt()_to_support_non-Basic-Multilingual-Plane_(BMP)_characters
		let str = this;
		let ret = '';
		let end = str.length;

		let surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
		while ((surrogatePairs.exec(str)) != null) {
			let li = surrogatePairs.lastIndex;
			if (li - 2 < index) {
				index++;
			} else {
				break;
			}
		}

		if (index >= end || index < 0) {
			return '';
		}

		ret += str.charAt(index);

		if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(index + 1))) {
			ret += str.charAt(index + 1);
		}
		return ret;
	};

	/*
	 * Global functions
	 */
	trap.global = {
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

	/*
	 * Browser functions
	 */
	trap.browser = {
		echo: (text) => {
			document.write(text);
		},
		notify: (text) => {
			alert(text);
		},
		getParameter: (name) => {
			let searchString = window.location.search.substring(1);
			let params = searchString.split('&');
			for (let i in params) {
				let param = params[i].split('=');
				if (param[0] == name) {
					return param[1];
				}
			}
		},
		setCookie: (cname, cvalue, exdays) => {
			let d = new Date();
			d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
			let expires = 'expires=' + d.toUTCString();
			document.cookie = cname + '=' + cvalue + '; ' + expires;
		},
		getCookie: (cname) => {
			let name = cname + '=';
			let ca = document.cookie.split(';');
			for (let i = 0; i < ca.length; i++) {
				let c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					let value = c.substring(name.length, c.length);
					if (!isNaN(value)) {
						return parseFloat(value);
					} else {
						return value;
					}
				}
			}
			return '';
		},
		delCookie: (cname) => {
			document.cookie = cname + '=; expires=' + (new Date(0)).toUTCString();
		},
		loadDoc: (url, elementId) => {
			let xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = () => {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					document.getElementById(elementId).innerHTML = xhttp.responseText;
				}
			};
			xhttp.open('GET', url, true);
			xhttp.send();
		}
	};
	trap.browser.say = trap.browser.notify;
	return trap;
}));
