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

    /* Add new micro list */
    When('click on Add Email List', function () {
        MicrolistPage.ClickAdd(this.driver);
    });

    Then('submit form after adding respective details', function () {
        return MicrolistPage.AddMicroList(this.driver);
    });

    Then('list get added & success message get displayed on micro list page', function () {
        return MicrolistPage.ListAdded(this.driver);
    });

    /* Delete Micro list*/
    When('find {stringInDoubleQuotes} microlist to delete', function (arg1) {
        return MicrolistPage.SearcEditEmailListhList(this.driver, arg1);
    });

    When('click on the detele button', function () {
        return MicrolistPage.DeleteList(this.driver);
    });

    Then('microlist get deleted & success message get displayed', function () {
        return MicrolistPage.AfterDelete(this.driver);
    });

    /* Edit email list */
    When('find {stringInDoubleQuotes} mircolist & open for edit', function (arg1) {
        return MicrolistPage.SearchList(this.driver, arg1);
    });

    When('after updating all details, I submit form', function () {
        return MicrolistPage.EditList(this.driver);
    });

    Then('list get updated & success message get displayed on micro list page', function () {
        return MicrolistPage.UpdatedList(this.driver);
    });

    /* Add new email */
    Then('go to the add contact form', function () {
        MicrolistPage.ClickAddContact(this.driver);
    });
    
    Then('submit the form after adding contact details', function () {
        MicrolistPage.AddContact(this.driver);
    });

    /* Remove email from list */
    Then('go to the contact list', function () {
        MicrolistPage.EditEmailList(this.driver);
    });

    Then('remove unwanted contact', function () {
        MicrolistPage.RemoveContact(this.driver);
    });
});