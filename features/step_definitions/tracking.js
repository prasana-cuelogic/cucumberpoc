require('phantomjs');
var assert = require('assert');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var currentUrl;
var new_window_url;

defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
    setDefaultTimeout(40 * 1000);
    //Edit Scenario

    Then('I go to {stringInDoubleQuotes} lin' +
        'k and page title is {stringInDoubleQuotes}', function (arg1, arg2, callback) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.get(arg1);
        var xpath = "//*[contains(text(),'"+arg2+"')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);
        callback();
    });

    When('I select FMR from dropdown', function (callback) {
        var that = this.driver;
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement(seleniumWebdriver.By.xpath("html/body/div[5]/div/div[3]/div/div[1]/div/div/div/div/div/div/div[1]/form/ul/li[3]/div/div/a/span")).then(function(element) {
            element.click();
            that.findElement(seleniumWebdriver.By.xpath('html/body/div[5]/div/div[3]/div/div[1]/div/div/div/div/div/div/div[1]/form/ul/li[3]/div/div/div/ul/li[4]')).then(function (elements) {                return elements.click();
            });
        });
        callback();
    });

    Then('Tracking results will be listed down for the selected FMR', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "html/body/div[5]/div/div[3]/div/div[1]/div/div/div/div/div/div/div[1]/form/ul/li[3]/div/div/a/span[contains(text(), 'Las Vegas Chooses Renewable Energy - The Minute')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);
        callback();
    });

    //Download PDF
    When('I click on the PDF icon', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = 'html/body/div[5]/div/div[3]/div/div[1]/div/div/div/div/div/div/div[1]/form/ul/li[4]/a[2]/img';
        this.driver.findElement(seleniumWebdriver.By.xpath(xpath)).click();
        callback();
    });


});