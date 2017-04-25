Feature: Client microlist feature

  Background:
    Given I am logged in as client

#  Scenario: Add new email list
#    Given I am on client microlist page
#    When Visitor click on Add Email List link
#    Then Visitor will see form to upload email list

#Scenario: Delete email list
#    Given I am on client microlist page
#    When Visitor click on delete link
#    Then Visitor will see confirmation popup

  Scenario: Edit Email list
    Given I am on client microlist page
    When Visitor find "Team" mircolist and click on edit icon
    Then Visitor will update list name and description
#    And Name and description get updated successfully


