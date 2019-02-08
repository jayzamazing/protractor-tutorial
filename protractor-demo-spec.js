'use strict';

let home_page = require('./protractor-demo-pom');

describe('Some simple tests for the super calculator', () => {
	beforeEach(async() => {
		await home_page.getWebPage();
	});
	it('get the website to ensure it loads', async () => {
		//check the title for the home page
		expect(browser.getTitle()).toEqual('Super Calculator');
	});
	it('set first input', async () => {
		//set the text for the first input field
		await home_page.setFirst(5);
		//verify the field has been changed
		expect(await home_page.getFirst()).toEqual('5');
	});
	it('set second input', async () => {
		//set the text for the first input field
		await home_page.setSecond(3);
		//verify the field has been changed
		expect(await home_page.getSecond()).toEqual('3');
	});
	it('set operation', async () => {
		//set the operator
		await home_page.setOperator('-');
		//verify that the selector was changed
		expect(await home_page.getOperator()).toEqual('SUBTRACTION');
	});
	fit('calculate', async () => {
		//set the text for the first input field
		await home_page.setFirst(5);
		//set the text for the first input field
		await home_page.setSecond(3);
		//set the operator
		await home_page.setOperator('-');
		await home_page.clickGo();
		expect(await home_page.getResult()).toEqual('2');
	});
});