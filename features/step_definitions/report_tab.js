require('chromedriver');
var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    /*Given('I am on the login page with {arg1:stringInDoubleQuotes} title', function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    When('I add correct {arg1:stringInDoubleQuotes} and {arg2:stringInDoubleQuotes}', function (arg1, arg2, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    When('click on the {arg1:stringInDoubleQuotes} button', function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Then('I should redirect on the home page.', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });*/

    Given('I am on the home page and logged in with client username and password.', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    When('I click on the {arg1:stringInDoubleQuotes} Link.', function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Then('I will be on the {arg1:stringInDoubleQuotes} tab.', function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Then('I click on the {arg1:stringInDoubleQuotes} Link.', function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Then('I will be Report page and page title will be {arg1:stringInDoubleQuotes}', function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Given('I am on the {arg1:stringInDoubleQuotes} tab.', function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    When('I click on the Email Icon of {arg1:stringInDoubleQuotes}.', function (arg1, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Then('email window will be open.', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    When('I add email {arg1:stringInDoubleQuotes} and message {arg2:stringInDoubleQuotes}.', function (arg1, arg2, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    When('click on the submit button', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Then('email send to given email.', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

});