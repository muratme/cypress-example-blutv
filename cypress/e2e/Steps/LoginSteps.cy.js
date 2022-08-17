/// <reference types="Cypress" />

import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import loginPage from "../../pages/loginPage"

Given ("Open {string} Page", (page_name)=> {
    loginPage.openPage(page_name)  
})

When ("Fulfill Login Form", ()=> {
    cy.get('[data-testid="input-username-login"]').type('test@test.com')
    cy.get('[data-testid="input-password-login"]').type('password')
    cy.get('[data-testid="button-login"]').click()
})

Then ("Assert Profile Avatar", ()=> {
    cy.get('button[data-testid="pages-profile-manage-profiles"]').should('be.visible', true)
})

