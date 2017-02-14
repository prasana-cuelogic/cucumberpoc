Feature: Update or delete client summary report.
  As a admin of website.
  I able update existing summary reports.
  Also able to delete unwanted reports.

  Scenario: Delete unwated records from list.
    Given I am on the "Summary Report" page.
    When I search for "Capital Institute" companies report of quarter "2" for year "2016"
    And Click on the delete link.
    Then I should redirect on the delete confirmation page with message "Are you sure that you want to delete"
    When I click on the "Delete" button.
    Then Record gets deleted and I redirected on the listing page.

  Scenario: Update data for summary report.
    Given I am on the "Summary Report" page.
    When I search for "Capital Institute" companies report of quarter "2" for year "2016"
    And Click on the edit link
    Then I sholud redirect on the "Edit Summary Report" page.
    When I update "Summary Report Status" to Inactivate.
    And click on the "Save" button.
    Then Record gets updated and I redirected on the listing page.
