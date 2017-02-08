require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    Given('I have already account on website', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        //return this.driver.get('https://localhost:3000/');
        /*this.driver.manage().timeouts().implicitlyWait(30, TimeUnit.seconds);
        this.driver.manage().window().maximize();
        return this.driver.get('https://localhost:3000/');*/
        callback(null, 'I am already user of website');
    });

    When('I am on the home page', function () {
        // Write code here that turns the phrase above into concrete actions
        return this.driver.get('http://localhost:3000/');

    });

    When('click on the {stringInDoubleQuotes} link', function (text) {
        // Write code here that turns the phrase above into concrete actions
        return this.driver.findElement(seleniumWebdriver.By.name(text)).then(function(element) {
            return element.click();
        });
    });

    Then('I should redirect on the login page', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'User Login')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);

    });

    /*Given('I am on the login page', function () {
        // Write code here that turns the phrase above into concrete actions
        return this.driver.get('http://localhost:3000/users');
    });

    When('I add correct {arg1:stringInDoubleQuotes} and {arg2:stringInDoubleQuotes}', function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement(seleniumWebdriver.By.name(arg1)).then(function(element) {
            return element.sendKeys('prasanna');
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
        return this.driver.get('http://localhost:3000/users/user');
        //return this.driver.wait(condition, 30000);
    });*/
});