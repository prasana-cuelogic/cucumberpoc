require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    //Edit Scenario
    Then('I am going to {arg1:stringInDoubleQuotes} page.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.get('http://test1.3blmedia.com/admin/summary-report');
        var xpath = "//*[contains(text(),'Summary Report')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });

    When('I search for {arg1:stringInDoubleQuotes} companies report of quarter {arg2:stringInDoubleQuotes} for year {arg3:stringInDoubleQuotes}', function (arg1, arg2, arg3) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement(seleniumWebdriver.By.id("edit-title")).then(function(element) {
            return element.sendKeys(arg1);
        });

        this.driver.findElement(seleniumWebdriver.By.id("edit-field-quarter-value")).then(function(element) {
            return element.sendKeys(arg2);
        });

        this.driver.findElement(seleniumWebdriver.By.id("edit-field-year-value")).then(function(element) {
            return element.sendKeys(arg3);
        });

        var xpath = "html/body/div[3]/div[2]/div[2]/div/div/div/div[1]/form/div/div/div/div[9]/input";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);

        this.driver.findElement(seleniumWebdriver.By.className("form-submit")).then(function(element) {
            return element.click();
        });
    });

    When('Click on the edit link', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "html/body/div[3]/div[2]/div[2]/div/div/div/div[2]/table/tbody/tr/td[10]/a";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);
        return this.driver.findElement(seleniumWebdriver.By.xpath( "html/body/div[3]/div[2]/div[2]/div/div/div/div[2]/table/tbody/tr/td[10]/a")).click();
    });

    Then('I sholud redirect on the {arg1:stringInDoubleQuotes} page.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'"+arg1+"')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    });

    When('I update {arg1:stringInDoubleQuotes} to Inactive {arg2:stringInDoubleQuotes} and save data.', function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "html/body/div[3]/div[2]/div[2]/div/div/form/div/div[25]/div/select";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);

        this.driver.findElement(seleniumWebdriver.By.id("edit-field-summary-report-status-und")).then(function(element) {
            return element.sendKeys("Inactive");
        });
    });

    Then('Record gets updated and I redirected on the listing page.', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "html/body/div[3]/div[2]/div[2]/div/div/form/div/input[4]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);

        this.driver.findElement(seleniumWebdriver.By.className("form-submit")).then(function(element) {
            return element.click();
        });

        var xpath = "//*[contains(text(),'Summary Report')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);

    });


    //Delete Scenario
    Given('I am on the {arg1:stringInDoubleQuotes} page.', function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    When('Click on the delete link.', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Then('I should redirect on the delete confirmation page with message {arg1:stringInDoubleQuotes}', function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Then('Record gets deleted and I redirected on the listing page.', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });



});