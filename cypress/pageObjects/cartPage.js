export class CartPage {
    checkoutButton() {
        return cy.get('[data-test="checkout"]')
    }
    pageTitle() {
        return cy.get('.title')
    }
}



