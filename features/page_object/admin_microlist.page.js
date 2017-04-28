var assert = require('assert'),
    wd = require('selenium-webdriver'), By = wd.By;

var AdminMicrolistPage = {
    adminurl: "http://test1.3blmedia.com/admin/3bl-micro-list",
    //Code for admin microlist page
    openadmin: function (drivers) {
        drivers.get(this.adminurl);
        var condition = wd.until.elementLocated(By.partialLinkText('Add 3BL Micro List'));
        return drivers.wait(condition, 5000);
    },

    ClickAdd3BLList: function (drivers) {
        drivers.findElement(By.css(".view-header>div>a>b")).click();
        var condition = wd.until.elementLocated(By.partialLinkText("List"));
        return drivers.wait(condition, 5000);
    },

    Add3BLList: function (drivers) {
        var num = Math.floor((Math.random() * 100) + 1);
        drivers.findElement(By.id("title")).sendKeys("Test email list "+num);
        drivers.findElement(By.id("details")).sendKeys("Test email list "+num+" description");
        drivers.findElement(By.id("emailfile")).sendKeys(
            "/Users/Santosh/Downloads/FMRList1493201467.xls");
        drivers.findElement(By.id("submitList")).click();

        var condition = wd.until.elementLocated(By.id('console'));
        return drivers.wait(condition, 5000);
    },

    Search3BLList: function (drivers, listName) {
        drivers.findElement(By.id("edit-title")).sendKeys(listName);
        drivers.findElement(By.id("edit-submit-3bl-micro-list")).click();

        /*var condition = wd.until.elementLocated(By.linkText('Add 3BL Micro List'));
        return drivers.wait(condition, 5000);*/
    },

    Delete3BLList: function (drivers) {
        drivers.findElement(By.css('.views-field.views-field-delete-link>a')).then(function (element) {
            element.click();
        });

        var condition = wd.until.elementLocated(By.id('edit-cancel'));
        drivers.wait(condition, 2000);

        drivers.findElement(By.id("edit-submit")).click();

        var condition = wd.until.elementLocated(By.partialLinkText('Add 3BL Micro List'));
        return drivers.wait(condition, 5000);
    },

    Edit3BLList: function (drivers) {
        drivers.findElement(By.css('.odd > td:nth-child(5) > a:nth-child(1)')).then(function (element) {
            element.click();
        })
        var condition = wd.until.elementLocated(By.id('edit-redirect'));
        drivers.wait(condition, 5000);
    },

    Update3BLList: function (drivers) {
        var num = Math.floor((Math.random() * 100) + 1);
        drivers.findElement(By.id("edit-title")).sendKeys("Update"+num);
        drivers.findElement(By.id("edit-field-email-list-details-und-0-value")).sendKeys("Update "+num);
        drivers.findElement(By.id("edit-submit")).click();

        var condition = wd.until.elementLocated(By.id('console'));
        return drivers.wait(condition, 5000);
    },

    AddSubscriber: function (drivers) {
        drivers.findElement(By.css('.views-field.views-field-nothing>a')).then(function (element) {
            element.click();
        });
        var condition = wd.until.elementLocated(By.id('frmClientEmail'));
        drivers.wait(condition, 2000);

        drivers.findElement(By.css('.styleFloatRt>a')).then(function (element) {
            element.click();
        });

        var condition = wd.until.elementLocated(By.id('submitEmail'));
        drivers.wait(condition, 2000);
    },

    UpdateSubscriber: function (drivers) {
        var num = Math.floor((Math.random() * 100) + 1);
        drivers.findElement(By.id("fname")).sendKeys("John"+num);
        drivers.findElement(By.id("lname")).sendKeys("Mathews"+num);
        drivers.findElement(By.id("email")).sendKeys("johnmathews"+num+"@gmail.com");
        drivers.findElement(By.id("submitEmail")).click();

        return drivers.findElement(By.className('placeholder')).getText().then(function (elem_text) {
            return assert.equal('The entry was successfully added.', elem_text);
        });
    },

    RemoveSubscriber: function (drivers) {
        drivers.findElement(By.css('.views-field.views-field-nothing>a')).then(function (element) {
            element.click();
        });
        var condition = wd.until.elementLocated(By.id('frmClientEmail'));
        drivers.wait(condition, 2000);

        drivers.findElement(By.css('#list > tbody > tr:nth-child(1) > td:nth-child(1) > input')).click();

        drivers.findElement(By.id("delete")).then(function (element) {
            element.click();
        }).then(function () {
            drivers.switchTo().alert().accept();
        });

        return drivers.findElement(By.className('placeholder')).getText().then(function (elem_text) {
            return assert.equal('The entry was successfully removed.', elem_text);
        });
    }
};

module.exports = AdminMicrolistPage;