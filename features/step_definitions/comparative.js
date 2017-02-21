require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then, setDefaultTimeout}) {
    setDefaultTimeout(40 * 1000);

    /*Given('I am on the home page', function () {
        // Write code here that turns the phrase above into concrete actions
        return this.driver.get('http://test1.3blmedia.com');
    });*/

    When('I login with username and password', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'3BL Media is:')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);
        return this.driver.get('http://test1.3blmedia.com/autoLogin');
    });

    Then('I should redirect on the {arg1:stringInDoubleQuotes} page', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.get('http://test1.3blmedia.com/admin/comparative-report');
        var xpath = "//*[contains(text(),'"+arg1+"')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });

    Given('I am on the {arg1:stringInDoubleQuotes} page.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.get('http://test1.3blmedia.com/admin/comparative-report');
        var xpath = "//*[contains(text(),'"+arg1+"')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });

    When('I search {arg1:stringInDoubleQuotes} exisitng record.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        return this.driver.findElement(seleniumWebdriver.By.className("form-text")).then(function(element) {
            return element.sendKeys(arg1);
        });
    });

    When('click on the {arg1:stringInDoubleQuotes} button.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        return this.driver.findElement(seleniumWebdriver.By.className("form-submit")).then(function(element) {
            return element.click();
        });
    });

    Then('I will get {arg1:stringInDoubleQuotes} matching records.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'"+arg1+"')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });

    When('I pick first record and click on the {arg1:stringInDoubleQuotes} link.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'"+arg1+"')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);
        return this.driver.findElement(seleniumWebdriver.By.linkText(arg1)).then(function(element) {
            return element.click();
        });
    });

    Then('selected entity get cloned and I should redirect on the entity edit page.', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'Edit Comparative Client Group')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);

    });

    Then('title of page will be {arg1:stringInDoubleQuotes}.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'"+arg1+"')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });

    When('I click on the {arg1:stringInDoubleQuotes} button', function (arg1) {
        var xpath = "html/body/div[3]/div[2]/div[2]/div/div/form/div/input[4]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);
        return this.driver.findElement(seleniumWebdriver.By.className("form-submit")).then(function(element) {
            return element.click();
        });
    });

    Then('I will redirect on the listing page.', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'Comparative Summary Report')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });
});
