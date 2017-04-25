var wd = require('selenium-webdriver'), By = wd.By;
var driver = require('selenium-webdriver/lib/webdriver');

var MicrolistPage = {
    url: "http://test1.3blmedia.com/Dashboard/ClientMicroList",

    SearchList: function (drivers, listName) {
        drivers.findElement(By.id("searchVal")).then(function (element) {
            element.sendKeys(listName);
        });

        drivers.findElement(By.id(" sub")).then(function (element) {
                element.click();
        });

        drivers.wait(function() {
            drivers.findElement(By.linkText('Add Email List'));
        }, 5000);

        //drivers.findElement(By.linkText('Team')).click();

    }
};

module.exports = MicrolistPage;

