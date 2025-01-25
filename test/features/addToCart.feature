Feature: Add to Cart

  Scenario: User add product to cart
    Given user login system
    When user add product to cart
    Then product should be added to cart
