#Feature: Email Analytic Report to other members.
#  As a user of website and having client account.
#  I able to login with client username and password
#  So I can check company analytic reports.
#
#  Scenario: Login with client username and password
#    Given I am on the login page with "User Login" title
#    When I add correct "uname" and "password"
#    And click on the "submit" button
#    Then I should redirect on the home page.
#
#  Scenario: Go to analytic repots tab
#    Given I am on the home page and logged in with client username and password.
#    When I click on the "ANALYTICS" Link.
#    Then I will be on the "Summary" tab.
#    And  I click on the "Reports" Link.
#    Then I will be Report page and page title will be "Summary Reports"
#
#  Scenario: Email report to other memebers
#    Given I am on the "Report" tab.
#    When I click on the Email Icon of "Six Month Analytics Summary Report".
#    Then email window will be open.
#    When I add email "prasana.alawekar@cuelogic.co.in" and message "This is analytic report".
#    And click on the submit button
#    Then email send to given email.