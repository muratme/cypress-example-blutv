/// <reference types="Cypress" />

class LoginPage {

    openPage(page_name) {
        cy.visit(Cypress.env('baseUrl')+page_name)
    }

}

export default new LoginPage();
