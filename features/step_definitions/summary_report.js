require('chromedriver');
var assert = require('assert');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var currentUrl;
var new_window_url;

defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
    setDefaultTimeout(40 * 1000);
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

    When('I update {arg1:stringInDoubleQuotes} to {arg2:stringInDoubleQuotes} and save data.', function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "html/body/div[3]/div[2]/div[2]/div/div/form/div/div[25]/div/select";
        var condition = seleniumWebdriver.until.elementLocated(seleniumWebdriver.By.id("edit-field-summary-report-status-und"));
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

    //Preview Scenario
    When('Click on the preview link', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "html/body/div[3]/div[2]/div[2]/div/div/div/div[2]/table/tbody/tr/td[8]/a";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);
        return this.driver.findElement(seleniumWebdriver.By.xpath( "html/body/div[3]/div[2]/div[2]/div/div/div/div[2]/table/tbody/tr/td[8]/a")).click();
    });

    Then('report should be open in the new tab', function () {
        var that = this.driver;
        this.driver.getAllWindowHandles().then(function (handles) {
            that.switchTo().window(handles[1]).then(function () {
                that.getTitle().then( function(the_title){
                    assert.equal("Quarterly Summary Report Q2-2016", the_title);
                });
            });
        });
    });

    Then('report title should be {arg1:stringInDoubleQuotes}', function (arg1) {
        var that = this.driver;
        this.driver.getAllWindowHandles().then(function (handles) {
            that.switchTo().window(handles[1]).then(function () {
                var xpath = "//*[contains(text(),'Summary Report')]";
                var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
                return that.wait(condition, 5000);
            });
        });
    });


    // View client link
    When('click on the view link', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "html/body/div[3]/div[2]/div[2]/div/div/div/div[2]/table/tbody/tr/td[9]/a";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);
        return this.driver.findElement(seleniumWebdriver.By.xpath( "html/body/div[3]/div[2]/div[2]/div/div/div/div[2]/table/tbody/tr/td[9]/a")).click();
    });

    Then('report should be open in the new tab', function () {
        var that = this.driver;
        this.driver.getAllWindowHandles().then(function (handles) {
            that.switchTo().window(handles[1]).then(function () {
                that.getTitle().then( function(the_title){
                    assert.equal("Quarterly Summary Report Q2-2016", the_title);
                });
            });
        });
    });

    //Delete Scenario
    When('Click on the delete link.', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "html/body/div[3]/div[2]/div[2]/div/div/div/div[2]/table/tbody/tr/td[11]/a";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);
        return this.driver.findElement(seleniumWebdriver.By.xpath("html/body/div[3]/div[2]/div[2]/div/div/div/div[2]/table/tbody/tr/td[11]/a")).click();
    });

    Then('I should redirect on the delete confirmation page with message {arg1:stringInDoubleQuotes}', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'" + arg1 + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    });

    When('I click on the {arg1:stringInDoubleQuotes} button.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'This action cannot be undone.')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);
        this.driver.findElement(seleniumWebdriver.By.className("form-submit")).then(function (element) {
            return element.click();
        });
    });

    Then('Record gets deleted and I redirected on the {arg1:stringInDoubleQuotes} listing page.', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'"+arg1+"')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    });
});