Feature: FMR Report feature

  Background:
    Given I am logged in as admin


  Scenario: Search, filter & Sort Record
    Given I am on admin FMR report page
    When Visitor search with title containing "Test"
    And filter with type as "Campaign"
    Then Visitor Sort records with Published column


