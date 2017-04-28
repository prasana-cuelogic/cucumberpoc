var assert = require('assert'),
    wd = require('selenium-webdriver'), By = wd.By;

var FmrPage = {
    fmrreporturl: "http://test1.3blmedia.com/admin/content",
    //Code for admin microlist page
    openfmrreport: function (drivers) {
        drivers.get(this.fmrreporturl);
        var condition = wd.until.elementLocated(By.partialLinkText('Add content'));
        return drivers.wait(condition, 5000);
    },

    serchFmrReport: function (drivers, selText) {
        drivers.findElement(By.id("edit-title")).sendKeys(selText);
        drivers.findElement(By.id("edit-submit-admin-content-node")).click();

        var condition = wd.until.elementLocated(By.partialLinkText('Add content'));
        return drivers.wait(condition, 2000);
    },

    filterFmrReport: function (drivers, filter1, filter2) {

        drivers.findElement(By.css('#edit_type_chosen > a > span')).then(function(element) {
            element.click();
            drivers.findElement(By.css('#edit_type_chosen > div > ul > li:nth-child(4)')).then(function (elements) {                                elements.click();
            });
        });

        drivers.findElement(By.id("edit-submit-admin-content-node")).click();



        var condition = wd.until.elementLocated(By.partialLinkText('Add content'));
        return drivers.wait(condition, 2000);
    },

    sortFmrReport: function (drivers) {
        drivers.findElement(By.css('#views-form-admin-content-node-system-1 > div > table.views-table.sticky-enabled.cols-16.tableheader-processed.sticky-table > thead > tr > th.views-field.views-field-status > a')).then(function(element) {
            element.click();
        });
        var condition = wd.until.elementLocated(By.partialLinkText('Add content'));
        return drivers.wait(condition, 5000);
    }
};

module.exports = FmrPage;