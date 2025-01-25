Feature: Login functionality

  Scenario: User logs in with correct credentials
    Given I open the login page
    When I enter valid credentials
    Then I should be redirected to the dashboard
