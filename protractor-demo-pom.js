'use strict';
class home_page {
	constructor() {
		//fields from the page
		let firstInput = element(by.model('first'));
		let secondInput = element(by.model('second'));
		/**
		* Async function to get the web page
		**/
		this.get = async () => {
			await browser.get('http://juliemr.github.io/protractor-demo');
		};
		/**
		* Async function to update the value of the first input field
		* @Param number - numeric value to update the field
		*
		**/
		this.setFirst = async (number) => {
			await firstInput.sendKeys(number);
		}
		/**
		* Async function to retrieve the value of the first input field
		* @Return string - numeric value of the field as a string
		*
		**/
		this.getFirst = async () => {
			return await firstInput.getAttribute('value');
		}
		/**
		* Async function to update the value of the second input field
		* @Param number - numeric value to update the field
		*
		**/
		this.setSecond = async (number) => {
			await secondInput.sendKeys(number);
		}
		/**
		* Async function to retrieve the value of the second input field
		* @Return string - numeric value of the field as a string
		*
		**/
		this.getSecond = async () => {
			return await secondInput.getAttribute('value');
		}
	}
	
};
module.exports = new home_page();