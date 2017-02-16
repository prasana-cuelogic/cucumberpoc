require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    Then('I will be redirect on client selection page.', function () {
        // Write code here that turns the phrase above into concrete actions
        return this.driver.get('http://test1.3blmedia.com/client-multiple-login?destination=Dashboard/Analytics/Views');

    });

    When('I select {arg1:stringInDoubleQuotes} client and go on the Analytic page.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        /*var xpath = '//*[@id="content"]/div/div/div[2]/div[3]/div/span/div/a/div[2]';
         var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
         this.driver.wait(condition, 10000);

         return this.driver.findElement(seleniumWebdriver.By.linkText(arg1)).then(function(element) {
         return element.click();
         });*/
    });

    Then('I will be on the {arg1:stringInDoubleQuotes} tab.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'" + arg1 + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    });

    Then('I click on the {arg1:stringInDoubleQuotes} Link.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'" + arg1 + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 10000);
        return this.driver.findElement(seleniumWebdriver.By.linkText(arg1)).then(function (element) {
            return element.click();
        });
    });

    Then('I will be Report page and page title will be {arg1:stringInDoubleQuotes}', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'" + arg1 + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    });

    When('I click on the Email Icon of {arg1:stringInDoubleQuotes}.', function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Then('email window will be open.', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    When('I add email {arg1:stringInDoubleQuotes} and message {arg2:stringInDoubleQuotes}.', function (arg1, arg2, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    When('click on the submit button', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Then('email send to given email.', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
});