'use strict';

let minimist = require('minimist');

let flags = minimist(process.argv.slice(2));

module.exports = {
	onPrepare (config) {
		let { port } = Object.assign({ port: 6666 }, config.debugOptions);

		if (typeof flags.debug === 'number') {
			port = flags.debug;
		}

		process.debugPort = port - 1;
	},

	onComplete () {
		if (this.process) {
			this.process.kill();
		}
	}
};
