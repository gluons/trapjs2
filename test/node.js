'use strict';
const expect = require('chai').expect;

const trap = require('../src/trap');

describe('Trap', () => {
	describe('Extended methods', () => {
		describe('Date.today()', () => {
			it('should return date part of today without time part', () => {
				let now = new Date();
				let today = Date.today();
				expect(today.getDate()).to.equal(now.getDate());
				expect(today.getMonth()).to.equal(now.getMonth());
				expect(today.getFullYear()).to.equal(now.getFullYear());
				expect(today.getHours()).to.equal(0);
				expect(today.getMinutes()).to.equal(0);
				expect(today.getSeconds()).to.equal(0);
			});
		});
		describe('Date.prototype.dateEquals()', () => {
			it('should return true if two dates are the same date.', () => {
				let date1 = new Date(2016, 1, 1);
				let date2 = new Date(2016, 1, 1);
				expect(date1.dateEquals(date2)).to.be.true;
			});
			it('should return false if two dates are different date.', () => {
				let date1 = new Date(2016, 1, 1);
				let date2 = new Date(2016, 1, 2);
				expect(date1.dateEquals(date2)).to.be.false;
			});
		});
		describe('String.prototype.unicodeCharAt()', () => {
			it('should return correct unicode character at given index.', () => {
				let numbers = '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡';
				expect(numbers.unicodeCharAt(5)).to.equal('𝟝');
			});
		});
		describe('String.prototype.reverse()', () => {
			it('should return reversed string', () => {
				let numbers = '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡';
				expect(numbers.reverse()).to.equal('𝟡𝟠𝟟𝟞𝟝𝟜𝟛𝟚𝟙𝟘');
			});
		});
	});
	describe('Global functions', () => {
		describe('today()', () => {
			it('should equals date of new Date()', () => {
				expect(trap.today().dateEquals(new Date())).to.be.true;
			});
		});
		describe('repeat()', () => {
			it('should loop N times', () => {
				let i = 0;
				trap.repeat(10, () => i++);
				expect(i).to.equal(10);
			});
		});
		describe('sqrt()', () => {
			it('should return square root of N', () => {
				expect(trap.sqrt(25)).to.equal(5);
				expect(trap.sqrt(-1)).to.be.NaN;
			});
		});
	});
});
