(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('trapjs', factory) :
  (global.Trap = factory());
}(this, (function () { 'use strict';

	var version = "1.0.1";

	Date.prototype.dateEquals = function (targetDate) {
		var sourceDate = this;
		if (targetDate instanceof Date) {
			return sourceDate.getDate() == targetDate.getDate() && sourceDate.getMonth() == targetDate.getMonth() && sourceDate.getFullYear() == targetDate.getFullYear();
		} else {
			return !1;
		}
	};
	String.prototype.unicodeCharAt = function (index) {
		var str = this;
		var ret = '';
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

		ret += str.charAt(index);

		if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(index + 1))) {
			ret += str.charAt(index + 1);
		}
		return ret;
	};

	var global$1 = {
		log: function log() {
			var _console;

			(_console = console).log.apply(_console, arguments);
		},
		today: function today() {
			return new Date();
		},
		repeatUntil: function repeatUntil(conditionFunc, exec) {
			while (!conditionFunc()) {
				exec();
			}
		},
		repeat: function repeat(numTimes, exec) {
			for (var i = 0; i < numTimes; i++) {
				exec();
			}
		},
		sqrt: function sqrt(number) {
			return Math.sqrt(number);
		},
		reverse: function reverse(str) {
			var ret = '';
			for (var i = str.length - 1; i >= 0; i--) {
				ret += str.unicodeCharAt(i);
			}
			return ret;
		}
	};
	Object.freeze(global$1);

	var browser = {
		echo: function echo(text) {
			document.write(text);
		},
		notify: function notify(text) {
			alert(text);
		},
		get say() {
			return this.notify;
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
			return '';
		},
		delCookie: function delCookie(cname) {
			document.cookie = cname + '=; expires=' + new Date(0).toUTCString();
		},
		loadDoc: function loadDoc(url, elementId) {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (xhttp.readyState == 4 && xhttp.status == 200) {
					document.getElementById(elementId).innerHTML = xhttp.responseText;
				}
			};
			xhttp.open('GET', url, !0);
			xhttp.send();
		}
	};
	Object.freeze(browser);

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};

	var Trap = {
		version: version
	};

	for (var methodName in global$1) {
		if (global$1.hasOwnProperty(methodName)) {
			Trap[methodName] = global$1[methodName];
		}
	}

	if (!((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports)) {
		for (var _methodName in browser) {
			if (browser.hasOwnProperty(_methodName)) {
				Trap[_methodName] = browser[_methodName];
			}
		}
		Trap.noConflict = function () {
			for (var _methodName2 in global$1) {
				if (global$1.hasOwnProperty(_methodName2)) {
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
			for (var _methodName4 in global$1) {
				if (global$1.hasOwnProperty(_methodName4)) {
					window[_methodName4] = global$1[_methodName4];
				}
			}
			for (var _methodName5 in browser) {
				if (browser.hasOwnProperty(_methodName5)) {
					window[_methodName5] = browser[_methodName5];
				}
			}
		};
	}
	Object.freeze(Trap);

	return Trap;

})));