// var seleniumWebdriver = require('selenium-webdriver'), By = seleniumWebdriver.By,
//     AdminMicrolistPage = require('../page_object/admin_microlist.page'),
//     LoginPage = require('../page_object/login.page'),
//     {defineSupportCode} = require('cucumber');
//
//
// defineSupportCode(function ({Given, When, Then, setDefaultTimeout}) {
//     setDefaultTimeout(50 * 1000);
//     Given('I am logged in as admin', function () {
//         return LoginPage.adminLogin(this.driver);
//     });
//
//     Given(/^I am on admin microlist page$/, function() {
//         return AdminMicrolistPage.openadmin(this.driver);
//     });
//
//     When('Visitor click on Add 3BL Micro List', function () {
//         AdminMicrolistPage.ClickAdd3BLList(this.driver);
//     });
//
//     Then('Visitor will fill the form and save list', function () {
//         AdminMicrolistPage.Add3BLList(this.driver);
//     });
//
//     When('Visitor find {stringInDoubleQuotes} 3BL microlist to delete', function (arg1) {
//         return AdminMicrolistPage.Search3BLList(this.driver, arg1);
//     });
//
//     When('click on the detele link and accept', function () {
//         return AdminMicrolistPage.Delete3BLList(this.driver);
//     });
//
//     When('Visitor find {stringInDoubleQuotes} 3BL mircolist', function (arg1) {
//         return AdminMicrolistPage.Search3BLList(this.driver, arg1);
//     });
//
//     When('click on edit icon of 3BL microlist', function () {
//         return AdminMicrolistPage.Edit3BLList(this.driver);
//     });
//
//     Then('Visitor will update list title and description', function () {
//         return AdminMicrolistPage.Update3BLList(this.driver);
//     });
//
//     Then('click on View Subscribers link and then click on Add Subscriber link', function () {
//         return AdminMicrolistPage.AddSubscriber(this.driver);
//     });
//
//     Then('Visitor add new subscriber details and save', function () {
//         return AdminMicrolistPage.UpdateSubscriber(this.driver);
//     });
//
//     Then('click on View Subscribers link and remove subscriber from list', function () {
//         return AdminMicrolistPage.RemoveSubscriber(this.driver);
//     })
// });