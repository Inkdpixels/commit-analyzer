const {beginsWith} = require('./utilities/');

module.exports = (pluginConfig, {commits}, cb) => {
	let releaseType = null;

	commits.every(commit => {
		const {message} = commit;

		if (beginsWith(message, '!!!')) {
			releaseType = 'major';

			return false;
		}

		if (beginsWith(message, 'FEATURE')) {
			releaseType = 'minor';

			return false;
		}

		if (beginsWith(message, 'BUGFIX') || beginsWith(message, 'SECURITY')) {
			releaseType = 'patch';

			return false;
		}

		return true;
	});

	cb(null, releaseType);
};
