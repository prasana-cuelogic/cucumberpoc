Feature: Home page of website.
  @watch
  Scenario: Check latest news
    Given I am on the home link
    When visitor click on the latest news link
    Then visitor will see all latest news on the website
