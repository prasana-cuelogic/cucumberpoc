Feature: Clone Comparative summary report.
  As a admin of website.
  I able clone existing comparative reports.
  So I can reuse existing added data for creating similar comparative report.

#  Scenario: Login and Clone existing comparative group record
#    Given I am on the home page
#    When I login with username and password
#    Then I should redirect on the "Comparative Client Group" page
#    When I search "Financials" exisitng record.
#    And click on the "Apply" button.
#    Then I will get "Financials" matching records.
#    When I pick first record and click on the "Clone" link.
#    Then selected entity get cloned and I should redirect on the entity edit page.
#    And title of page will be "Edit Comparative Client Group".
#    When I click on the "Save" button
#    Then I will redirect on the listing page.

#  Scenario: Create new Group
#    Given I am on the home page
#    When I login with username and password
#    Then I should redirect on the "Comparative Client Group" page
#    And click on the "+ Add Comparative Client Group" link
#    Then I will go to "Add Comparative Client Group" page
#    When I add "My new group" title  and "My report" subtitle of the report
#    Then I click on the "Clients" tab
#    And select companies for creating group
#    And select subscribers
#    When I click on the Save button
#    Then I should redirect on the "Comparative Client Group" page
#
#  Scenario: Edit Group
#    Given I am on the home page
#    When  I login with username and password
#    Then  I should redirect on the "Comparative Client Group" page
#    When  I search for "My final clone" group
#    And click on the "edit" link
#    Then  I will go to "Edit Comparative Client Group" page
#    When  I update "Group Report Status" to "0" and save data.
#    Then  Record gets updated and I redirected on the listing page.

#  Scenario: Delete unwated records from list.
#    Given I am on the home page
#    When I login with username and password
#    Then  I should redirect on the "Comparative Client Group" page
#    When  I search for "Copy karen testing 2" group
#    And click on the "delete" link
#    Then I should redirect on the delete confirmation page with message "Are you sure that you want to delete"
#    When I click on the "Delete" button.
#    Then Record gets deleted and I redirected on the "Comparative Client Group" listing page.

#  Scenario: Edit Comparative Quarterly Summary Report
#    Given I am on the home page
#    When I login with username and password
#    Then  I should redirect on the "http://test1.3blmedia.com/admin/comparative-summary-report" link and "Comparative Quarterly Summary Report" page
#    When  I search for "Green Builder Media" companies report of quarter "4" for year "2016"
#    And click on the "edit" link
#    Then I sholud redirect on the "Edit Comparative Summary Report" page.
#    When I update "Summary Report Status" to "Active" and save data.
#    Then Record gets updated and I redirected on the "Comparative Quarterly Summary Report" listing page.

#  Scenario: Delete Comparative Quarterly Summary Report
#    Given I am on the home page
#    When I login with username and password
#    Then  I should redirect on the "http://test1.3blmedia.com/admin/comparative-summary-report" link and "Comparative Quarterly Summary Report" page
#    When  I search for "Green Builder Media" companies report of quarter "4" for year "2016"
#    And click on the "delete" link
#    Then I should redirect on the delete confirmation page with message "Are you sure that you want to delete"
#    When I click on the "Delete" button.
#    Then Record gets deleted and I redirected on the "Comparative Client Group" listing page.

  Scenario: Check Preview Comparative Quarterly Summary Report
    Given I am on the home page
    When I login with username and password
    Then  I should redirect on the "http://test1.3blmedia.com/admin/comparative-summary-report" link and "Comparative Quarterly Summary Report" page
    When  I search for "BJ's Wholesale Club" companies report of quarter "4" for year "2016"
    And click on the "Preview" link
    Then "Comparative Quarterly Summary Report Q4-2016" report should be open in the new tab
    And report title should be "BJ's Wholesale Club"

  Scenario: View Comparative Quarterly Summary Report
    Given I am on the home page
    When I login with username and password
    Then  I should redirect on the "http://test1.3blmedia.com/admin/comparative-summary-report" link and "Comparative Quarterly Summary Report" page
    When  I search for "BJ's Wholesale Club" companies report of quarter "4" for year "2016"
    And click on the "Preview" link
    Then "Comparative Quarterly Summary Report Q4-2016" report should be open in the new tab
    And report title should be "BJ's Wholesale Club"