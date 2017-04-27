Feature: Email Analytic Report to other members.
  As a user of website and having client account.
  I able to login with client username and password
  So I can check company analytic reports.

  Background:
    Given I am logged in as client

#   Scenario: Email analytic summary report pdf.
#    Given I am on the report tab
#    When I select email option for the analytic report
#    And Submit form after adding email and message
#    Then email send to given email id

#    Scenario: Download PDF report
#      Given I am on the report tab
#      When Select any option from Analytics Summary by Media Type report
#      Then Click on the PDF icon and report should be download


    Scenario: Download EXCEL report
      Given I am on the report tab
      When  Download FMR Reports excel

#Scenario: Open report in the HTML format for download
#        Given I am on the home page
#        When I login as a client with username and password
#        Then "Summary" tab will be opened
#        And Click on "Reports" tab
#        Then New page gets open with section "Analytics Summary by Media Type" and "Analytics Summary by Campaign"
#        When I select summary report from dropdown










