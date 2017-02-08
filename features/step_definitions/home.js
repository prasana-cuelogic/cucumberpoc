require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var assert = require('assert');

defineSupportCode(function({Given, When, Then}) {

    Given('I am on the login page with {arg1:stringInDoubleQuotes} title', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.get('http://localhost:3000/users')
        var xpath = "//*[contains(text(),'User Login')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });

    When('I add correct {arg1:stringInDoubleQuotes} and {arg2:stringInDoubleQuotes}', function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement(seleniumWebdriver.By.name(arg1)).then(function(element) {
            return element.sendKeys('prasana');
        });
        this.driver.findElement(seleniumWebdriver.By.id(arg2)).then(function(element) {
            return element.sendKeys('123456');
        });
    });

    When('click on the {args1:stringInDoubleQuotes} button', function (args1) {
        // Write code here that turns the phrase above into concrete actions
        return this.driver.findElement(seleniumWebdriver.By.name(args1)).then(function(element) {
            return element.click();
        });
    });

    Then('I should redirect on the user listing page', function () {
        // Write code here that turns the phrase above into concrete actions
        //this.driver.get('http://localhost:3000/users/user');
        var xpath = "//*[contains(text(),'User List')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });
});