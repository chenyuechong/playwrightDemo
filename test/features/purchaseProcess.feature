Feature: purchase process
  Background:
    Given user open the login page
    When user enter valid credentials
    Then user should be redirected to the product page

    
  Scenario: User add product to cart
    When user clicks "<productName>" in the products list
    Then user should be redirected to the product details page
    When user clicks the "Add to Cart" button 
    When user click cart icon
    And user click checkout
    And user fill in your information witht the following details
      | firstname | lastname | zipcode |
      | John      | Doe      | 12345    |
    When user click finish in order confirmation page
    When user click back home in order complete page
 
Examples:
    | productName          |
    | Sauce Labs Backpack  |