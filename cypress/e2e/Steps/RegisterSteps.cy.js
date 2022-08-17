/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import registerPage from "../../actions/RegisterAction"

When("Fullfill Register Form", () => {
    var randomName = Math.random().toString(18).slice(2)
    cy.get('[data-testid="input-name-register-form"]').type('Ali Kaan Kaplan')
    cy.get('[data-testid="autocomplete-domain-test"]').type(randomName + '@test.com')
    cy.get('[data-testid="passwordhint-register-form"]').type('123456aa')
    cy.get('[data-testid="test-checkbox"]').check()
    cy.get('[data-testid="button-register-form"]').click()
})

And ("Fullfill Credit Card Form", () => {
    cy.get('[data-testid="card-number-input-credit-card-form-test"]').type('5526080000000006')
    registerPage.selectMonth(10)
    registerPage.selectYear(29)
    cy.get('[data-testid="card-cvv-input-credit-card-form-test"]').type("111")
    cy.get('[data-testid="test-checkbox"]').check()
    cy.get('[data-testid="button-credit-card-test"]').click()
})