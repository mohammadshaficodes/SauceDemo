import { CheckoutPage } from "../pageObjects/checkoutPage.js"

const CHECKOUT_PAGE = new CheckoutPage();

export const validateContinueButton = () => {
    CHECKOUT_PAGE.continueButton().should('exist');
};

export const validateFinishButton = () => {
    CHECKOUT_PAGE.finishButton().should('exist');
};