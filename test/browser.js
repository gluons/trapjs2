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
					expect(trap.getCookie('test')).to.not.be.ok;
					trap.setCookie('test', 5, 1);
					expect(trap.getCookie('test')).to.equal(5);
				});
			});
			describe('Query Selector', () => {
				it('should return correct DOM nodes from q()', () => {
					let nodes = document.querySelectorAll('body');
					let qNodes = trap.q('body');
					expect(qNodes).to.have.lengthOf(nodes.length);
					expect(qNodes.length).to.be.above(0);
					expect(qNodes[0]).to.eql(nodes[0]);
				});
			});
		});
	});
});
