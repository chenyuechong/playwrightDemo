Feature: Login functionality


  Scenario: User  with valid credentials
    Given user open the login page
    When user enter valid credentials
    Then user should be redirected to the product page


  Scenario Outline: User with invalid credentials
    Given user open the login page
    When user enter "<username>" and "<password>"
    Then user should see an error message
    

    Examples:
      | username        | password       |
      | invalid_user1   | wrong_password |
      | invalid_user2   | wrong_password |