import chai from 'chai';
import contains from './contains.js';

const {expect} = chai;

describe('The "contains utility"', () => {
	it('should return "false" if the passed spec is not found within the string.', done => {
		expect(contains('nope', 'yep')).to.equal(false);

		done();
	});

	it('should return "true" if the passed spec is found within the string.', done => {
		expect(contains('nope yep', 'yep')).to.equal(true);

		done();
	});
});
