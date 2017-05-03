Feature: FMR Report feature

  Background:
    Given I am logged in as admin


  Scenario: Search, filter & Sort Record
    Given I am on admin FMR report page
    When I search filter and sort fmr list
    Then I click on Report link and report open in new tab
    And Primary Category and Impressions text visible

#  Scenario: Check views and clicks data
#    Given I am on admin FMR report page
#    When Visitor search with title containing "content"
#    And click on Report link and report with title "Fmr report | 3BL Media" open in new tab
#    Then Impressions and Clicks visible on page

#  Scenario: Check Week at a glance Analytics
#    Given I am on Week at a glance Analytics page
#    When I search fmr and click on it
#    Then FMR detail page get open