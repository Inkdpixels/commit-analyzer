import {contains} from './utilities/';

export default (pluginConfig, {commits}, cb) => {
	let releaseType = null;

	commits.every(commit => {
		const {message} = commit;

		if (contains(message, '[!!!]')) {
			releaseType = 'major';

			return false;
		}

		if (contains(message, '[FEATURE]')) {
			releaseType = 'minor';
		}

		if (!releaseType && contains(message, '[BUGFIX]')) {
			releaseType = 'patch';
		}

		return true;
	});

	cb(null, releaseType);
};
