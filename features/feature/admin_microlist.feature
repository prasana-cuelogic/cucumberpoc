Feature: Admin microlist feature

  Background:
    Given I am logged in as admin

  Scenarios for Admin Micro List

  Scenario: Add new admin email list
    Given I am on admin microlist page
    When click on Add 3BL Micro List
    Then will fill the form and save list
    Then List get added & success message get displayed on micro list page

  Scenario: Delete email list
    Given I am on admin microlist page
    When find "test" 3BL microlist to delete
    Then click on the detele link
    Then List get deleted & success message get displayed on micro list page


  Scenario: Edit Email list
    Given I am on admin microlist page
    When find "test" 3BL mircolist & open it for edit
    Then will update list details title and description
    When I submit form. List get updated & success message get displayed on micro list page

  Scenario: Add new email record to list
    Given I am on admin microlist page
    When find "test" 3BL mircolist
    And go to Subscribers list & click on Add Subscriber link
    Then add new subscriber details
    And contact get added in the list & sucess message get displayed on the list page.

  Scenario: Find and Remove email record from email list
    Given I am on admin microlist page
    When find "test" 3BL mircolist
    And go to the Subscribers list page.
    Then remove unwanted subscriber
    And contact get removed from the list & sucess message get displayed on the list page.
