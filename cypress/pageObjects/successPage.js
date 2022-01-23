export class SuccessPage {
    getUrl() {
        return cy.visit("https://www.saucedemo.com/")
    }
    getTitle() {
        return cy.get('.title')
    }
    orderCompleteHeader() {
        return cy.get('.complete-header')
    }
}