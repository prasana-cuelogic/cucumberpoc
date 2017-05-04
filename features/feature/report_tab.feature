Feature: Email Analytic Report to other members.
  As a user of website and having client account.
  I able to login with client username and password
  So I can check company analytic reports.

  Background:
    Given I am logged in as client

  Scenario: Email analytic summary report pdf.
    Given I am on the report tab
    When I select email option for the analytic report
    And Submit form after adding email and message
    Then email send to given email id

  Scenario: Download PDF report
    Given I am on the report tab
    When Select any option from Analytics Summary by Media Type report
    Then Click on the PDF icon and report should be download

  Scenario: Download EXCEL report
    Given I am on the report tab
    When  Click on the FMR Reports excel
    Then  Report get downloaded

  Scenario: Open report in the HTML format for download
    Given I am on the report tab
    When Select summary report
    Then Click on the HTML icon and report get opened in new tab










