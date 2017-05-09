var seleniumWebdriver = require('selenium-webdriver'), By = seleniumWebdriver.By,
    ReportPage = require('../page_object/report.page'),
    LoginPage = require('../page_object/login.page'),
    {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
    setDefaultTimeout(50 * 1000);

    Given('I am on the report tab', function () {
        return ReportPage.open(this.driver);
    });

    /* Email PDF report */
    When('I select email option for the analytic report', function () {
        return ReportPage.selectReport(this.driver);
    });

    When('Submit form after adding email and message', function () {
        return ReportPage.addEMailAndMessage(this.driver);
    });

    Then('email send to given email id', function () {
        return ReportPage.emailSend(this.driver);
    });

    /* Download PDF */
    When('Select any option from Analytics Summary by Media Type report', function() {
        return ReportPage.selectPdfReport(this.driver);
    });

    Then('Click on the PDF icon and report should be download', function () {
        return ReportPage.downlodPdf(this.driver);
    });

    /* Downlaod Excel */
    When('Click on the FMR Reports excel', function () {
        return ReportPage.downlodExcel(this.driver);
    });
    Then('Report get downloaded', function () {
        return true;
    });

    /* Summary report */
    When('Select summary report', function () {
        return ReportPage.selectSummaryReport(this.driver);
    });
    Then('Click on the HTML icon and report get opened in new tab', function () {
        return ReportPage.openSummaryReport(this.driver);
    });
});