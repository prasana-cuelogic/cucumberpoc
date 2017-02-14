Feature: Clone Comparative summary report.
  As a admin of website.
  I able clone existing comparative reports.
  So I can reuse existing added data for creating similar comparative report.

  Scenario: Clone existing comparative group record
    Given I am on the "Comparative Summary Report" page.
    When I click on the "Clone" link.
    Then selected entity get cloned and I should redirect on the entity edit page.
    And title of page will be "Edit Comparative Client Group".
