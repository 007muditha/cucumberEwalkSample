import { Given , When,  Then } from 'cypress-cucumber-preprocessor/steps'

Given('User go to Ewalk.lk', () => {
    cy.visit('https://ewalk.lk')
})

Then("User click on Contact Us",() => {
    cy.get('#basic-navbar-nav > div > a:nth-child(6)').click()
})