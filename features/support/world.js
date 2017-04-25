require('phantomjs');
var {defineSupportCode} = require('cucumber');
var seleniumWebdriver = require('selenium-webdriver');
var chrome = require('chromedriver');

function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build();
    
    // Returns a promise that resolves to the element
    this.waitForElement = function(locator) {
        var condition = seleniumWebdriver.until.elementLocated(locator);
        return this.driver.wait(condition)
    }
}

defineSupportCode(function({setWorldConstructor}) {
    setWorldConstructor(CustomWorld)
});
/*  https://github.com/maxmalov/node-selenium-pageobject   */