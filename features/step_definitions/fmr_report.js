var seleniumWebdriver = require('selenium-webdriver'), By = seleniumWebdriver.By,
    FmrPage = require('../page_object/fmr_report.page'),
    LoginPage = require('../page_object/login.page'),
    {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
    setDefaultTimeout(50 * 1000);
    Given('I am logged in as admin', function () {
        return LoginPage.adminLogin(this.driver);
    });

    Given(/^I am on admin FMR report page$/, function () {
        return FmrPage.openfmrreport(this.driver);
    });

    When('I search filter and sort fmr list', function () {
        return FmrPage.serchFmrReport(this.driver);
    });

    When('I click on Report link and report open in new tab', function () {
        return FmrPage.openReport(this.driver)
    });

    Then('Primary Category and Impressions text visible', function () {
        return FmrPage.checkReport(this.driver)
    });
    
    Given('I am on Week at a glance Analytics page', function () {
        return FmrPage.openweekatglance(this.driver)
    });

    When('I search fmr and click on it', function () {
        return FmrPage.searchFmr(this.driver)
    });

    Then('FMR detail page get open', function () {
        return FmrPage.fmrDetails(this.driver)
    });
});