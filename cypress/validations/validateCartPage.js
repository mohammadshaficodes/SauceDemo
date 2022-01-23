import { CartPage } from "../pageObjects/cartPage.js"

const CART_PAGE = new CartPage();

export const validateTitle = () => {
    CART_PAGE.pageTitle().should('have.text', 'Your Cart');
};
