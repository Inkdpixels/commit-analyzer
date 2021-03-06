import chai from 'chai';
import analyzer from './index.js';

const {expect} = chai;

describe('The "commit-analyzer"', () => {
	it('should return no release type if none commits have the conventional type tags.', done => {
		analyzer({}, {
			commits: [{
				hash: 'asdf',
				message: 'chore: build script'
			}, {
				hash: 'dsf34324',
				message: 'TEST: build script'
			}]
		}, (err, type) => {
			expect(type).to.equal(null);

			done();
		});
	});

	it('should return release "major" if breaking changes are specified in the commit message.', done => {
		analyzer({}, {
			commits: [{
				hash: 'asdf',
				message: '!!! BUGFIX: build script'
			}, {
				hash: 'dsf34324',
				message: 'TEST: build script'
			}]
		}, (err, type) => {
			expect(type).to.equal('major');

			done();
		});
	});

	it('should return release "minor" if feature tags are specified in commit messages.', done => {
		analyzer({}, {
			commits: [{
				hash: 'asdf',
				message: 'FEATURE: build script'
			}, {
				hash: 'dsf34324',
				message: 'TEST: build script'
			}]
		}, (err, type) => {
			expect(type).to.equal('minor');

			done();
		});
	});

	it('should return release "patch" if bugfix tags are specified in commit messages.', done => {
		analyzer({}, {
			commits: [{
				hash: 'asdf',
				message: 'BUGFIX: build script'
			}, {
				hash: 'dsf34324',
				message: 'TEST: build script'
			}]
		}, (err, type) => {
			expect(type).to.equal('patch');

			done();
		});
	});

	it('should return release "patch" if security tags are specified in commit messages.', done => {
		analyzer({}, {
			commits: [{
				hash: 'asdf',
				message: 'SECURITY: build script'
			}, {
				hash: 'dsf34324',
				message: 'TEST: build script'
			}]
		}, (err, type) => {
			expect(type).to.equal('patch');

			done();
		});
	});
});
