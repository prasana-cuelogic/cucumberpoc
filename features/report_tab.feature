#Feature: Email Analytic Report to other members.
#  As a user of website and having client account.
#  I able to login with client username and password
#  So I can check company analytic reports.
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