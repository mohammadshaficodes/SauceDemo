import { SuccessPage } from "../pageObjects/successPage.js"

const SUCCESS_PAGE = new SuccessPage();

export const validateTitle = () => {
    SUCCESS_PAGE.getTitle().should('have.text', 'Checkout: Complete!');
};

export const validateHeaderText = () => {
    SUCCESS_PAGE.orderCompleteHeader().should('have.text', 'THANK YOU FOR YOUR ORDER');
};