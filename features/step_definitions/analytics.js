var seleniumWebdriver = require('selenium-webdriver'), By = seleniumWebdriver.By,
    AnalyticsPage = require('../page_object/analytics.page'),
    {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
    //Testing analytics view page
    Given(/^I am on summary tab of analytics page$/, function() {
        return AnalyticsPage.open(this.driver);
    });

    Then('Graph for past 60 days impressions is visible', function () {
        return AnalyticsPage.viewGraph(this.driver);
    });
    
    Then('section Best Performers is visible', function () {
        return AnalyticsPage.viewPerformers(this.driver);
    });

    Then('Analytics by Media Type chart is viewable', function () {
        return AnalyticsPage.viewMediaAnalytics(this.driver);
    });

    //Testing Analytics By Media Type page
    When('I click on Media Type and analytics by media type page get open', function () {
        return AnalyticsPage.mediaTypeAnalytics(this.driver);
    });

    Then('Analytics by FMR chart is viewable', function () {
        return AnalyticsPage.viewMediaAnalytics(this.driver);
    });

    //Testing analytics for FMR page
    Then('I will click on FMR title', function () {
        return AnalyticsPage.clickFMR(this.driver);
    });

    Then('page gets open with FMR Analytics and Geographical Stats', function () {
        return AnalyticsPage.viewFMRAnalytics(this.driver);
    });

    //Testing Best Performer FMRs analytics
    When('I click on FMR title from Best Performers section', function () {
        return AnalyticsPage.clickPerformerFMR(this.driver);
    });

    //Testing By title page
    Given('I am on by title tab of analytics page', function () {
        return AnalyticsPage.openByTitle(this.driver);
    });
});