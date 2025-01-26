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
      | John      | Doe      | 12345   |
    Then user should be redirected to the order confirmation page
    When user click finish in order confirmation page
    Then user should be redirected to the order completed page
    And user should see the message "THANK YOU FOR YOUR ORDER"
 
Examples:
    | productName          |
    | Sauce Labs Backpack  |