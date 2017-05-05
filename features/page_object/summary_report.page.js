var assert = require('assert'),
    wd = require('selenium-webdriver'), By = wd.By;

var SummaryPage = {
    url: "http://test1.3blmedia.com/admin/summary-report",

    open: function (drivers) {
        drivers.get(this.url);
        var condition = wd.until.elementLocated(By.linkText('MEDIA CONSULTANT NAME'));
        return drivers.wait(condition, 5000);
    },

    searchReport: function (drivers) {
        drivers.findElement(By.id("edit-field-year-value")).sendKeys(2016);
        //drivers.findElement(By.id("edit-title")).sendKeys('3BL');

        //select first quarter
        var selectElem = drivers.findElement(By.id("edit-field-quarter-value"));
        selectElem.click();
        selectElem.findElement(By.css("#edit-field-quarter-value > option:nth-child(2)")).click();

        drivers.findElement(By.id("edit-submit-summary-report")).click();
        var condition = wd.until.elementLocated(By.linkText('MEDIA CONSULTANT NAME'));
        return drivers.wait(condition, 3000);
    },

    editReport: function (drivers) {
        drivers.findElement(By.css(".views-field.views-field-edit-link.views-align-center>a")).click();
        var condition = wd.until.elementLocated(By.partialLinkText('URL REDIRECTS'));
        return drivers.wait(condition, 2000);
    },

    updateReport: function (drivers) {
        drivers.findElement(By.id("edit-field-company-subtitle-und-0-value")).sendKeys('test');
        //drivers.findElement(By.id("cke_edit-field-fmr-volume-intro-und-0-value")).sendKeys('for cucumber bdd');
        drivers.findElement(By.id("edit-submit")).click();
    },

    successMessage: function (drivers) {
        var condition = wd.until.elementLocated(By.id('console'));
        return drivers.wait(condition, 3000);
    },

    clickPreview: function (drivers) {
        drivers.findElement(By.css(".views-field.views-field-id-1>a")).click();
    },

    clickView: function (drivers) {
        drivers.findElement(By.css(".views-field.views-field-php>a")).click();
    },

    checkPreview: function (drivers) {
        drivers.getAllWindowHandles().then(function (handles) {
            drivers.switchTo().window(handles[1]).then(function () {
                return drivers.findElement(By.className('section-title')).getText().then(function (elem_text) {
                    return assert.equal('Introduction', elem_text);
                });
            });
        });
    },

    deleteReport: function (drivers) {
        drivers.findElement(By.css(".views-field.views-field-delete-link>a")).click();
        var condition = wd.until.elementLocated(By.id('edit-cancel'));
        drivers.wait(condition, 2000);

        drivers.findElement(By.id("edit-submit")).click();

        var condition = wd.until.elementLocated(By.linkText('MEDIA CONSULTANT NAME'));
        return drivers.wait(condition, 3000);
    },

    listPage: function (drivers) {
        var condition = wd.until.elementLocated(By.linkText('MEDIA CONSULTANT NAME'));
        return drivers.wait(condition, 3000);
    }
};

module.exports = SummaryPage;