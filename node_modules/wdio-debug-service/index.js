'use strict';

module.exports = {
	before (config) {
		let { debug } = browser.options;

		if (debug) {
			console.log('Paused in debugger on port', process.debugPort);

			/** The first breakpoint should be skipped */
			debugger;
		}
	}
};
