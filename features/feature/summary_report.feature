Feature: Update or delete client summary report.
  As a admin of website.
  I able update existing summary reports.
  Also able to delete unwanted reports.

  Background:
    Given I am logged in as admin

  Scenario: Update data for summary report.
    Given I am on summary report listing
    When Search summary report
    And Open report for edit
    Then Update report & save data
    Then Redirect on listing page with success message

  Scenario: Check Preview client summary report.
    Given I am on summary report listing
    When Search summary report
    And Click on the preview link
    Then Report preview should be open in the new tab

  Scenario: View client summary report.
    Given I am on summary report listing
    When Search summary report
    And  Click on the view link
    Then Report preview should be open in the new tab

#  Scenario: Delete unwated records from list.
#    Given I am on summary report listing
#    When Search summary report
#    And Click on the delete link
#    Then Redirect on listing page
