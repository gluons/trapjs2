'use strict';
const expect = require('chai').expect;

const trap = require('../src/trap');

describe('Trap', () => {
	describe('Extended methods', () => {
		describe('Date.prototype.dateEquals()', () => {
			it('should return true if two dates have the same date.', () => {
				let date1 = new Date(2016, 1, 1);
				let date2 = new Date(2016, 1, 1);
				expect(date1.dateEquals(date2)).to.be.true;
			});
			it('should return false if two dates have different date.', () => {
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
	});
	describe('Global functions', () => {
		describe('today()', () => {
			it('should equals date of new Date()', () => {
				expect(trap.today().dateEquals(new Date())).to.be.true;
			});
		});
		describe('repeatUntil()', () => {
			it('should loop until meet a condition', () => {
				let i = 1;
				trap.repeatUntil(() => i == 10, () => i++);
				expect(i).to.equal(10);
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
		describe('reverse()', () => {
			it('should return the reversed string', () => {
				let numbers = '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡';
				expect(trap.reverse(numbers)).to.equal('𝟡𝟠𝟟𝟞𝟝𝟜𝟛𝟚𝟙𝟘');
			});
		});
	});
});
