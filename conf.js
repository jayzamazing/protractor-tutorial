exports.config = {
	//address of the server
	seleniumAddress: 'http://localhost:4444/wd/hub',
	//capabilities to pass to webdriver instance
	capabilities: {
		'browserName': 'chrome'
	},
	//framework to use
	framework: 'jasmine',
	//specs or tests to run
	// specs: ['spec1.js', 'protractor-demo-test.js'],
	//specs to run as a part of a suite, glob patterns and arrays are acceptable
	suites: {
		start: 'spec1.js',
		demo: '*-spec.js'
	},
	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		showColors: true, // Use colors in the command line report.
	}
}