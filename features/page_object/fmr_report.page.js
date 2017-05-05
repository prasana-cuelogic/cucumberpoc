var assert = require('assert'),
    wd = require('selenium-webdriver'), By = wd.By;

var FmrPage = {
    fmrreporturl: "http://test1.3blmedia.com/admin/content",
    weekataglanceurl: "http://test1.3blmedia.com/admin/reports/analytics/week-at-a-glance",

    openfmrreport: function (drivers) {
        drivers.get(this.fmrreporturl);
        var condition = wd.until.elementLocated(By.partialLinkText('Add content'));
        return drivers.wait(condition, 5000);
    },

    serchFmrReport: function (drivers) {
        drivers.findElement(By.id("edit-title")).sendKeys('content');

        drivers.findElement(By.css('#edit_type_chosen > a > span')).then(function(element) {
            element.click();
            drivers.findElement(By.css('#edit_type_chosen > div > ul > li:nth-child(14)')).then(function (elements) {                                elements.click();
            });
        });

        drivers.findElement(By.id("edit-submit-admin-content-node")).click();

        var condition = wd.until.elementLocated(By.partialLinkText('Add content'));
        drivers.wait(condition, 2000);

        drivers.findElement(By.css('.views-table > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(3) > a:nth-child(1)')).then(function(element) {
            element.click();
        });

        var condition = wd.until.elementLocated(By.partialLinkText('Add content'));
        return drivers.wait(condition, 3000);
    },

    openReport: function (drivers) {
        drivers.findElement(By.css('tr.odd:nth-child(1) > td:nth-child(12) > a:nth-child(1)')).then(function(element) {
            element.click();
        });
        drivers.getAllWindowHandles().then(function (handles) {
            drivers.switchTo().window(handles[1]).then(function () {
                drivers.getTitle().then( function(the_title){
                    assert.equal("Fmr report | 3BL Media", the_title);
                });
            });
        });
    },

    checkReport: function (drivers) {
        return drivers.findElement(By.css('#block-system-main > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(2) > b:nth-child(1) > span:nth-child(1)')).getText().then(function (elem_text) {
            return assert.equal('Impressions', elem_text);
        });
    },

    openweekatglance: function (drivers) {
        drivers.get(this.weekataglanceurl);
        var condition = wd.until.elementLocated(By.linkText('Download Report'));
        return drivers.wait(condition, 5000);
    },

    searchFmr: function (drivers) {
        drivers.findElement(By.linkText('Kids in the Kitchen')).then(function(element) {
            element.click();
        });

        drivers.getAllWindowHandles().then(function (handles) {
            drivers.switchTo().window(handles[1]).then(function () {
                drivers.getTitle().then( function(the_title){
                    assert.equal("Kids in the Kitchen | 3BL Media", the_title);
                });
            });
        });
    },

    fmrDetails: function (drivers) {
        return drivers.findElement(By.id('fmr-title')).getText().then(function (elem_text) {
            return assert.equal('Kids in the Kitchen', elem_text);
        });
    },

    searchCompany: function (drivers) {
        drivers.findElement(By.linkText('Sodexo, Inc.')).then(function(element) {
            element.click();
        });

        drivers.getAllWindowHandles().then(function (handles) {
            drivers.switchTo().window(handles[1]).then(function () {
                drivers.getTitle().then( function(the_title){
                    assert.equal("Sodexo, Inc. | 3BL Media", the_title);
                });
            });
        });
    },

    companyDetails: function (drivers) {
        var condition = wd.until.elementLocated(By.css('#profile-header-line2>h1'));
        return drivers.wait(condition, 2000);
    }
};

module.exports = FmrPage;