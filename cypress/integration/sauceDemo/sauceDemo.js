import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../../pageObjects/loginPage.js"
import { ProductListPage } from "../../pageObjects/productListPage.js"
import { CheckoutPage } from "../../pageObjects/checkoutPage.js"
import { CartPage } from "../../pageObjects/cartPage.js"
import { SuccessPage } from "../../pageObjects/successPage.js";
import * as loginValidations from "../../validations/validateLoginPage.js"
import * as productListValidations from "../../validations/validateProductListPage.js"
import * as cartPageValidations from "../../validations/validateCartPage.js"
import * as checkoutPageValidations from "../../validations/validateCheckoutPage.js"
import * as successPageValidations from "../../validations/validateSuccessPage.js"
import userTest from "../../fixtures/testUser.json"

const login = new LoginPage();
const productList = new ProductListPage();
const checkout = new CheckoutPage();
const cart = new CartPage();
const success = new SuccessPage();

Given('User opens Swag Labs home page', () => {
    login.getUrl();
    login.getTitle();
    loginValidations.validateLogo();
});

When('User logs in as standard user', () => {
    cy.fixture('testUser').as('userTest')
    login.usernameField().type(userTest.username);
    login.passwordField().type(userTest.password);
    login.logInButton().click();
});

And('User sorts products from high to low', () => {
    productList.sortLoHi();
    productListValidations.validateCartButton();
});

And('User adds lowest and highest priced products to cart', () => {
    productList.cheapestProduct().click();
    productList.dearestProduct().click();
});

Then('User checks the products in their cart and goes to check out', () => {
    productList.cartButton().click(); 
    cartPageValidations.validateTitle();
    cart.checkoutButton().click();
    checkoutPageValidations.validateContinueButton();
});

And('User inputs {string}, {string} and {string} and completes their purchase', (firstName, lastName, postcode) => {
    checkout.firstNameInput().type(userTest.firstName);
    checkout.lastNameInput().type(userTest.lastName);
    checkout.postcodeInput().type(userTest.postcode);
    checkout.continueButton().click();
    checkoutPageValidations.validateFinishButton();
    checkout.finishButton().click(); 
    successPageValidations.validateHeaderText();
    successPageValidations.validateTitle();
});