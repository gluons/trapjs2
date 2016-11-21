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

	var Trap = __webpack_require__(1);
	var browser = __webpack_require__(4);

	Trap.version = ("1.0.1");

	for (var methodName in global) {
		if (global.hasOwnProperty(methodName)) {
			Trap[methodName] = global[methodName];
		}
	}
	for (var _methodName in browser) {
		if (browser.hasOwnProperty(_methodName)) {
			Trap[_methodName] = browser[_methodName];
		}
	}

	Trap.noConflict = function () {
		for (var _methodName2 in global) {
			if (global.hasOwnProperty(_methodName2)) {
				delete window[_methodName2];
			}
		}
		for (var _methodName3 in browser) {
			if (browser.hasOwnProperty(_methodName3)) {
				delete window[_methodName3];
			}
		}
	};
	Trap.distribute = function () {
		for (var _methodName4 in global) {
			if (global.hasOwnProperty(_methodName4)) {
				window[_methodName4] = global[_methodName4];
			}
		}
		for (var _methodName5 in browser) {
			if (browser.hasOwnProperty(_methodName5)) {
				window[_methodName5] = browser[_methodName5];
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
	var global = __webpack_require__(3);

	var Trap = {};

	for (var methodName in global) {
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
		var now = new Date();
		now.setHours(0, 0, 0, 0);
		return now;
	};

	Date.prototype.dateEquals = function (targetDate) {
		var sourceDate = this;
		if (targetDate instanceof Date) {
			return sourceDate.getDate() == targetDate.getDate() && sourceDate.getMonth() == targetDate.getMonth() && sourceDate.getFullYear() == targetDate.getFullYear();
		} else {
			return false;
		}
	};

	String.prototype.unicodeCharAt = function (index) {
		// Support non-BMP characters. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt#Fixing_charAt()_to_support_non-Basic-Multilingual-Plane_(BMP)_characters
		var str = this;
		var result = '';
		var end = str.length;

		var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
		while (surrogatePairs.exec(str) != null) {
			var li = surrogatePairs.lastIndex;
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
		var str = this;
		var result = '';
		for (var i = str.length - 1; i >= 0; i--) {
			result += str.unicodeCharAt(i);
		}
		return result;
	};

	String.prototype.contains = function (searchString) {
		return !!~this.indexOf(searchString);
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var global = {
		log: function log() {
			var _console;

			(_console = console).log.apply(_console, arguments);
		},
		now: function now() {
			return new Date();
		},
		today: function today() {
			return Date.today();
		},
		repeat: function repeat(n, fn) {
			if (typeof fn === 'function') {
				for (var i = 0; i < n; i++) {
					fn();
				}
			}
		},
		sqrt: function sqrt(number) {
			return Math.sqrt(number);
		},
		sq: function sq(number) {
			return Math.pow(number, 2);
		},
		pow: function pow(number, n) {
			return Math.pow(number, n);
		}
	};

	module.exports = global;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var browser = {
		q: document.querySelectorAll.bind(document),
		echo: function echo(text) {
			document.write(text);
		},
		getParameter: function getParameter(name) {
			var searchString = window.location.search.substring(1);
			var params = searchString.split('&');
			for (var i in params) {
				var param = params[i].split('=');
				if (param[0] == name) {
					return param[1];
				}
			}
		},
		setCookie: function setCookie(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
			var expires = 'expires=' + d.toUTCString();
			document.cookie = cname + '=' + cvalue + '; ' + expires;
		},
		getCookie: function getCookie(cname) {
			var name = cname + '=';
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					var value = c.substring(name.length, c.length);
					if (!isNaN(value)) {
						return parseFloat(value);
					} else {
						return value;
					}
				}
			}
			return null;
		},
		delCookie: function delCookie(cname) {
			document.cookie = cname + '=; expires=' + new Date(0).toUTCString();
		},
		loadDoc: function loadDoc(url, elementId) {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function () {
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