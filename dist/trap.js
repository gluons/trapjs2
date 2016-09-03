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

	'use strict';

	const version = __webpack_require__(1).version;

	__webpack_require__(2);
	const global = __webpack_require__(3);

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
		const browser = __webpack_require__(4);
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"name": "trapjs2",
		"version": "1.0.1",
		"description": "Function library for easy use.",
		"main": "src/trap.js",
		"scripts": {
			"build": "webpack",
			"watch": "webpack --watch",
			"test": "mocha --harmony test/node.js && karma start --single-run"
		},
		"repository": {
			"type": "git",
			"url": "git+https://github.com/gluons/trapjs2.git"
		},
		"keywords": [
			"trap",
			"js",
			"trapjs",
			"trapjs2",
			"function",
			"functions",
			"library"
		],
		"author": {
			"name": "Gluons",
			"email": "sarunta@gmail.com"
		},
		"license": "MIT",
		"bugs": {
			"url": "https://github.com/gluons/trapjs2/issues"
		},
		"homepage": "https://github.com/gluons/trapjs2",
		"dependencies": {},
		"devDependencies": {
			"babili-webpack-plugin": "0.0.2",
			"chai": "*",
			"chokidar": "^1.6.0",
			"del": "^2.2.0",
			"gulp": "^3.9.1",
			"gulp-plumber": "^1.1.0",
			"json-loader": "^0.5.4",
			"karma": "^1.2.0",
			"karma-chai": "^0.1.0",
			"karma-firefox-launcher": "^1.0.0",
			"karma-mocha": "^1.0.1",
			"karma-mocha-reporter": "^2.0.2",
			"karma-requirejs": "^1.0.0",
			"mocha": "*",
			"requirejs": "^2.2.0",
			"uglify-js": "^2.7.3",
			"webpack": "^1.13.2"
		}
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

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


/***/ },
/* 3 */
/***/ function(module, exports) {

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

	module.exports = global;


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	const browser = {
		q: document.querySelectorAll.bind(document),
		echo: (text) => {
			document.write(text);
		},
		notify: (text) => {
			alert(text);
		},
		get say() {
			return this.notify;
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
	Object.freeze(browser);

	module.exports = browser;


/***/ }
/******/ ])
});
;