Feature: Add to Cart

  Background:
    Given user open the login page
    When user enter valid credentials
    Then user should be redirected to the product page

    
  Scenario:  add a product to cart
    When user clicks "<productName>" in the products list
    Then user should be redirected to the product details page
    When user clicks the "Add to Cart" button 
    Then the "Add to Cart" button changes to "Remove"
    When user click the "Remove" button
    Then the "Remove" button changes to "Add to Cart"
    Examples:
    | productName          |
    | Sauce Labs Backpack  |

  
  