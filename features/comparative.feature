#Feature: Clone Comparative summary report.
#  As a admin of website.
#  I able clone existing comparative reports.
#  So I can reuse existing added data for creating similar comparative report.
#
# Scenario: Login and Clone existing comparative group record
#  Given I am on the home page
#  When I login with username and password
#  Then I should redirect on the "Comparative Summary Report" page
#  When I search "Financials" exisitng record.
#  And click on the "Apply" button.
#  Then I will get "Financials" matching records.
#  When I pick first record and click on the "Clone" link.
#  Then selected entity get cloned and I should redirect on the entity edit page.
#  And title of page will be "Edit Comparative Client Group".
#  When I click on the "Save" button
#  Then I will redirect on the listing page.
