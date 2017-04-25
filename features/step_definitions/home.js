var assert = require('assert');
var seleniumWebdriver = require('selenium-webdriver'), By = seleniumWebdriver.By;
var HomePage = require('./home.page');
var {defineSupportCode} = require('cucumber');


defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
    //setDefaultTimeout(40 * 1000);
    Given(/^I am on the home link$/, function() {
        this.driver.get(HomePage.url);
    });

    When('visitor click on the latest news link', function (callback) {
        // Write code here that turns the phrase above into concrte actions
        HomePage.LatestNews(this.driver);
        callback();
    });

    //Download PDF
    Then('visitor will see all latest news on the website', function (callback) {
        this.driver.findElement(By.linkText('Rebooting The Earth')).then(function () {
           callback();
        });
    });
});