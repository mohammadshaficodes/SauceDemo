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

const login = new LoginPage();
const productList = new ProductListPage();
const checkout = new CheckoutPage();
const cart = new CartPage();
const success = new SuccessPage();

const url = "https://www.saucedemo.com/"

Given('User opens Swag Labs home page', () => {
    login.getUrl();
    login.getTitle();
    loginValidations.validateLogo();
});

When('User logs in as standard user', () => {
    login.usernameField().type('standard_user');
    login.passwordField().type('secret_sauce');
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
    checkout.firstNameInput(lastName);
    checkout.lastNameInput(lastName);
    checkout.postcodeInput(postcode);
    checkout.continueButton().click();
    checkoutPageValidations.validateFinishButton();
    checkout.finishButton().click(); 
    successPageValidations.validateHeaderText();
    successPageValidations.validateTitle();
});





