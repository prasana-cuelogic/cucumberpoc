Feature: Admin microlist feature

  Background:
    Given I am logged in as admin

  #Scenarios for Admin Micro List

  Scenario: Add new admin email list
    Given I am on admin microlist page
    When click on Add 3BL Micro List
    Then will fill the form and save list
    Then List get added & success message get displayed on micro list page

  Scenario: Delete email list
    Given I am on admin microlist page
    When find "test" 3BL microlist to delete
    Then click on the detele link
    Then list get deleted & redirect on list page


  Scenario: Edit Email list
    Given I am on admin microlist page
    When find "test" 3BL mircolist & open it for edit
    Then will update list details title and description
    When I submit form. List get updated & success message get displayed on micro list page

  Scenario: Add new email record to list
    Given I am on admin microlist page
    When find "test" 3BL mircolist & go to view subscribers
    And click on Add Subscriber link & add new subscriber details
    Then contact get added in the list & sucess message get displayed on the list page

  Scenario: Find and Remove email record from email list
    Given I am on admin microlist page
    When find "test" 3BL mircolist & go to view subscribers
    Then select unwanted subscriber to remove
    And contact get removed from the list & sucess message get displayed on the list page
