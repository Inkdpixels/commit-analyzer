import chai from 'chai';
import beginsWith from './beginsWith.js';

const {expect} = chai;

describe('The "beginsWith" utility', () => {
	it('should return a falsy boolean if the passed string does not begin with the second string.', () => {
		expect(beginsWith('nope yep', 'yep')).to.equal(false);
	});

	it('should return a truthy boolean if the passed string does not begin with the second string.', () => {
		expect(beginsWith('nope yep', 'nope')).to.equal(true);
	});
});
