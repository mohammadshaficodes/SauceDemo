export class CheckoutPage {
    firstNameInput(firstName) {
        return cy.get('[data-test="firstName"]')
    }
    lastNameInput(lastName) {
        return cy.get('[data-test="lastName"]')
    }
    postcodeInput(postcode) {
        return cy.get('[data-test="postalCode"]')
    }
    continueButton() {
        return cy.get('[data-test="continue"]')
    }
    finishButton() {
        return cy.get('[data-test="finish"]')
    }
}