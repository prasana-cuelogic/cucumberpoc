#Feature: Update or delete client summary report.
#  As a admin of website.
#  I able update existing summary reports.
#  Also able to delete unwanted reports.

#
#  Scenario: Update data for summary report.
#    Given I am on the home page
#    When I login with username and password
#    Then I am going to "Summary Report" page.
#    When I search for "Capital Institute" companies report of quarter "4" for year "2016"
#    And Click on the edit link
#    Then I sholud redirect on the "Edit Summary Report" page.
#    When I update "Summary Report Status" to "0" and save data.
#    Then Record gets updated and I redirected on the listing page.

#  Scenario: Check Preview client summary report.
#    Given I am on the home page
#    When I login with username and password
#    Then I am going to "Summary Report" page.
#    When I search for "Darden Restaurants" companies report of quarter "2" for year "2016"
#    And Click on the preview link
#    Then report should be open in the new tab
#    And report title should be "Darden Restaurants 2016 - Q2"

#  Scenario: View client summary report.
#    Given I am on the home page
#    When I login with username and password
#    Then I am going to "Summary Report" page.
#    When I search for "Darden Restaurants" companies report of quarter "2" for year "2016"
#    And  click on the view link
#    Then client report should be open in the new tab
#    And report title should be "Darden Restaurants 2016 - Q2"

#  Scenario: Delete unwated records from list.
#    Given I am on the home page
#    When I login with username and password
#    Then I am going to "Summary Report" page.
#    When I search for "Capital Institute" companies report of quarter "3" for year "2016"
#    And Click on the delete link.
#    Then I should redirect on the delete confirmation page with message "Are you sure that you want to delete"
#    When I click on the "Delete" button.
#    Then Record gets deleted and I redirected on the "Summary Report" listing page.
