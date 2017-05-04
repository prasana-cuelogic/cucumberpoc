var assert = require('assert'),
    wd = require('selenium-webdriver'), By = wd.By;

var AnalyticsPage = {
    url: "http://test1.3blmedia.com/Dashboard/Analytics/Views",
    byTitleUrl: "http://test1.3blmedia.com/Dashboard/Analytics/Views/mediatype/all",

    open: function (drivers) {
        drivers.get(this.url);
        var condition = wd.until.elementLocated(By.linkText('IMPRESSIONS'));
        return drivers.wait(condition, 5000);
    },

    viewGraph: function (drivers) {
        var condition = wd.until.elementLocated(By.id('view_chart_div'));
        return drivers.wait(condition, 2000);
    },

    viewPerformers: function (drivers) {
        var condition = wd.until.elementLocated(By.partialLinkText('Best Performers'));
        return drivers.wait(condition, 2000);
    },

    viewMediaAnalytics: function (drivers) {
        var condition = wd.until.elementLocated(By.css('div.detailsTable:nth-child(3)'));
        return drivers.wait(condition, 2000);
    },

    mediaTypeAnalytics: function (drivers) {
        drivers.findElement(By.css("li.rowBg:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > span:nth-child(1) > a:nth-child(1)")).click();

        var condition = wd.until.elementLocated(By.partialLinkText('Analytics by FMR'));
        return drivers.wait(condition, 2000);
    },

    clickFMR: function (drivers) {
        drivers.findElement(By.css("li.height42:nth-child(4) > h2:nth-child(1) > a:nth-child(1)")).click();

        var condition = wd.until.elementLocated(By.partialLinkText('Analytics for FMR'));
        return drivers.wait(condition, 2000);
    },

    viewFMRAnalytics: function (drivers) {
        var condition = wd.until.elementLocated(By.partialLinkText('Analytics for FMR'));
        drivers.wait(condition, 2000);

        var condition = wd.until.elementLocated(By.partialLinkText('Geographical Stats'));
        return drivers.wait(condition, 2000);
    },

    clickPerformerFMR: function (drivers) {
        drivers.findElement(By.css("li.height42:nth-child(1) > h2:nth-child(1) > a:nth-child(1)")).click();

        var condition = wd.until.elementLocated(By.partialLinkText('Analytics for FMR'));
        return drivers.wait(condition, 2000);
    },

    openByTitle: function (drivers) {
        drivers.get(this.byTitleUrl);
        var condition = wd.until.elementLocated(By.linkText('IMPRESSIONS'));
        return drivers.wait(condition, 4000);
    }
}

module.exports = AnalyticsPage;