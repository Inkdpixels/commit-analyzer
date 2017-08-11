const beginsWith = require('./beginsWith.js');

describe('beginsWith()', () => {
	it('should return a falsy boolean if the passed string does not begin with the second string.', () => {
		expect(beginsWith('nope yep', 'yep')).toBe(false);
	});

	it('should return a truthy boolean if the passed string does not begin with the second string.', () => {
		expect(beginsWith('nope yep', 'nope')).toBe(true);
	});
});
