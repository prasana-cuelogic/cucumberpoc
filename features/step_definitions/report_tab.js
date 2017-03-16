require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
    setDefaultTimeout(40 * 1000);

    When('I login as a client with username and password', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'3BL Media is:')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);
        return this.driver.get('http://test1.3blmedia.com/autoClientLogin');
    });

    Then('I will be redirect on Analytic page on the {stringInDoubleQuotes} tab.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'" + arg1 + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    });

    When('I click on the {stringInDoubleQuotes} Link.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "html/body/div[5]/div/div[3]/div/div[1]/div/div/div/div/div/div/ul/li[6]/span/a";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 10000);
        return this.driver.findElement(seleniumWebdriver.By.linkText(arg1)).then(function (element) {
            return element.click();
        });
    });

    Then('I will redirect on Report page and page title will be {stringInDoubleQuotes}', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'" + arg1 + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    });

    When('I click on the Email Icon of {stringInDoubleQuotes}.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'" + arg1 + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 10000);
        return this.driver.findElement(seleniumWebdriver.By.xpath("html/body/div[5]/div/div[3]/div/div[1]/div/div/div/div/div/div/div/ul/li[4]/ul/li[1]/div/div[2]/img[2]")).then(function (element) {
            return element.click();
        });
    });

    Then('email window will be open.', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'Analytics Summary Report')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });

    When('I add email {stringInDoubleQuotes} and message {stringInDoubleQuotes}.', function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement(seleniumWebdriver.By.id("email")).then(function (element) {
            return element.sendKeys(arg1);
        });

        this.driver.findElement(seleniumWebdriver.By.id("msg")).then(function (element) {
            return element.sendKeys(arg2);
        });
    });

    When('click on the submit button', function () {
        // Write code here that turns the phrase above into concrete actions
        return this.driver.findElement(seleniumWebdriver.By.xpath("html/body/div[5]/div/div[3]/div/div[1]/div/div/div/div/div/div/div/ul/li[8]/ul/li[7]/div/div[1]/form/ul/li[4]/input[1]")).then(function (element) {
            return element.click();
        });
    });

    Then('email send to given email.', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'Summary Reports')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    });
});