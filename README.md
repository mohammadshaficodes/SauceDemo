# Saucedemo# SauceDemo

# Saucedemo# SauceDemo

This project contains an automated e2e test of saucedemo.com

**To run this project**

You will need Cypress installed, please follow the guide on https://docs.cypress.io/guides/getting-started/installing-cypress#Installing

To run the test in the browser from the root directory, run the following command and click the feature file displayed in the cypress client:

npx cypress open

To run the test in headless mode, from the root directory, run:

npx cypress run

**A guide to the file structure:**

- Page objects are kept in the pageObjects folder
- Validations are kept in the validations folder and seperated per page
- User data is kept in testUser.json, in the fixtures folder

This structure has been chosen to allow this test framework to be scalable as more customers, pages, scenarios and validations are added.

