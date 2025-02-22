@ProductsCart
Feature: User interaction with available products

  Background:
    Given I am on the Demoblaze page

  @smoke @regression 
  Scenario: Add product to shopping cart
    When I click Laptops Category
    And I select any of the available products
    And I add product to the shopping cart
    And I click Cart to see the shopping cart
    Then Shopping cart page with one product added is displayed
