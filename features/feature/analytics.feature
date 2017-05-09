@analytics
Feature: Analytics feature

  Background:
    Given I am logged in as client

 #Analytics and Report Tab functionality
    @smokeTest
    Scenario: Testing analytics view page
      Given I am on summary tab of analytics page
      Then Graph for past 60 days impressions is visible
      And section Best Performers is visible
      And Analytics by Media Type chart is viewable
    @smokeTest
    Scenario: Testing Analytics By Media Type page
      Given I am on summary tab of analytics page
      When I click on Media Type and analytics by media type page get open
      Then Analytics by FMR chart is viewable
    @smokeTest
    Scenario: Testing analytics for FMR page
      Given I am on summary tab of analytics page
      When I click on Media Type and analytics by media type page get open
      Then I will click on FMR title
      And page gets open with FMR Analytics and Geographical Stats

    Scenario: Testing Best Performer FMRs analytics
      Given I am on summary tab of analytics page
      When I click on FMR title from Best Performers section
      Then page gets open with FMR Analytics and Geographical Stats

  Scenario: Testing By title page
      Given I am on by title tab of analytics page
      Then Graph for past 60 days impressions is visible
      And Analytics by FMR chart is viewable

