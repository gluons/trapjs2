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
