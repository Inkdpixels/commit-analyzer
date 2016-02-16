import {beginsWith} from './utilities/';

export default (pluginConfig, {commits}, cb) => {
	let releaseType = null;

	commits.every(commit => {
		const {message} = commit;

		if (beginsWith(message, '!!!')) {
			releaseType = 'major';

			return false;
		}

		if (beginsWith(message, 'FEATURE')) {
			releaseType = 'minor';
		}

		if (!releaseType && (beginsWith(message, 'BUGFIX') || beginsWith(message, 'SECURITY'))) {
			releaseType = 'patch';
		}

		return true;
	});

	cb(null, releaseType);
};
