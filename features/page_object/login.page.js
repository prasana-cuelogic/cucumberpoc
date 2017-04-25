var wd = require('selenium-webdriver'), By = wd.By;

var LoginPage = {
    client_login: 'http://test1.3blmedia.com/autoClientLogin',
    admin_login: 'http://test1.3blmedia.com/autoLogin',

    clientLogin: function (driver) {
        return driver.get(this.client_login);
    },

    adminLogin: function (driver) {
        return driver.get(this.admin_login);
    }
};
module.exports = LoginPage;
