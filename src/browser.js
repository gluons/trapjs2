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
