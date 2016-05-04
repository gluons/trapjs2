var expect = require('chai').expect;

var trap = require('../src/trap');

describe('Trap', () => {
	describe('today()', () => {
		it('should equals date of new Date()', () => {
			expect(trap.today().dateEquals(new Date())).to.equal(true);
		});
	});
});
