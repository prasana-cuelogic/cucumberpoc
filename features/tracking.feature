Feature: Check tracking report for the published FMRs.
  As a Client of site.
  I able to check tracking report for the my published FMRs.
  Also I able to download that report in PDF or excel format.

  Scenario: Check FMR tracking report for published FMR.
    Given I am on the home page
    When I login with username and password
    Then I go to "http://test1.3blmedia.com/Dashboard/Analytics/Tracking" link and page title is "TRACKING SUMMARY"
    When I select FMR from dropdown
    Then Tracking results will be listed down for the selected FMR

#  Scenario: Download tracking report for selected FMR
#    Given I am on the home page
#    When I login with username and password
#    Then I go to "http://test1.3blmedia.com/Dashboard/Analytics/Tracking" link and page title is "TRACKING SUMMARY"
#    When I select FMR from dropdown
#    Then Tracking results will be listed down for the selected FMR
#    When I click on the PDF icon
#    Then Report will be get downloaded as PDF
