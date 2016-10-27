(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Trap", [], factory);
	else if(typeof exports === 'object')
		exports["Trap"] = factory();
	else
		root["Trap"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global VERSION */
	'use strict';

	const Trap = __webpack_require__(1);
	const browser = __webpack_require__(4);

	Trap.version = ("1.0.2");

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

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);
	const global = __webpack_require__(3);

	const Trap = {};

	for (let methodName in global) {
		if (global.hasOwnProperty(methodName)) {
			Trap[methodName] = global[methodName];
		}
	}

	module.exports = Trap;


/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Date.today = function () {
		let now = new Date();
		return new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate()
		);
	};

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
		let result = '';
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

		result += str.charAt(index);

		if (/[\uD800-\uDBFF]/.test(result) && /[\uDC00-\uDFFF]/.test(str.charAt(index + 1))) {
			result += str.charAt(index + 1);
		}
		return result;
	};

	String.prototype.reverse = function () {
		let str = this;
		let result = '';
		for (let i = str.length - 1; i >= 0; i--) {
			result += str.unicodeCharAt(i);
		}
		return result;
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

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


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	const browser = {
		q: document.querySelectorAll.bind(document),
		echo(text) {
			document.write(text);
		},
		getParameter(name) {
			let searchString = window.location.search.substring(1);
			let params = searchString.split('&');
			for (let i in params) {
				let param = params[i].split('=');
				if (param[0] == name) {
					return param[1];
				}
			}
		},
		setCookie(cname, cvalue, exdays) {
			let d = new Date();
			d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
			let expires = 'expires=' + d.toUTCString();
			document.cookie = cname + '=' + cvalue + '; ' + expires;
		},
		getCookie(cname) {
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
			return null;
		},
		delCookie(cname) {
			document.cookie = cname + '=; expires=' + (new Date(0)).toUTCString();
		},
		loadDoc(url, elementId) {
			let xhr = new XMLHttpRequest();
			xhr.onreadystatechange = () => {
				if (xhr.readyState == 4 && xhr.status == 200) {
					document.getElementById(elementId).innerHTML = xhr.responseText;
				}
			};
			xhr.open('GET', url, true);
			xhr.send();
		}
	};

	module.exports = browser;


/***/ }
/******/ ])
});
;