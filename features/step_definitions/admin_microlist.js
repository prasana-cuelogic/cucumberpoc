var seleniumWebdriver = require('selenium-webdriver'), By = seleniumWebdriver.By,
    AdminMicrolistPage = require('../page_object/admin_microlist.page'),
    {defineSupportCode} = require('cucumber');


defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
    setDefaultTimeout(50 * 1000);

    Given(/^I am on admin microlist page$/, function() {
        return AdminMicrolistPage.openadmin(this.driver);
    });

    //Add new admin email list
    When('click on Add 3BL Micro List', function () {
        AdminMicrolistPage.ClickAdd3BLList(this.driver);
    });

    Then('will fill the form and save list', function () {
        AdminMicrolistPage.Add3BLList(this.driver);
    });
    
    Then('List get added & success message get displayed on micro list page', function () {
        AdminMicrolistPage.ListAdded(this.driver);
    });

    //Delete email list
    When('find {stringInDoubleQuotes} 3BL microlist to delete', function (arg1) {
        return AdminMicrolistPage.Search3BLList(this.driver, arg1);
    });

    When('click on the detele link', function () {
        return AdminMicrolistPage.Delete3BLList(this.driver);
    });

    Then('list get deleted & redirect on list page', function () {
        return AdminMicrolistPage.ListDeleted(this.driver);
    });

    //Edit Email list
    When('find {stringInDoubleQuotes} 3BL mircolist & open it for edit', function (arg1) {
        return AdminMicrolistPage.Edit3BLList(this.driver, arg1);
    });

    Then('will update list details title and description', function () {
        return AdminMicrolistPage.Update3BLList(this.driver);
    });

    Then('I submit form. List get updated & success message get displayed on micro list page', function () {
        return AdminMicrolistPage.SubmitForm(this.driver);
    });

    //Add new email record to list
    When('find {stringInDoubleQuotes} 3BL mircolist & go to view subscribers', function (arg1) {
        return AdminMicrolistPage.viewSubscriber(this.driver, arg1);
    });

    When('click on Add Subscriber link & add new subscriber details', function () {
        return AdminMicrolistPage.AddSubscriber(this.driver);
    });

    Then('contact get added in the list & sucess message get displayed on the list page', function () {
        return AdminMicrolistPage.UpdateSubscriber(this.driver);
    });

    //Find and Remove email record from email list
    Then('select unwanted subscriber to remove', function () {
        return AdminMicrolistPage.selectSubscriber(this.driver);
    });
    
    Then('contact get removed from the list & sucess message get displayed on the list page', function () {
        return AdminMicrolistPage.RemoveSubscriber(this.driver);
    })
});