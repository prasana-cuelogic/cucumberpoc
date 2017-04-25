
var assert = require('assert');
var seleniumWebdriver = require('selenium-webdriver'), By = seleniumWebdriver.By;
var MicrolistPage = require('../page_object/microlist.page');
var LoginPage = require('../page_object/login.page');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {

    Given('I am logged in as client', function (callback) {
        LoginPage.clientLogin(this.driver);
        callback();
    });

    Given(/^I am on client microlist page$/, function(callback) {
        this.driver.get(MicrolistPage.url);
        callback();
    });

    When('Visitor find {stringInDoubleQuotes} mircolist and click on edit icon', function (arg1) {
        MicrolistPage.SearchList(this.driver, arg1);
    });

    Then('Visitor will update list name and description', function (callback) {
        var that = this.driver;
        this.driver.wait(function() {
            that.findElement(By.linkText('Edit Contact List')).click();
        }, 5000);
    })
});