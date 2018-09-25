'use strict';

// --------------------------------------------------------

module.exports = function (config)
{
	config.set(
	{
		files :
		[
			'tests/KoCo.test.js'
		],

		frameworks :
		[
			'browserify',
			'mocha',
			'source-map-support'
		],

		browsers :
		[
			'ChromeHeadless',
			'FirefoxHeadless'
		],

		preprocessors :
		{
			'tests/KoCo.test.js' : ['browserify']
		},

		client :
		{
			mocha : { timeout : 5000 }
		}
	});
};
