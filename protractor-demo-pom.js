'use strict';
class home_page {
	constructor() {
		//fields from the page
		this.firstInput = element(by.model('first'));
		this.secondInput = element(by.model('second'));
		this.operators = element(by.model('operator'));
		this.go = element(by.id('gobutton'));
		this.result = element(by.css('h2[class="ng-binding"]'));
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
		/**
		* Async function to change the value of the selector
		* @param string - numeric symbol
		*
		**/
		async setOperator(operation) {
			await this.operators.sendKeys('-');
		};
		/**
		* Async function to get the value of the select option
		* @Return string - returns the string value of the selected option
		**/
		async getOperator() {
			// return await this.operator.getAttribute('value');
			return await this.operators.getAttribute('value');
		}
		/**
		* Async function to click on the go button
		**/
		async clickGo() {
			await this.go.click();
		}
		/**
		* Async function to get the results after the go button has been pressed
		* @Return string - numeric value
		*/
		async getResult() {
			return await this.result.getText();
		}
};
module.exports = new home_page();