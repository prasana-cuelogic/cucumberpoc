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

    Then('{stringInDoubleQuotes} tab will be opened', function (arg1) {
        var xpath = "//*[contains(text(),'" + arg1 + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    })

    Then('{stringInDoubleQuotes} and {stringInDoubleQuotes} Sections will be viewable', function (arg1, arg2) {
        var xpath = "//*[contains(text(),'" + arg1 + "')]";
        var xpath1 = "//*[contains(text(),'" + arg2 + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 10000);
        var condition1 = seleniumWebdriver.until.elementLocated({xpath: xpath1});
        return this.driver.wait(condition1, 10000);
    })

    Then('Text {stringInDoubleQuotes} will be viewable', function (arg1) {
        var xpath = "//*[contains(text(),'" + arg1 + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    })

    Then('Click on {stringInDoubleQuotes} from Analytics by Media Type Section', function (arg1) {
        return this.driver.findElement(seleniumWebdriver.By.xpath('//*[@id="analyticsWrapper"]/div/div/ul/li[7]/div[1]/div/div[2]/ul/li[1]/ul/li[1]/span/a')).then(function (element) {
            return element.click();
        });
    })

    When('I will redirect on new page with section {stringInDoubleQuotes}', function (arg1) {
        var xpath = "//*[contains(text(),'" + arg1 + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        return this.driver.wait(condition, 10000);
    })

    Then('Click on FMR title', function () {
        var xpath = '//*[@id="mediaresult"]/ul/li[1]/h2/a';
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 10000);
        return this.driver.findElement(seleniumWebdriver.By.xpath(xpath)).then(function (element) {
            return element.click();
        });
    })

    Then('New page gets open with section {stringInDoubleQuotes} and {stringInDoubleQuotes}', function (arg1, arg2) {
        var xpath = "//*[contains(text(),'" + arg1 + "')]";
        var xpath1 = "//*[contains(text(),'" + arg2 + "')]";
        var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
        this.driver.wait(condition, 10000);
        var condition1 = seleniumWebdriver.until.elementLocated({xpath: xpath1});
        return this.driver.wait(condition1, 10000);
    })

    Then('Click on {stringInDoubleQuotes} tab', function (arg1) {
        return this.driver.findElement(seleniumWebdriver.By.xpath('//*[@id="analyticsWrapper"]/div/ul/li[6]/span/a')).then(function (element) {
            return element.click();
        });
    })

    When('I select media type from dropdown', function () {
        var that = this.driver;
        // Write code here that turns the phrase above into concrete actions
        this.driver.findElement(seleniumWebdriver.By.xpath('//*[@id="media_type"]')).then(function(element) {
                element.click();
            that.findElement(seleniumWebdriver.By.xpath('//*[@id="media_type"]/option[3]')).then(function (elements) {                                elements.click();
                return that.findElement(seleniumWebdriver.By.xpath('//*[@id="rpt"]/ul/li[7]/div/div[2]/img[1]')).then(function (element) {
                    return element.click();
                });
            });
        });
    })

    When('I select campaign from dropdown', function () {
        var that = this.driver;
        this.driver.findElement(seleniumWebdriver.By.xpath('//*[@id="campaign_type"]')).then(function(element) {
            element.click();
            that.findElement(seleniumWebdriver.By.xpath('//*[@id="campaign_type"]/option[4]')).then(function (elements) {                                elements.click();
                return that.findElement(seleniumWebdriver.By.xpath('//*[@id="rpt"]/ul/li[9]/div/div[2]/img[2]')).then(function (element) {
                    return element.click();
                });
            });
        });
    })

    When('I select summary report from dropdown', function () {
        var that = this.driver;
        this.driver.findElement(seleniumWebdriver.By.xpath('//*[@id="report_id"]')).then(function(element) {
            element.click();
            that.findElement(seleniumWebdriver.By.xpath('//*[@id="report_id"]/option[3]')).then(function (elements) {                                elements.click();
                return that.findElement(seleniumWebdriver.By.xpath('//*[@id="rpt"]/ul/li[3]/div/div[2]/img')).then(function (element) {
                    return element.click();
                });
            });
        });
    })
});