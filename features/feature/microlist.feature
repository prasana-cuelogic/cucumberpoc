Feature: Client microlist feature

  Background:
    Given I am logged in as client

  Scenario: Add new email list
    Given I am on client microlist page
    When click on Add Email List
    Then submit form after adding respective details
    Then list get added & success message get displayed on micro list page


  Scenario: Delete email list
    Given I am on client microlist page
    When find "A test" microlist to delete
    And  click on the detele button and accept
    Then microlist get deleted & success message get displayed on micro list page

  Scenario: Edit Email list
    Given I am on client microlist page
    When select "Team" mircolist & open for edit
    Then after updating all details, I submit form
    Then list get updated & success message get displayed on micro list page

  Scenario: Add new email record to list
    Given I am on client microlist page
    When find "Team" mircolist
    And go to the add contact form
    Then submit the form after adding contact details

  Scenario: Find and Remove email record from email list
    Given I am on client microlist page
    When select "Team" mircolist & open for edit
    Then go to the contact list
    And remove unwanted contact
