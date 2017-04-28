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

    When('Visitor search with title containing {stringInDoubleQuotes}', function (arg1) {
        return FmrPage.serchFmrReport(this.driver, arg1);
    });

    When('filter with type as {stringInDoubleQuotes}', function (arg1) {
        return FmrPage.filterFmrReport(this.driver, arg1);
    })

    Then('Visitor Sort records with Published column', function () {
        return FmrPage.sortFmrReport(this.driver);
    })
});