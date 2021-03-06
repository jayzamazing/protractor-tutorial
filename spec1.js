'use strict';
describe('Protractor start', () => {
	it('Open angular website', () => {
		//load webpages
		browser.get("https://angularjs.org");
	});
	it('open website and wait 5 seconds before closing', function() {
		browser.get('http://juliemr.github.io/protractor-demo')
		//after page is loaded, wait for promise to resolve
		.then(() => {
			//wait for 5 seconds on page
			browser.sleep(5000);
		//after browser has slept for 5 seconds, wait for promise to resolve
		}).then(() => {
			//log that we are finished
			console.log('finished');
		});
	});
});