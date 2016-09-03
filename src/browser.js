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
