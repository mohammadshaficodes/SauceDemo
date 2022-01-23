export class LoginPage {
    getUrl() {
        return cy.visit("https://www.saucedemo.com/")
    }
    getTitle() {
        return cy.title('Swag Labs')
    }
    usernameField() {
        return cy.get('[data-test="username"]')
    }
    passwordField() {
        return cy.get('[data-test="password"]')
    }
    logInButton() {
        return cy.get('[data-test="login-button"]')
    }
    logInLogo() {
        return cy.get('.login_logo')
    }
}