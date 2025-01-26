Feature: Add to Cart and checkout

  Scenario: User add product to cart
    Given user login system
    When user add product to cart
    Then product should be added to cart
    When user click cart icon
    And user click checkout
    And user fill in your information witht the following details
      | firstname | lastname | zipcode |
      | John      | Doe      | 12345    |
    When user click finish in order confirmation page
    When user click back home in order complete page
 
