Feature: FMR Report feature

  Background:
    Given I am logged in as admin

  Scenario: Search, filter & Sort Record
    Given I am on admin FMR report page
    When I search fmr from list
    Then I click on Report link and report open in new tab
    Then Impressions and Clicks visible on page

  Scenario: Check Week at a glance Analytics
    Given I am on Week at a glance Analytics page
    When I search fmr and click on it
    Then FMR detail page get open

  Scenario: Check Week at a glance Company Details
    Given I am on Week at a glance Analytics page
    When I search company and click on it
    Then Company detail page get open