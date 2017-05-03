var assert = require('assert'),
    wd = require('selenium-webdriver'), By = wd.By;

var RportPage = {
    url: "http://test1.3blmedia.com/Dashboard/Analytics/Reports",

    open: function (drivers) {
        drivers.get(this.url);
        var condition = wd.until.elementLocated(By.linkText('CONTENT REPORTS'));
        return drivers.wait(condition, 5000);
    },

    selectReport: function (drivers) {
        return drivers.findElement(By.css('ul.analyticsTrigger > li:nth-child(4) > ul.report-ul > li:nth-child(1) > div > div.fr > img:nth-child(2)')).click();
    },

    addEMailAndMessage: function (drivers) {
        drivers.findElement(By.id('email')).sendKeys('prasana.alawekar@cuelogic.co.in');
        drivers.findElement(By.id('msg')).sendKeys('This is BDD testing');
        drivers.findElement(By.name('submit')).click();
    },

    emailSend: function (drivers) {
        var condition = wd.until.elementLocated(By.linkText('CONTENT REPORTS'));
        return drivers.wait(condition, 5000);
    },

    selectPdfReport: function (drivers) {
        var selectElem = drivers.findElement(By.id("media_type"));
        selectElem.click();
        return selectElem.findElement(By.css("option[value='press_release']")).click();
    },
    downlodPdf: function (drivers) {
        drivers.findElement(By.css('ul.analyticsTrigger > li:nth-child(4) > ul.report-ul > li:nth-child(7) > div > div.fr > img:nth-child(1)')).click();
        var condition = wd.until.elementLocated(By.linkText('CONTENT REPORTS'));
        return drivers.wait(condition, 5000);
    },
    downlodExcel: function (drivers) {
        drivers.findElement(By.css('ul.analyticsTrigger > li:nth-child(8) > ul.report-ul > li:nth-child(1) > div > div.fr > img:nth-child(1)')).click();
        var condition = wd.until.elementLocated(By.linkText('CONTENT REPORTS'));
        return drivers.wait(condition, 5000);
    },
    selectSummaryReport: function (drivers) {
        var selectElem = drivers.findElement(By.id("report_id"));
        selectElem.click();
        selectElem.findElement(By.css("#report_id > option:nth-child(2)")).click();
        return drivers.findElement(By.css('ul.analyticsTrigger > li:nth-child(4) > ul.report-ul > li:nth-child(3) > div > div.fr > img:nth-child(1)')).click();
    },
    openSummaryReport: function (drivers) {
        drivers.getAllWindowHandles().then(function (handles) {
            drivers.switchTo().window(handles[1]).then(function () {
                drivers.findElement(By.css('.clsDefaultColor')).getText().then(function (the_title) {
                    return assert.equal('3BL Media Contact Information:', the_title);
                });

            });
        });
    }
};
module.exports = RportPage;

