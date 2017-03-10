require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then, setDefaultTimeout}) {
    setDefaultTimeout(40 * 1000);

    Given('I am on the home page', function () {
        // Write code here that turns the phrase above into concrete actions
        return this.driver.get('http://test1.3blmedia.com');
    });

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

// Edit report ******************************

    When('I search for {arg1:stringInDoubleQuotes} group', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement(seleniumWebdriver.By.id("edit-title")).then(function (element) {
            return element.sendKeys(arg1);
        });

        return this.driver.findElement(seleniumWebdriver.By.className("form-submit")).then(function(element) {
            return element.click();
        });
    });


//Create new report ****************************
    Then('click on the {arg1:stringInDoubleQuotes} link', function (arg1) {
        return this.driver.findElement(seleniumWebdriver.By.linkText(arg1)).then(function(element) {
            return element.click();
        });
    });

    Then('I will go to {arg1:stringInDoubleQuotes} page', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'"+arg1+"')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });

    When('I add {arg1:stringInDoubleQuotes} title  and {arg2:stringInDoubleQuotes} subtitle of the report', function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement(seleniumWebdriver.By.id("edit-title")).then(function(element) {
            return element.sendKeys(arg1);
        });
        this.driver.findElement(seleniumWebdriver.By.id("edit-field-company-subtitle-und-0-value")).then(function(element) {
            return element.sendKeys(arg2);
        });
    });

    Then('I click on the {arg1:stringInDoubleQuotes} tab', function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'"+arg1+"')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);
        return this.driver.findElement(seleniumWebdriver.By.xpath("html/body/div[3]/div[2]/div[2]/div/div/form/div/div[2]/div/ul/li[2]/a")).click();
    });

    Then('select companies for creating group', function () {
        var that = this.driver;
        var selenium = seleniumWebdriver;
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'Company Group')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);

        this.driver.findElement(seleniumWebdriver.By.id("edit_group_audience_und_chosen")).findElement(seleniumWebdriver.By.css("#edit_group_audience_und_chosen > input[type='text']")).then(function(element) {
            element.sendKeys("54");
        });

    });

    Then('select subscribers', function () {
        var selenium = seleniumWebdriver;
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'Subscribers')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);

        xpath = "html/body/div[3]/div[2]/div[2]/div/div/form/div/div[2]/div/div/fieldset[2]/div/div[2]/div/div[1]/ul";
        this.driver.findElement(seleniumWebdriver.By.xpath(xpath)).then(function(element) {
            element.sendKeys("CSRinfo");
            return selenium.By.xpath("html/body/div[3]/div[2]/div[2]/div/div/form/div/div[2]/div/div/fieldset[2]/div/div[1]/div/div[1]/div/ul/li[2]/em").click();
        });
    });

    When('I click on the Save button', function () {
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement(seleniumWebdriver.By.className("form-submit")).then(function (element) {
            return element.click();
        });
    });

    /*Then('Then I will redirect on the listing page with success message', function () {
        // Write code here that turns the phrase above into concrete actions
        var xpath = "//*[contains(text(),'Subscribers')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 5000);
    });*/


    /*************************************************************************************/

    //Client report
    Then('I should redirect on the {arg1:stringInDoubleQuotes} link and {arg2:stringInDoubleQuotes} page', function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
        this.driver.get(arg1);
        var xpath = "//*[contains(text(),'"+arg2+"')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 5000);
    });
});
