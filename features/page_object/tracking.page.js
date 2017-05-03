var assert = require('assert'),
    wd = require('selenium-webdriver'), By = wd.By;

var TrackingPage = {
    url: "http://test1.3blmedia.com/Dashboard/Analytics/Tracking",

    open: function (drivers) {
        drivers.get(this.url);
        var condition = wd.until.elementLocated(By.linkText('TRACKING SUMMARY'));
        return drivers.wait(condition, 5000);
    },

    selectFMR: function (drivers) {
        var selectElem = drivers.findElement(By.id("fmr"));
        selectElem.click();
        return selectElem.findElement(By.css("#fmr > option:nth-child(2)")).click();
    },

    trackingList: function (drivers) {
        var condition = wd.until.elementLocated(By.css('div.view-content > div:first-child > div:first-child > div > a > img'));
        return drivers.wait(condition, 5000);
    },

    selectPdf: function (drivers) {
        return drivers.findElement(By.css('.downloadtracking > a:nth-child(3)')).click();
    },

    selectExcel: function (drivers) {
        return drivers.findElement(By.css('.downloadtracking > a:nth-child(2)')).click();
    },

    downlodReport: function (drivers) {
        var condition = wd.until.elementLocated(By.linkText('TRACKING SUMMARY'));
        return drivers.wait(condition, 5000);
    }
};
module.exports = TrackingPage;

