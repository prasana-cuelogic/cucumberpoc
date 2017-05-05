Feature: Check tracking report for the published FMRs.
  As a Client of site.
  I able to check tracking report for the my published FMRs.
  Also I able to download that report in PDF or excel format.

  Background:
    Given I am logged in as client

  Scenario: Check FMR tracking report for published FMR.
    Given I am on the trackin page
    When Select FMR from drop-down
    Then Tracking results will be listed down for the selected FMR

  Scenario: Download tracking report for selected FMR
    Given I am on the trackin page
    When I click on the PDF icon
    Then Report will be download

  Scenario: Download tracking report for selected FMR
    Given I am on the trackin page
    When I click on the Excel icon
    Then Report will be download