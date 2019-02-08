'use strict';
class home_page {
	constructor() {
		//fields from the page
		this.firstInput = element(by.model('first'));
		this.secondInput = element(by.model('second'));
		this.operator = element(by.model('operator'));
	}
	/**
		* Async function to get the web page
		**/
		async getWebPage() {
			await browser.get('http://juliemr.github.io/protractor-demo');
		};
		/**
		* Async function to update the value of the first input field
		* @Param number - numeric value to update the field
		*
		**/
		async setFirst(number) {
			await this.firstInput.sendKeys(number);
		};
		/**
		* Async function to retrieve the value of the first input field
		* @Return string - numeric value of the field as a string
		*
		**/
		async getFirst() {
			return await this.firstInput.getAttribute('value');
		};
		/**
		* Async function to update the value of the second input field
		* @Param number - numeric value to update the field
		*
		**/
		async setSecond(number) {
			await this.secondInput.sendKeys(number);
		};
		/**
		* Async function to retrieve the value of the second input field
		* @Return string - numeric value of the field as a string
		*
		**/
		async getSecond() {
			return await this.secondInput.getAttribute('value');
		};
		async setOperator() {
			
		};
	
};
module.exports = new home_page();