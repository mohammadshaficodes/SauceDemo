export class CheckoutPage {
    firstNameInput(firstName) {
        return cy.get('[data-test="firstName"]').type(firstName)
    }
    lastNameInput(lastName) {
        return cy.get('[data-test="lastName"]').type(lastName)
    }
    postcodeInput(postcode) {
        return cy.get('[data-test="postalCode"]').type(postcode)
    }
    continueButton() {
        return cy.get('[data-test="continue"]')
    }
    finishButton() {
        return cy.get('[data-test="finish"]')
    }
}