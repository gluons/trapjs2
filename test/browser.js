/* globals expect */
'use strict';
define(['Trap'], (trap) => {
	describe('Trap', () => {
		describe('Browser functions', () => {
			describe('Cookie', () => {
				it('should set and get cookie correctly', () => {
					expect(trap.getCookie).to.exist;
					expect(trap.setCookie).to.exist;
					trap.delCookie('test');
					expect(trap.getCookie('test')).to.be.empty;
					trap.setCookie('test', 5, 1);
					expect(trap.getCookie('test')).to.equal(5);
				});
			});
		});
	});
});
