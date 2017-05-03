var seleniumWebdriver = require('selenium-webdriver'), By = seleniumWebdriver.By,
    TrackingPage = require('../page_object/tracking.page'),
    LoginPage = require('../page_object/login.page'),
    {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
    setDefaultTimeout(40 * 1000);

    Given('I am on the trackin page', function () {
        return TrackingPage.open(this.driver);
    });

    /* Select Tracking FMR */
    When('Select FMR from drop-down', function () {
        return TrackingPage.selectFMR(this.driver);
    });

    Then('Tracking results will be listed down for the selected FMR', function (arg1) {
        return TrackingPage.trackingList(this.driver);
    });

    /* Download Tracking PDF */
    When('I click on the PDF icon', function() {
        return TrackingPage.selectPdf(this.driver);
    });

    Then('Report will be download', function () {
        return TrackingPage.downlodReport(this.driver);
    });

    When('I click on the Excel icon', function() {
        return TrackingPage.selectExcel(this.driver);
    });
});