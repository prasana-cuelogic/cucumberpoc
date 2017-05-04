var seleniumWebdriver = require('selenium-webdriver'), By = seleniumWebdriver.By,
    MicrolistPage = require('../page_object/microlist.page'),
    LoginPage = require('../page_object/login.page'),
    {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
    setDefaultTimeout(50 * 1000);
    Given('I am logged in as client', function () {
        return LoginPage.clientLogin(this.driver);
    });

    Given(/^I am on client microlist page$/, function() {
        return MicrolistPage.open(this.driver);
    });

    When('find {stringInDoubleQuotes} mircolist', function (arg1) {
        return MicrolistPage.SearchList(this.driver, arg1);
    });

    When('click on edit icon', function () {
        return MicrolistPage.EditList(this.driver);
    });

    Then('will update list name and description', function () {
        return MicrolistPage.UpdateList(this.driver);
    });

    When('find {stringInDoubleQuotes} microlist to delete', function (arg1) {
        return MicrolistPage.SearchList(this.driver, arg1);
    });

    When('click on the detele button and accept', function () {
        return MicrolistPage.DeleteList(this.driver);
    });

    Then('microlist get deleted & success message get displayed', function () {
        return MicrolistPage.afterDelete(this.driver);
    });

    When('click on Add Email List', function () {
        MicrolistPage.ClickAdd(this.driver);
    });

    Then('click on Edit Contact List and then Add Contact', function () {
        MicrolistPage.ClickAddContact(this.driver);
    });
    
    Then('add new contact in list', function () {
        MicrolistPage.AddContact(this.driver);
    });

    Then('click on Edit Contact List and remove contact from list', function () {
        MicrolistPage.RemoveContact(this.driver);
    })
});