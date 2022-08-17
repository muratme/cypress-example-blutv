/// <reference types="Cypress" />

class LoginPage {
    openPage(url){
        cy.visit(url)
    }
}

export default new LoginPage();
