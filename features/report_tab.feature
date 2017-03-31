Feature: Email Analytic Report to other members.
  As a user of website and having client account.
  I able to login with client username and password
  So I can check company analytic reports.
#
#  Scenario: Go to analytic repots tab
#    Given I am on the home page
#    When I login as a client with username and password
#    Then I will be redirect on Analytic page on the "Summary" tab.
#    When  I click on the "Reports" Link.
#    Then I will redirect on Report page and page title will be "Summary Reports"
#    When I click on the Email Icon of "Six Month Analytics Summary Report".
#    Then email window will be open.
#    When I add email "prasana.alawekar@cuelogic.co.in" and message "This is analytic report".
#    And click on the submit button
#    Then email send to given email.

  #Analytics and Report Tab functionality
#    Scenario: Testing analytics view page
#      Given I am on the home page
#      When I login as a client with username and password
#      Then "Summary" tab will be opened
#      And "Best Performers" and "Analytics by Media Type" Sections will be viewable
#      Then Text "five of the best performing FMRs in the past 60 days" will be viewable
#
#    Scenario: Testing Analytics By Media Type page
#      Given I am on the home page
#      When I login as a client with username and password
#      Then "Summary" tab will be opened
#      And Click on "Press Releases" from Analytics by Media Type Section
#      When I will redirect on new page with section "Analytics by FMR"
#      Then Text "Select an FMR to view additional details" will be viewable


#    Scenario: Testing Analytics for FMR page
#      Given I am on the home page
#      When I login as a client with username and password
#      Then "Summary" tab will be opened
#      And Click on "Press Releases" from Analytics by Media Type Section
#      When I will redirect on new page with section "Analytics by FMR"
#      Then Click on FMR title
#      And New page gets open with section "Analytics for FMR" and "Geographical Stats"

#      Scenario: Test download PDF report
#        Given I am on the home page
#        When I login as a client with username and password
#        Then "Summary" tab will be opened
#        And Click on "Reports" tab
#        Then New page gets open with section "Analytics Summary by Media Type" and "Analytics Summary by Campaign"
#        When I select media type from dropdown

       Scenario: Email PDF
        Given I am on the home page
        When I login as a client with username and password
        Then "Summary" tab will be opened
        And Click on "Reports" tab
        Then New page gets open with section "Analytics Summary by Media Type" and "Analytics Summary by Campaign"
        When I click on the Email Icon of "Six Month Analytics Summary Report".
        Then email window will be open.
        When I add email "santosh.jagtap@cuelogic.co.in" and message "This is analytic report".
        And click on the submit button
        Then email send to given email.

#      Scenario: Test download EXCEL report
#        Given I am on the home page
#        When I login as a client with username and password
#        Then "Summary" tab will be opened
#        And Click on "Reports" tab
#        Then New page gets open with section "Analytics Summary by Media Type" and "Analytics Summary by Campaign"
#        When I select campaign from dropdown

#Scenario: Open report in the HTML format for download
#        Given I am on the home page
#        When I login as a client with username and password
#        Then "Summary" tab will be opened
#        And Click on "Reports" tab
#        Then New page gets open with section "Analytics Summary by Media Type" and "Analytics Summary by Campaign"
#        When I select summary report from dropdown





