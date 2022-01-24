Feature: Standard user purchases highest and lowest cost items

I want to check that a standard user can sort products and make a purchase

Scenario: Opening a search engine page
Given User opens Swag Labs home page
When User logs in as standard user
And User sorts products from high to low
And User adds lowest and highest priced products to cart
Then User checks the products in their cart and goes to check out
And User inputs "bart", "simpson" and "e12 6se" and completes their purchase