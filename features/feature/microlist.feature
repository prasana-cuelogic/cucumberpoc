Feature: Client microlist feature

  Background:
    Given I am logged in as client

#  Scenario: Add new email list
#    Given I am on client microlist page
#    When Visitor click on Add Email List
#    Then Visitor will see form to upload email list

Scenario: Delete email list
    Given I am on client microlist page
    When Visitor find "A test" microlist to delete
    And  click on the detele button and accept
    Then microlist get deleted & success message get displayed

#  Scenario: Edit Email list
#    Given I am on client microlist page
#    When Visitor find "Team" mircolist
#    And click on edit icon
#    Then Visitor will update list name and description