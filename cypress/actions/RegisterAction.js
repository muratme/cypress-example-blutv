/// <reference types="Cypress" />

require('cypress-xpath');

import {RegisterPageSelector} from "../pages/RegisterPage"

class RegisterPage {

    selectMonth(month){
        cy.get(RegisterPageSelector.monthDropdown).eq(0).click()
        cy.get(RegisterPageSelector.monthListbox).eq(month-1).click()
    }

    selectYear(year){
        cy.get(RegisterPageSelector.yearDropdown).eq(1).click()
        cy.get('[data-testid="select-listbox-options-select-test"]>li').contains(year).click()
        
       // cy.xpath('//ul[@data-testid="select-listbox-options-select-test"]/li[text()="'+year+'"]').click()
    }


}

export default new RegisterPage();
