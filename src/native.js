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

String.prototype.contains = function (searchValue) {
	return !!~this.indexOf(searchValue);
};
