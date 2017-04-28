var assert = require('assert'),
    wd = require('selenium-webdriver'), By = wd.By;

var MicrolistPage = {
    url: "http://test1.3blmedia.com/Dashboard/ClientMicroList",

    open: function (drivers) {
        drivers.get(this.url);
        var condition = wd.until.elementLocated(By.linkText('My Email Lists'));
        return drivers.wait(condition, 5000);
    },
    SearchList: function (drivers, listName) {
        drivers.findElement(By.id("searchVal")).sendKeys(listName);
        drivers.findElement(By.id(" sub")).click();
        var condition = wd.until.elementLocated(By.linkText('My Email Lists'));
        return drivers.wait(condition, 5000);
    },

    EditList: function (drivers) {
        var condition = wd.until.elementLocated(By.partialLinkText('Team'));
        drivers.wait(condition, 5000).then(function () {
            return drivers.findElement(By.partialLinkText("Team")).click();
        });
    },

    UpdateList: function (drivers) {
        drivers.findElement(By.id("title")).sendKeys(" test ");
        drivers.findElement(By.id("details")).sendKeys(" test desc ");
        drivers.findElement(By.id("submitList")).click();

        var condition = wd.until.elementLocated(By.id('SuccessMsg'));
        drivers.wait(condition, 5000);

        return drivers.findElement(By.className('SuccessMsg')).getText().then(function (elem_text) {
            return assert.equal('Your email list has been successfully updated.', elem_text);
        });
    },

    DeleteList: function (drivers) {
        drivers.findElement(By.css('div.rightsidemargin > ul.links > li.node-readmore:nth-child(2)')).then(function (element) {
            element.click();
        }).then(function () {
            drivers.switchTo().alert().accept();
        }).then(function () {
            var link = drivers.findElement(By.css('div.rightsidemargin > ul.links > li.node-readmore:nth-child(2) > a')).getAttribute('href');
            return drivers.get(link);
        });
    },
    afterDelete: function (drivers) {
        var condition = wd.until.elementLocated(By.id('SuccessMsg'));
        drivers.wait(condition, 5000);

        return drivers.findElement(By.className('SuccessMsg')).getText().then(function (elem_text) {
            return assert.equal('Your email list has been removed successfully.', elem_text);
        });
    },
    ClickAdd: function (drivers) {
        drivers.findElement(By.css(".styleEmailList > a:nth-child(1)")).click();
        var condition = wd.until.elementLocated(By.partialLinkText('NEW LIST'));
        drivers.wait(condition, 2000);
        drivers.findElement(By.id("title")).sendKeys("Eve List1");
        drivers.findElement(By.id("details")).sendKeys("Eve List1 desc");
        drivers.findElement(By.id("emailfile")).sendKeys(
            "/Users/Santosh/Downloads/FMRList1493201467.xls");
        drivers.findElement(By.id("submitList")).click();

        var condition = wd.until.elementLocated(By.id('SuccessMsg'));
        return drivers.wait(condition, 5000);

    },

    ClickAddContact: function (drivers) {
        drivers.findElement(By.css(".editContactList>a>b")).click();
        var condition = wd.until.elementLocated(By.partialLinkText('Entries'));
        drivers.wait(condition, 2000);

        drivers.findElement(By.css(".addcontactstyle>a>b")).click();
        var condition = wd.until.elementLocated(By.partialLinkText('Entries'));
        return drivers.wait(condition, 2000);
    },

    AddContact: function (drivers) {
        drivers.findElement(By.id("fname")).sendKeys("John");
        drivers.findElement(By.id("lname")).sendKeys("Mathews");
        var num = Math.floor((Math.random() * 100) + 1);
        drivers.findElement(By.id("email")).sendKeys("johnmathews"+num+"@gmail.com");
        drivers.findElement(By.id("submitEmail")).click();

        var condition = wd.until.elementLocated(By.id('SuccessMsg'));
        return drivers.wait(condition, 5000);
    },

    RemoveContact: function (drivers) {
        drivers.findElement(By.css(".editContactList>a>b")).click();
        var condition = wd.until.elementLocated(By.partialLinkText('Entries'));
        drivers.wait(condition, 2000);

        drivers.findElement(By.css('#frmClientEmail > div.borderOnList > ul > li:nth-child(2) > div > span.width20 > input')).click();

        drivers.findElement(By.id("delete")).then(function (element) {
            element.click();
        }).then(function () {
            drivers.switchTo().alert().accept();
        });

        var condition = wd.until.elementLocated(By.id('SuccessMsg'));
        return drivers.wait(condition, 4000);
    }
};

module.exports = MicrolistPage;

